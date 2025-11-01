import CMO_DATA from "./data.js";

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");
const appointmentForm = document.querySelector("#appointment-form");
const servicesGrid = document.querySelector("#services-grid");
const specialistsGrid = document.querySelector("#specialists-grid");
const labList = document.querySelector("#lab-tests");
const newsGrid = document.querySelector("#news-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
const testimonialsViewport = document.querySelector("#testimonials-viewport");
const modal = document.querySelector("#modal-confirm");
const modalCloseButtons = modal?.querySelectorAll("[data-close-modal], .modal__close");
const banner = document.querySelector("#banner-emergente");
const bannerText = banner?.querySelector(".banner__text");
const bannerClose = banner?.querySelector(".banner__close");
const yearSpan = document.querySelector("#year");
const pageType = document.body?.dataset.page || "home";

const state = {
  filter: "all",
  testimonialIndex: 0,
};

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
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  siteNav?.setAttribute("data-open", String(!expanded));
  document.body.classList.toggle("nav-open", !expanded);
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle?.setAttribute("aria-expanded", "false");
    siteNav?.setAttribute("data-open", "false");
    document.body.classList.remove("nav-open");
  });
});

const renderServices = () => {
  if (!servicesGrid) return;
  servicesGrid.innerHTML = CMO_DATA.services
    .map(
      (service) => `
        <article class="service-card" data-service="${service.id}">
          <div class="service-card__icon" aria-hidden="true">${service.icon}</div>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
          <button class="btn btn--ghost" data-service-cta="${service.id}">Agendar</button>
        </article>
      `
    )
    .join("");
};

const renderSpecialists = () => {
  if (!specialistsGrid) return;
  specialistsGrid.innerHTML = CMO_DATA.specialists
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
  newsGrid.innerHTML = CMO_DATA.news
    .filter((item) => state.filter === "all" || item.category === state.filter)
    .map(
      (item) => `
        <article class="news-card" data-category="${item.category}">
          <div class="news-card__meta">
            <span class="news-card__tag">${item.category}</span>
            <time datetime="${item.date}">${formatDate(item.date)}</time>
          </div>
          <h3>${item.title}</h3>
          <p>${item.excerpt}</p>
          <a href="${item.link}" class="btn btn--ghost">Leer más</a>
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

const populateSelects = () => {
  const specialtySelect = document.querySelector("#appointment-specialty");
  const doctorSelect = document.querySelector("#appointment-doctor");

  if (specialtySelect) {
    specialtySelect.innerHTML += CMO_DATA.services
      .map((service) => `<option value="${service.id}">${service.title}</option>`)
      .join("");
  }

  if (doctorSelect) {
    doctorSelect.innerHTML += CMO_DATA.specialists
      .map((specialist) => `<option value="${specialist.id}">${specialist.name}</option>`)
      .join("");
  }
};

const handleServiceCTA = (event) => {
  const button = event.target.closest("[data-service-cta]");
  if (!button) return;

  const serviceId = button.dataset.serviceCta;
  const specialtySelect = document.querySelector("#appointment-specialty");
  if (specialtySelect) {
    specialtySelect.value = serviceId;
    specialtySelect.dispatchEvent(new Event("change"));
  }
  document.getElementById("agendar")?.scrollIntoView({ behavior: "smooth" });
};

const handleSpecialistCTA = (event) => {
  const button = event.target.closest("[data-specialist]");
  if (!button) return;

  const doctorId = button.dataset.specialist;
  const doctorSelect = document.querySelector("#appointment-doctor");
  if (doctorSelect) {
    doctorSelect.value = doctorId;
    doctorSelect.dispatchEvent(new Event("change"));
  }
  document.getElementById("agendar")?.scrollIntoView({ behavior: "smooth" });
};

servicesGrid?.addEventListener("click", handleServiceCTA);
specialistsGrid?.addEventListener("click", handleSpecialistCTA);

globalThis.addEventListener("click", (event) => {
  const button = event.target.closest(".filter-btn");
  if (!button) return;
  state.filter = button.dataset.filter;
  filterButtons.forEach((btn) => btn.classList.toggle("is-active", btn === button));
  renderNews();
});

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

appointmentForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!appointmentForm.checkValidity()) {
    appointmentForm.reportValidity();
    return;
  }
  modal?.removeAttribute("hidden");
});

modalCloseButtons?.forEach((button) =>
  button.addEventListener("click", () => {
    modal?.setAttribute("hidden", "");
  })
);

modal?.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal?.setAttribute("hidden", "");
  }
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
  populateSelects();
  renderNews();
  renderTestimonials();
};

const initCommon = () => {
  initSmoothScroll();
  initBanner();
  setYear();
};

document.addEventListener("DOMContentLoaded", () => {
  initCommon();
  if (pageType === "home") {
    initHome();
  }
});
