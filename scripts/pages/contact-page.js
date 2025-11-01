import CMO_DATA from "../data.js";

const statsWrapper = document.querySelector("#contact-stats");
const infoWrapper = document.querySelector("#contact-info");
const mapFrame = document.querySelector("#contact-map");
const form = document.querySelector("#contact-form");

const buildStat = (label, value) => {
  const div = document.createElement("div");
  div.className = "page-hero__stat";
  div.innerHTML = `<strong>${value}</strong><span>${label}</span>`;
  return div;
};

const renderStats = () => {
  if (!statsWrapper) return;
  const stats = [
    { label: "Líneas activas", value: CMO_DATA.contact.phones.length },
    { label: "WhatsApp", value: CMO_DATA.contact.whatsapp },
    { label: "Emergencias", value: CMO_DATA.contact.emergencies },
  ];
  const frag = document.createDocumentFragment();
  stats.forEach((stat) => frag.appendChild(buildStat(stat.label, stat.value)));
  statsWrapper.appendChild(frag);
};

const buildContactList = () => {
  const list = document.createElement("dl");
  list.className = "contact-details";

  const appendItem = (term, description) => {
    const dt = document.createElement("dt");
    dt.textContent = term;
    const dd = document.createElement("dd");
    dd.innerHTML = description;
    list.appendChild(dt);
    list.appendChild(dd);
  };

  appendItem("Dirección", CMO_DATA.contact.address);
  appendItem(
    "Teléfonos",
    CMO_DATA.contact.phones
      .map((phone) => `<a href="tel:+506${phone.replace(/[^0-9]/g, "")}">${phone}</a>`)
      .join(" · ")
  );
  appendItem(
    "WhatsApp",
    `<a href="https://wa.me/506${CMO_DATA.contact.whatsapp.replace(/[^0-9]/g, "")}" target="_blank" rel="noopener">${CMO_DATA.contact.whatsapp}</a>`
  );
  appendItem(
    "Correo",
    `<a href="mailto:${CMO_DATA.contact.email}">${CMO_DATA.contact.email}</a>`
  );
  appendItem("Horario médico", CMO_DATA.contact.hours.medical);
  appendItem("Horario laboratorio", CMO_DATA.contact.hours.lab);

  return list;
};

const renderInfo = () => {
  if (!infoWrapper) return;
  infoWrapper.appendChild(buildContactList());
};

const setMap = () => {
  if (!mapFrame) return;
  mapFrame.src = CMO_DATA.contact.mapEmbed;
};

const handleSubmit = (event) => {
  event.preventDefault();
  const success = form?.querySelector(".form-success");
  if (!success) return;
  success.hidden = false;
  form?.reset();
};

const initForm = () => {
  if (!form) return;
  form.addEventListener("submit", handleSubmit);
};

const init = () => {
  renderStats();
  renderInfo();
  setMap();
  initForm();
};

init();
