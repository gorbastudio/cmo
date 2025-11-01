import CMO_DATA from "../data.js";

const serviceId = document.body?.dataset.service;
const serviceInfo = serviceId ? CMO_DATA.serviceDetails?.[serviceId] : null;
const serviceMeta = serviceId ? CMO_DATA.services.find((item) => item.id === serviceId) : null;

const ensureData = () => {
  if (!serviceInfo || !serviceMeta) {
    console.warn("Service data not found for", serviceId);
    const fallback = document.querySelector("[data-field='summary']");
    if (fallback) {
      fallback.textContent = "La información de esta especialidad estará disponible próximamente.";
    }
    return false;
  }
  return true;
};

const createStatCard = (stat) => {
  const div = document.createElement("div");
  div.className = "page-hero__stat";
  div.innerHTML = `<strong>${stat.value}</strong><span>${stat.label}</span>`;
  return div;
};

const createHighlightCard = (highlight) => {
  const article = document.createElement("article");
  article.className = "highlight-card";
  article.innerHTML = `<h3>${highlight.title}</h3><p>${highlight.description}</p>`;
  return article;
};

const createListItem = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  return li;
};

const createFaqItem = (faq) => {
  const details = document.createElement("details");
  details.className = "faq-item";
  details.innerHTML = `<summary>${faq.question}</summary><p>${faq.answer}</p>`;
  return details;
};

const renderHero = () => {
  document.querySelector("[data-field='eyebrow']")!.textContent = serviceInfo.eyebrow || "Especialidad médica";
  document.querySelector("[data-field='title']")!.textContent = serviceInfo.title;
  document.querySelector("[data-field='summary']")!.textContent = serviceInfo.summary;
  const statsContainer = document.querySelector("[data-field='stats']");
  if (statsContainer && Array.isArray(serviceInfo.stats)) {
    const fragment = document.createDocumentFragment();
    serviceInfo.stats.forEach((stat) => fragment.appendChild(createStatCard(stat)));
    statsContainer.appendChild(fragment);
  }
};

const renderHighlights = () => {
  const container = document.querySelector("[data-field='highlights']");
  if (!container || !Array.isArray(serviceInfo.highlights)) return;
  const fragment = document.createDocumentFragment();
  serviceInfo.highlights.forEach((highlight) => fragment.appendChild(createHighlightCard(highlight)));
  container.appendChild(fragment);
};

const renderProcedures = () => {
  const list = document.querySelector("[data-field='procedures']");
  if (!list || !Array.isArray(serviceInfo.procedures)) return;
  const fragment = document.createDocumentFragment();
  serviceInfo.procedures.forEach((item) => fragment.appendChild(createListItem(item)));
  list.appendChild(fragment);
};

const renderPreparation = () => {
  const list = document.querySelector("[data-field='preparation']");
  if (!list || !Array.isArray(serviceInfo.preparation)) {
    const section = document.querySelector("[data-section='preparation']");
    if (section) section.remove();
    return;
  }
  const fragment = document.createDocumentFragment();
  serviceInfo.preparation.forEach((item) => fragment.appendChild(createListItem(item)));
  list.appendChild(fragment);
};

const renderSpecialists = () => {
  const container = document.querySelector("[data-field='specialists']");
  if (!container) return;
  const specialists = serviceInfo.specialists?.map((id) => CMO_DATA.specialists.find((spec) => spec.id === id)).filter(Boolean) || [];
  if (!specialists.length) {
    container.closest("section")?.remove();
    return;
  }
  const fragment = document.createDocumentFragment();
  specialists.forEach((spec) => {
    const article = document.createElement("article");
    article.className = "specialist-card specialist-card--compact";
    article.innerHTML = `
      <h3>${spec.name}</h3>
      <p>${spec.specialty}</p>
      <p>${spec.schedule}</p>
      <p>${spec.format}</p>
      <a class="btn btn--ghost" href="../index.html#agendar">Agendar cita</a>
    `;
    fragment.appendChild(article);
  });
  container.appendChild(fragment);
};

const renderFaqs = () => {
  const container = document.querySelector("[data-field='faqs']");
  if (!container || !Array.isArray(serviceInfo.faqs) || !serviceInfo.faqs.length) {
    container?.closest("section")?.remove();
    return;
  }
  const fragment = document.createDocumentFragment();
  serviceInfo.faqs.forEach((faq) => fragment.appendChild(createFaqItem(faq)));
  container.appendChild(fragment);
};

const setBreadcrumb = () => {
  const breadcrumbCurrent = document.querySelector("[data-field='breadcrumb']");
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = serviceInfo.title;
};

const init = () => {
  if (!ensureData()) return;
  setBreadcrumb();
  renderHero();
  renderHighlights();
  renderProcedures();
  renderPreparation();
  renderSpecialists();
  renderFaqs();
};

init();
