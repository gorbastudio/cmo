import CMO_DATA from "../data.js";

const filtersWrapper = document.querySelector("#specialists-filters");
const specialistsGrid = document.querySelector("#specialists-grid");
const availabilityGrid = document.querySelector("#availability-grid");
const availabilitySection = document.querySelector("#specialists-availability");
const statsWrapper = document.querySelector("#specialists-stats");

const buildStat = (label, value) => {
  const node = document.createElement("div");
  node.className = "page-hero__stat";
  node.innerHTML = `<strong>${value}</strong><span>${label}</span>`;
  return node;
};

const buildFilterButton = (filter, label, isActive = false) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "filter-chip";
  button.dataset.filter = filter;
  button.textContent = label;
  if (isActive) button.classList.add("is-active");
  return button;
};

const renderStats = () => {
  if (!statsWrapper) return;
  const stats = [
    { label: "Especialistas", value: CMO_DATA.specialists.length },
    {
      label: "Especialidades",
      value: new Set(CMO_DATA.specialists.map((spec) => spec.specialty)).size,
    },
    { label: "Citas al mes", value: "500+" },
  ];
  const fragment = document.createDocumentFragment();
  stats.forEach((stat) => fragment.appendChild(buildStat(stat.label, stat.value)));
  statsWrapper.appendChild(fragment);
};

const renderFilters = () => {
  if (!filtersWrapper) return;
  const specialties = Array.from(
    new Set(CMO_DATA.specialists.map((spec) => spec.specialty))
  ).sort();
  const fragment = document.createDocumentFragment();
  fragment.appendChild(buildFilterButton("all", "Todos", true));
  specialties.forEach((specialty) => {
    fragment.appendChild(buildFilterButton(specialty, specialty));
  });
  filtersWrapper.appendChild(fragment);
};

const buildSpecialistCard = (specialist) => {
  const { serviceMap } = CMO_DATA;
  const serviceId = serviceMap?.[specialist.id];
  const href = serviceId ? `${serviceId}.html` : "especialidades.html";
  const card = document.createElement("article");
  card.className = "specialist-card specialist-card--details";
  card.innerHTML = `
    <img src="${specialist.photo}" alt="${specialist.name}" />
    <div>
      <h3>${specialist.name}</h3>
      <p class="specialist-card__specialty">${specialist.specialty}</p>
      <p class="specialist-card__meta">${specialist.schedule}<br />${specialist.format}</p>
      ${specialist.bio ? `<p class="specialist-card__bio">${specialist.bio}</p>` : ""}
      ${Array.isArray(specialist.focuses) && specialist.focuses.length
        ? `<ul class="specialist-card__focuses">${specialist.focuses
            .map((item) => `<li>${item}</li>`)
            .join("")}</ul>`
        : ""}
      <dl class="specialist-card__contact">
        <div>
          <dt>WhatsApp</dt>
          <dd><a href="https://wa.me/506${(specialist.contact?.whatsapp || "").replace(/[^\d]/g, "")}">${specialist.contact?.whatsapp || "8838-2301"}</a></dd>
        </div>
        <div>
          <dt>Teléfono</dt>
          <dd><a href="tel:${specialist.contact?.phone || "24635005"}">${specialist.contact?.phone || "2463-5005"}</a></dd>
        </div>
        ${specialist.contact?.email ? `<div><dt>Correo</dt><dd><a href="mailto:${specialist.contact.email}">${specialist.contact.email}</a></dd></div>` : ""}
      </dl>
      ${Array.isArray(specialist.languages) && specialist.languages.length
        ? `<p class="specialist-card__languages">Idiomas: ${specialist.languages.join(", ")}</p>`
        : ""}
      <div class="specialist-card__actions">
        <a class="btn btn--ghost" href="agendar.html" data-specialist="${specialist.id}">Reservar cita</a>
        <a class="btn btn--text" href="${href}">Ver especialidad</a>
      </div>
    </div>
  `;
  return card;
};

const renderSpecialists = (filter = "all") => {
  if (!specialistsGrid) return;
  specialistsGrid.innerHTML = "";
  const fragment = document.createDocumentFragment();
  CMO_DATA.specialists
    .filter((specialist) => filter === "all" || specialist.specialty === filter)
    .forEach((specialist) => fragment.appendChild(buildSpecialistCard(specialist)));
  specialistsGrid.appendChild(fragment);
};

const renderAvailability = () => {
  if (!availabilityGrid || !availabilitySection) return;
  const blocks = CMO_DATA.specialistAvailability || [];
  if (!blocks.length) return;
  availabilitySection.hidden = false;
  const fragment = document.createDocumentFragment();
  blocks.forEach((block) => {
    const spec = CMO_DATA.specialists.find((item) => item.id === block.specialistId);
    if (!spec) return;
    const card = document.createElement("article");
    card.className = "availability-card";
    card.innerHTML = `
      <h3>${spec.name}</h3>
      <p>${block.specialty}</p>
      <p><strong>${block.day}</strong> · ${block.start} – ${block.end}</p>
      <a class="btn btn--ghost" href="agendar.html?specialist=${spec.id}">Agendar cupo</a>
    `;
    fragment.appendChild(card);
  });
  availabilityGrid.appendChild(fragment);
};

const handleFilterClick = (event) => {
  const button = event.target.closest(".filter-chip");
  if (!button) return;
  const { filter } = button.dataset;
  filtersWrapper?.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.classList.toggle("is-active", chip === button);
  });
  renderSpecialists(filter);
};

const init = () => {
  renderStats();
  renderFilters();
  renderSpecialists();
  renderAvailability();
  filtersWrapper?.addEventListener("click", handleFilterClick);
};

init();
