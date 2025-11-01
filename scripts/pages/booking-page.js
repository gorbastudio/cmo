import CMO_DATA from "../data.js";

const statsWrapper = document.querySelector("#booking-stats");
const form = document.querySelector("#booking-form");
const formSuccess = document.querySelector("#booking-success");
const specialtySelect = document.querySelector("#booking-specialty");
const doctorSelect = document.querySelector("#booking-doctor");
const timeSelect = document.querySelector("#booking-time");
const channelsList = document.querySelector("#booking-channels");
const stepsWrapper = document.querySelector("#booking-steps");
const faqsWrapper = document.querySelector("#booking-faqs");

const stats = [
  { label: "Especialidades", value: CMO_DATA.services.length },
  { label: "Profesionales", value: CMO_DATA.specialists.length },
  { label: "Horarios", value: "24/7" },
];

const createStat = (item) => {
  const div = document.createElement("div");
  div.className = "page-hero__stat";
  div.innerHTML = `<strong>${item.value}</strong><span>${item.label}</span>`;
  return div;
};

const renderStats = () => {
  if (!statsWrapper) return;
  const fragment = document.createDocumentFragment();
  stats.forEach((stat) => fragment.appendChild(createStat(stat)));
  statsWrapper.appendChild(fragment);
};

const populateSpecialties = () => {
  if (!specialtySelect) return;
  CMO_DATA.services.forEach((service) => {
    const option = document.createElement("option");
    option.value = service.id;
    option.textContent = service.title;
    specialtySelect.appendChild(option);
  });
};

const getSpecialistsByService = (serviceId) => {
  if (!serviceId) return [];
  const detail = CMO_DATA.serviceDetails?.[serviceId];
  if (!detail?.specialists) return [];
  return detail.specialists
    .map((id) => CMO_DATA.specialists.find((spec) => spec.id === id))
    .filter(Boolean);
};

const populateDoctors = (serviceId) => {
  if (!doctorSelect) return;
  doctorSelect.innerHTML = '<option value="" disabled selected>Selecciona un profesional</option>';
  getSpecialistsByService(serviceId).forEach((doctor) => {
    const option = document.createElement("option");
    option.value = doctor.id;
    option.textContent = `${doctor.name} · ${doctor.specialty}`;
    doctorSelect.appendChild(option);
  });
};

const populateTimes = (serviceId) => {
  if (!timeSelect) return;
  timeSelect.innerHTML = '<option value="" disabled selected>Selecciona un rango horario</option>';
  const blocks = CMO_DATA.specialistAvailability || [];
  const filtered = serviceId
    ? blocks.filter((block) => {
        const specialists = getSpecialistsByService(serviceId).map((spec) => spec.id);
        return specialists.includes(block.specialistId);
      })
    : blocks;
  filtered.forEach((block) => {
    const option = document.createElement("option");
    option.value = `${block.day} ${block.start} ${block.end}`.trim();
    option.textContent = `${block.day} · ${block.start}${block.end ? ` – ${block.end}` : ""}`;
    timeSelect.appendChild(option);
  });
};

const renderChannels = () => {
  if (!channelsList) return;
  const fragment = document.createDocumentFragment();
  CMO_DATA.booking.channels.forEach((channel) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${channel.name}</strong><p>${channel.description}</p>`;
    fragment.appendChild(li);
  });
  channelsList.appendChild(fragment);
};

const renderSteps = () => {
  if (!stepsWrapper) return;
  const fragment = document.createDocumentFragment();
  CMO_DATA.booking.steps.forEach((step, index) => {
    const article = document.createElement("article");
    article.className = "step-card";
    article.innerHTML = `
      <span class="step-card__number">0${index + 1}</span>
      <h3>${step.title}</h3>
      <p>${step.description}</p>
    `;
    fragment.appendChild(article);
  });
  stepsWrapper.appendChild(fragment);
};

const renderFaqs = () => {
  if (!faqsWrapper) return;
  const fragment = document.createDocumentFragment();
  CMO_DATA.booking.faqs.forEach((faq) => {
    const details = document.createElement("details");
    details.className = "faq-item";
    details.innerHTML = `<summary>${faq.question}</summary><p>${faq.answer}</p>`;
    fragment.appendChild(details);
  });
  faqsWrapper.appendChild(fragment);
};

const handleSpecialtyChange = (event) => {
  const value = event.target.value;
  populateDoctors(value);
  populateTimes(value);
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  if (!formSuccess) return;
  formSuccess.hidden = false;
  formSuccess.scrollIntoView({ behavior: "smooth" });
  form?.reset();
};

const init = () => {
  renderStats();
  populateSpecialties();
  renderChannels();
  renderSteps();
  renderFaqs();
  populateTimes();
  form?.addEventListener("submit", handleFormSubmit);
  specialtySelect?.addEventListener("change", handleSpecialtyChange);
};

init();
