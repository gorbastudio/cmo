import CMO_DATA from "../data.js";

const LAB_SERVICE_ID = "laboratorio";
const service = CMO_DATA.serviceDetails?.[LAB_SERVICE_ID];

const statsWrapper = document.querySelector("#lab-stats");
const panelsWrapper = document.querySelector("#lab-panels");
const servicesWrapper = document.querySelector("#lab-services-grid");
const servicesSection = document.querySelector("#lab-services");
const faqsWrapper = document.querySelector("#lab-faqs-grid");
const faqsSection = document.querySelector("#lab-faqs");

const createStat = (stat) => {
  const div = document.createElement("div");
  div.className = "page-hero__stat";
  div.innerHTML = `<strong>${stat.value}</strong><span>${stat.label}</span>`;
  return div;
};

const createPanelCard = (panel) => {
  const article = document.createElement("article");
  article.className = "highlight-card";
  const tests = (panel.tests || [])
    .map((test) => `<li>${test}</li>`)
    .join("");
  article.innerHTML = `
    <h3>${panel.title}</h3>
    <p>${panel.description}</p>
    ${tests ? `<ul class="bullet-list">${tests}</ul>` : ""}
  `;
  return article;
};

const createServiceCard = (item) => {
  const article = document.createElement("article");
  article.className = "highlight-card";
  article.innerHTML = `
    <h3>${item.title}</h3>
    <p>${item.description}</p>
  `;
  return article;
};

const createFaqItem = (faq) => {
  const details = document.createElement("details");
  details.className = "faq-item";
  details.innerHTML = `<summary>${faq.question}</summary><p>${faq.answer}</p>`;
  return details;
};

const renderStats = () => {
  if (!statsWrapper || !service?.stats) return;
  const frag = document.createDocumentFragment();
  service.stats.forEach((stat) => frag.appendChild(createStat(stat)));
  statsWrapper.appendChild(frag);
};

const renderPanels = () => {
  if (!panelsWrapper) return;
  const panels = CMO_DATA.labPanels || [];
  if (!panels.length) return;
  const frag = document.createDocumentFragment();
  panels.forEach((panel) => frag.appendChild(createPanelCard(panel)));
  panelsWrapper.appendChild(frag);
};

const renderServices = () => {
  if (!servicesWrapper || !servicesSection) return;
  const items = CMO_DATA.laboratoryServices || [];
  if (!items.length) {
    servicesSection.hidden = true;
    return;
  }
  const frag = document.createDocumentFragment();
  items.forEach((item) => frag.appendChild(createServiceCard(item)));
  servicesWrapper.appendChild(frag);
};

const renderFaqs = () => {
  if (!faqsWrapper || !faqsSection) return;
  const faqs = service?.faqs || [];
  if (!faqs.length) {
    faqsSection.hidden = true;
    return;
  }
  const frag = document.createDocumentFragment();
  faqs.forEach((faq) => frag.appendChild(createFaqItem(faq)));
  faqsWrapper.appendChild(frag);
};

const init = () => {
  renderStats();
  renderPanels();
  renderServices();
  renderFaqs();
};

init();
