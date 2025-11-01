import CMO_DATA from "./data.js";

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");
const servicesGrid = document.querySelector("#services-grid");
const specialistsGrid = document.querySelector("#specialists-grid");
const labList = document.querySelector("#lab-tests");
const newsGrid = document.querySelector("#news-grid");
const panelOverlay = document.querySelector("[data-panel-overlay]");
const panels = Array.from(document.querySelectorAll("[data-panel]"));
const panelTriggers = Array.from(document.querySelectorAll("[data-panel-trigger]"));
const testimonialsViewport = document.querySelector("#testimonials-viewport");
const banner = document.querySelector("#banner-emergente");
const bannerText = banner?.querySelector(".banner__text");
const bannerClose = banner?.querySelector(".banner__close");
const yearSpan = document.querySelector("#year");
const pageType = document.body?.dataset.page || "home";

const state = {
  testimonialIndex: 0,
  panelOpen: null,
};

const closeAllPanels = () => {
  panels.forEach((panel) => {
    panel.removeAttribute("data-active");
    panel.setAttribute("aria-hidden", "true");
  });
  panelTriggers.forEach((trigger) => trigger.setAttribute("aria-expanded", "false"));
  if (panelOverlay) {
    panelOverlay.setAttribute("hidden", "");
    panelOverlay.removeAttribute("data-active");
  }
  document.body.classList.remove("nav-panel-open");
  state.panelOpen = null;
};

const openPanel = (panelId) => {
  const panel = panels.find((item) => item.dataset.panel === panelId);
  if (!panel) return;
  closeAllPanels();
  panel.setAttribute("data-active", "true");
  panel.setAttribute("aria-hidden", "false");
  panelTriggers
    .filter((trigger) => trigger.dataset.panelTrigger === panelId)
    .forEach((trigger) => trigger.setAttribute("aria-expanded", "true"));
  if (panelOverlay) {
    panelOverlay.removeAttribute("hidden");
    panelOverlay.setAttribute("data-active", "true");
  }
  document.body.classList.add("nav-panel-open");
  state.panelOpen = panelId;
};

const togglePanel = (panelId) => {
  if (state.panelOpen === panelId) {
    closeAllPanels();
  } else {
    openPanel(panelId);
  }
};

const isMobileNavOpen = () => siteNav?.getAttribute("data-open") === "true";

const setMobileNavState = (isOpen) => {
  navToggle?.setAttribute("aria-expanded", String(isOpen));
  siteNav?.setAttribute("data-open", String(isOpen));
  document.body.classList.toggle("nav-open", isOpen);
  if (!isOpen) {
    closeAllPanels();
  }
};

const closeMobileNav = () => setMobileNavState(false);

const initSmoothScroll = () => {
  const scrollLinks = document.querySelectorAll("[data-scroll]");
  scrollLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href")?.replace("#", "");
      const target = targetId ? document.getElementById(targetId) : null;
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
};

navToggle?.addEventListener("click", () => {
  setMobileNavState(!isMobileNavOpen());
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    closeMobileNav();
    closeAllPanels();
  });
});

panelTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const target = trigger.dataset.panelTrigger;
    if (!target) return;
    togglePanel(target);
  });
});

panels.forEach((panel) => {
  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeAllPanels();
      closeMobileNav();
    });
  });

  panel.querySelectorAll("[data-panel-close]").forEach((button) => {
    button.addEventListener("click", () => closeAllPanels());
  });
});

panelOverlay?.addEventListener("click", () => {
  closeAllPanels();
  closeMobileNav();
});

document.addEventListener("pointerdown", (event) => {
  const target = event.target;
  const interactedWithNav = target.closest?.("#site-nav") || target.closest?.(".nav-toggle") || target.closest?.("[data-panel]");
  if (!interactedWithNav) {
    closeAllPanels();
  }
  if (isMobileNavOpen() && !interactedWithNav) {
    closeMobileNav();
  }
});

document.addEventListener("focusin", (event) => {
  const target = event.target;
  if (!target.closest?.("[data-panel]") && !target.closest?.("[data-panel-trigger]")) {
    closeAllPanels();
  }
});

globalThis.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeAllPanels();
    if (isMobileNavOpen()) {
      closeMobileNav();
    }
  }
});

const renderServices = () => {
  if (!servicesGrid) return;
  const items = CMO_DATA.services.slice(0, 4);
  servicesGrid.innerHTML = items
    .map(
      (service) => `
        <article class="service-card" data-service="${service.id}">
          <div class="service-card__icon" aria-hidden="true">${service.icon}</div>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
          <div class="service-card__actions">
            <a class="btn btn--ghost" href="${service.id === "laboratorio" ? "templates/laboratorio.html" : `templates/${service.id}.html`}">Ver especialidad</a>
            <button class="btn btn--primary" data-service-cta="${service.id}">Agendar</button>
          </div>
        </article>
      `
    )
    .join("");
};

const renderSpecialists = () => {
  if (!specialistsGrid) return;
  const items = CMO_DATA.specialists.slice(0, 3);
  specialistsGrid.innerHTML = items
    .map(
      (specialist) => `
        <article class="specialist-card">
          <img src="${specialist.photo}" alt="${specialist.name}" loading="lazy" />
          <div>
            <h3>${specialist.name}</h3>
            <p>${specialist.specialty}</p>
            <p class="specialist-card__meta">${specialist.schedule}<br />${specialist.format}</p>
          </div>
          <button class="btn btn--ghost" data-specialist="${specialist.id}">Agendar cita</button>
        </article>
      `
    )
    .join("");
};

const renderLabTests = () => {
  if (!labList) return;
  labList.innerHTML = CMO_DATA.labTests.map((test) => `<li>${test}</li>`).join("");
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const formatter = new Intl.DateTimeFormat("es-CR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return formatter.format(date).replace(".", "");
};

const renderNews = () => {
  if (!newsGrid) return;
  const items = CMO_DATA.news.slice(0, 3);
  newsGrid.innerHTML = items
    .map(
      (item) => `
        <article class="news-card" data-category="${item.category}">
          <div class="news-card__meta">
            <span class="news-card__tag">${item.category}</span>
            <time datetime="${item.date}">${formatDate(item.date)}</time>
          </div>
          <h3>${item.title}</h3>
          <p>${item.excerpt}</p>
          <a href="${item.link || "templates/noticias.html"}" class="btn btn--ghost">Leer más</a>
        </article>
      `
    )
    .join("");
};

const renderTestimonials = () => {
  if (!testimonialsViewport) return;
  const cards = CMO_DATA.testimonials
    .map(
      (item, index) => `
        <article class="testimonial-card" data-active="${index === state.testimonialIndex}">
          <p>“${item.quote}”</p>
          <p class="testimonial-card__author">${item.author}</p>
        </article>
      `
    )
    .join("");
  testimonialsViewport.innerHTML = cards;
};

const handleServiceCTA = (event) => {
  const button = event.target.closest("[data-service-cta]");
  if (!button) return;

  const serviceId = button.dataset.serviceCta;
  window.location.href = `templates/${serviceId}.html`;
};

const handleSpecialistCTA = (event) => {
  const button = event.target.closest("[data-specialist]");
  if (!button) return;

  const doctorId = button.dataset.specialist;
  const specialtyId = CMO_DATA.serviceMap?.[doctorId];
  const target = specialtyId ? `templates/${specialtyId}.html` : "templates/agendar.html";
  window.location.href = target;
};

servicesGrid?.addEventListener("click", handleServiceCTA);
specialistsGrid?.addEventListener("click", handleSpecialistCTA);

globalThis.addEventListener("click", (event) => {
  const control = event.target.closest(".carousel__control");
  if (!control) return;
  const direction = control.dataset.dir;
  const max = CMO_DATA.testimonials.length;
  if (direction === "next") {
    state.testimonialIndex = (state.testimonialIndex + 1) % max;
  } else {
    state.testimonialIndex = (state.testimonialIndex - 1 + max) % max;
  }
  renderTestimonials();
});

bannerClose?.addEventListener("click", () => {
  banner?.setAttribute("hidden", "");
});

const initBanner = () => {
  if (CMO_DATA.banner?.active && banner && bannerText) {
    bannerText.textContent = CMO_DATA.banner.text;
    banner.removeAttribute("hidden");
  }
};

const setYear = () => {
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
};

const initHome = () => {
  renderServices();
  renderSpecialists();
  renderLabTests();
  renderNews();
  renderTestimonials();
};

const initCommon = () => {
  initSmoothScroll();
  closeAllPanels();
  initBanner();
  setYear();
};

document.addEventListener("DOMContentLoaded", () => {
  initCommon();
  if (pageType === "home") {
    initHome();
  }
});
