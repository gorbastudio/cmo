import CMO_DATA from "../data.js";

const statsWrapper = document.querySelector("#contact-stats");
const infoWrapper = document.querySelector("#contact-info");
const mapFrame = document.querySelector("#contact-map");
const form = document.querySelector("#contact-form");
const socialMetricsWrapper = document.querySelector("#contact-social-metrics");
const socialLinksWrapper = document.querySelector("#contact-social-links");

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
  if (CMO_DATA.contact.coordinates) {
    appendItem("Coordenadas GPS", CMO_DATA.contact.coordinates);
  }
  appendItem("Horario médico", CMO_DATA.contact.hours.medical);
  appendItem("Horario laboratorio", CMO_DATA.contact.hours.lab);
  if (CMO_DATA.contact.social) {
    const socialLinks = [
      { label: "Instagram", url: CMO_DATA.contact.social.instagram },
      { label: "Facebook", url: CMO_DATA.contact.social.facebook },
      { label: "Emma Pay", url: CMO_DATA.contact.social.emmaPay },
      { label: "Psychology Today", url: CMO_DATA.contact.social.psychologyToday },
      { label: "DirectMap", url: CMO_DATA.contact.social.directMap },
    ]
      .filter((item) => Boolean(item.url))
      .map(
        (item) =>
          `<a href="${item.url}" target="_blank" rel="noopener">${item.label}</a>`
      )
      .join(" · ");
    if (socialLinks) {
      appendItem("Presencia digital", socialLinks);
    }
  }

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

const formatNumber = (value) => {
  if (typeof value !== "number") return null;
  return new Intl.NumberFormat("es-CR").format(value);
};

const renderSocial = () => {
  const social = CMO_DATA.contact.social;
  if (!social) return;

  if (socialMetricsWrapper) {
    const metrics = [];
    const instagram = formatNumber(social.instagramFollowers);
    if (instagram) {
      metrics.push({
        label: "Seguidores en Instagram",
        value: instagram,
        url: social.instagram,
      });
    }
    const facebook = formatNumber(social.facebookLikes);
    if (facebook) {
      metrics.push({
        label: "Me gusta en Facebook",
        value: facebook,
        url: social.facebook,
      });
    }
    const talking = formatNumber(social.facebookTalkingAbout);
    if (talking) {
      metrics.push({
        label: "Personas hablando",
        value: talking,
        url: social.facebook,
      });
    }
    const checkins = formatNumber(social.facebookCheckins);
    if (checkins) {
      metrics.push({
        label: "Visitas registradas",
        value: checkins,
        url: social.facebook,
      });
    }

    if (metrics.length) {
      const fragment = document.createDocumentFragment();
      metrics.forEach((metric) => {
        const article = document.createElement("article");
        article.className = "contact-social__card";
        article.innerHTML = `
          <strong>${metric.value}</strong>
          <span>${metric.label}</span>
          ${metric.url ? `<a href="${metric.url}" target="_blank" rel="noopener">Ver canal</a>` : ""}
        `;
        fragment.appendChild(article);
      });
      socialMetricsWrapper.appendChild(fragment);
    }
  }

  if (socialLinksWrapper) {
    const resources = [
      { label: "Perfil en Instagram", url: social.instagram },
      { label: "Página de Facebook", url: social.facebook },
      { label: "Emma Pay", url: social.emmaPay },
      { label: "Psychology Today", url: social.psychologyToday },
      { label: "Directorio DirectMap", url: social.directMap },
    ].filter((item) => Boolean(item.url));

    if (resources.length) {
      const list = document.createElement("ul");
      list.className = "contact-social__links-list";
      resources.forEach((resource) => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${resource.url}" target="_blank" rel="noopener">${resource.label}</a>`;
        list.appendChild(li);
      });
      socialLinksWrapper.appendChild(list);
    }
  }
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
  renderSocial();
  initForm();
};

init();
