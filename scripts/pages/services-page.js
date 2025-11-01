import CMO_DATA from "../data.js";

const servicesGrid = document.querySelector("#services-grid");
const servicesFeatured = document.querySelector("#services-featured");
const servicesHighlightsSection = document.querySelector("#service-highlights");
const statsWrapper = document.querySelector("#services-stats");

const SERVICE_ROUTES = {
  "medicina-general": "medicina-general.html",
  ginecologia: "ginecologia.html",
  urologia: "urologia.html",
  dermatologia: "dermatologia.html",
  radiologia: "radiologia.html",
  "terapia-lenguaje": "terapia-lenguaje.html",
  laboratorio: "laboratorio-especialidad.html",
};

const getServiceRoute = (serviceId) => SERVICE_ROUTES[serviceId] || "especialidades.html";

const buildStat = (label, value) => {
  const node = document.createElement("div");
  node.className = "page-hero__stat";
  node.innerHTML = `<strong>${value}</strong><span>${label}</span>`;
  return node;
};

const initStats = () => {
  if (!statsWrapper) return;
  const stats = [
    { label: "Especialidades", value: CMO_DATA.services.length },
    { label: "Profesionales", value: CMO_DATA.specialists.length },
    { label: "Modalidades", value: "Presencial · Virtual" },
  ];
  const frag = document.createDocumentFragment();
  stats.forEach((stat) => frag.appendChild(buildStat(stat.label, stat.value)));
  statsWrapper.appendChild(frag);
};

const renderServices = () => {
  if (!servicesGrid) return;
  const fragment = document.createDocumentFragment();
  CMO_DATA.services.forEach((service) => {
    const article = document.createElement("article");
    article.className = "service-card service-card--extended";
    article.innerHTML = `
      <div class="service-card__icon" aria-hidden="true">${service.icon}</div>
      <div>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
        <a class="btn btn--ghost" href="${getServiceRoute(service.id)}">Ver detalles</a>
      </div>
    `;
    fragment.appendChild(article);
  });
  servicesGrid.appendChild(fragment);
};

const renderFeatured = () => {
  if (!servicesFeatured || !servicesHighlightsSection) return;
  const featured = ["medicina-general", "ginecologia", "laboratorio"]
    .map((id) => ({ id, data: CMO_DATA.serviceDetails[id] }))
    .filter((item) => Boolean(item.data));
  if (!featured.length) return;
  servicesHighlightsSection.hidden = false;
  const fragment = document.createDocumentFragment();
  featured.forEach(({ id, data }) => {
    const card = document.createElement("article");
    card.className = "highlight-card";
    card.innerHTML = `
      <h3>${data.title}</h3>
      <p>${data.summary}</p>
      <ul class="bullet-list">
        ${(data.highlights || [])
          .slice(0, 3)
          .map((highlight) => `<li>${highlight.title}</li>`) 
          .join("")}
      </ul>
      <a class="btn btn--ghost" href="${getServiceRoute(id)}">Ver especialidad</a>
    `;
    fragment.appendChild(card);
  });
  servicesFeatured.appendChild(fragment);
};

const init = () => {
  initStats();
  renderServices();
  renderFeatured();
};

init();
