import CMO_DATA from "../data.js";

const specialtiesGrid = document.querySelector("#specialties-grid");

const buildSpecialtyCard = (service) => {
  const article = document.createElement("article");
  article.className = "specialty-card";
  article.innerHTML = `
    <div class="specialty-card__icon" aria-hidden="true">${service.icon}</div>
    <div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    </div>
    <div class="specialty-card__actions">
      <a class="btn btn--ghost" href="${service.id}.html">Ver detalles</a>
      <a class="btn btn--primary" href="../index.html#agendar">Agendar cita</a>
    </div>
  `;
  return article;
};

const renderSpecialties = () => {
  if (!specialtiesGrid) return;
  const fragment = document.createDocumentFragment();
  CMO_DATA.services.forEach((service) => {
    fragment.appendChild(buildSpecialtyCard(service));
  });
  specialtiesGrid.appendChild(fragment);
};

renderSpecialties();
