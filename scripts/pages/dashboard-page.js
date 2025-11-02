import CMO_DATA from "../data.js";

const dashboardData = CMO_DATA.dashboard;

const kpisContainer = document.querySelector("#dashboard-kpis");
const alertsContainer = document.querySelector("#dashboard-alerts");
const upcomingContainer = document.querySelector("#dashboard-upcoming");
const teamContainer = document.querySelector("#dashboard-team");

const createKpiCard = (kpi) => {
  const article = document.createElement("article");
  article.className = "dashboard-kpi";
  article.innerHTML = `
    <span class="dashboard-kpi__label">${kpi.label}</span>
    <strong class="dashboard-kpi__value">${kpi.value}</strong>
    <span class="dashboard-kpi__trend">${kpi.trend}</span>
  `;
  return article;
};

const renderKpis = () => {
  if (!kpisContainer || !dashboardData?.kpis) return;
  const fragment = document.createDocumentFragment();
  dashboardData.kpis.forEach((kpi) => fragment.appendChild(createKpiCard(kpi)));
  kpisContainer.appendChild(fragment);
};

const createAlertCard = (alert) => {
  const article = document.createElement("article");
  article.className = `dashboard-alert dashboard-alert--${alert.type ?? "info"}`;
  article.setAttribute("role", alert.type === "warning" ? "alert" : "status");
  article.textContent = alert.message;
  return article;
};

const renderAlerts = () => {
  if (!alertsContainer || !dashboardData?.alerts) return;
  if (!dashboardData.alerts.length) {
    const p = document.createElement("p");
    p.className = "dashboard-empty";
    p.textContent = "No hay alertas activas por el momento.";
    alertsContainer.appendChild(p);
    return;
  }
  const fragment = document.createDocumentFragment();
  dashboardData.alerts.forEach((alert) => fragment.appendChild(createAlertCard(alert)));
  alertsContainer.appendChild(fragment);
};

const createUpcomingRow = (appointment) => {
  const row = document.createElement("div");
  row.className = "dashboard-upcoming__row";
  row.setAttribute("role", "row");
  row.innerHTML = `
    <span role="cell">${appointment.patient}</span>
    <span role="cell">${appointment.time}</span>
    <span role="cell">${appointment.specialty}</span>
    <span role="cell">${getSpecialistName(appointment.professionalId)}</span>
    <span role="cell">${appointment.channel}</span>
    <span role="cell" class="badge badge--${appointment.status.replace(/\s+/g, "-").toLowerCase()}">${appointment.status}</span>
  `;
  return row;
};

const renderUpcoming = () => {
  if (!upcomingContainer || !dashboardData?.upcoming) return;
  if (!dashboardData.upcoming.length) {
    upcomingContainer.innerHTML = `<div class="dashboard-empty" role="row">Sin citas registradas.</div>`;
    return;
  }
  const fragment = document.createDocumentFragment();
  dashboardData.upcoming.forEach((appointment) => fragment.appendChild(createUpcomingRow(appointment)));
  upcomingContainer.appendChild(fragment);
};

const getSpecialistName = (id) => {
  return CMO_DATA.specialists.find((spec) => spec.id === id)?.name ?? "Por asignar";
};

const renderTeamNotes = () => {
  if (!teamContainer || !dashboardData?.teamNotes) return;
  if (!dashboardData.teamNotes.length) {
    teamContainer.innerHTML = `<p class="dashboard-empty">Sin notas para el equipo.</p>`;
    return;
  }
  const fragment = document.createDocumentFragment();
  dashboardData.teamNotes.forEach((note) => {
    const specName = getSpecialistName(note.specialistId);
    const article = document.createElement("article");
    article.className = "dashboard-team__card";
    article.innerHTML = `
      <h3>${specName}</h3>
      <p class="dashboard-team__status">Disponibilidad: <strong>${note.today}</strong></p>
      <p class="dashboard-team__note">${note.note}</p>
    `;
    fragment.appendChild(article);
  });
  teamContainer.appendChild(fragment);
};

const init = () => {
  renderKpis();
  renderAlerts();
  renderUpcoming();
  renderTeamNotes();
};

init();
