import CMO_DATA from "../data.js";

const statsWrapper = document.querySelector("#news-stats");
const filtersWrapper = document.querySelector("#news-filters");
const searchInput = document.querySelector("#news-search");
const newsGrid = document.querySelector("#news-grid");
const featuredSection = document.querySelector("#news-featured");
const featuredGrid = document.querySelector("#news-featured-grid");

const state = {
  filter: "all",
  query: "",
};

const buildStat = (label, value) => {
  const div = document.createElement("div");
  div.className = "page-hero__stat";
  div.innerHTML = `<strong>${value}</strong><span>${label}</span>`;
  return div;
};

const renderStats = () => {
  if (!statsWrapper) return;
  const total = CMO_DATA.news.length;
  const campaigns = CMO_DATA.news.filter((item) => item.category === "campañas").length;
  const updates = CMO_DATA.news.filter((item) => item.category !== "campañas").length;
  const stats = [
    { label: "Publicaciones", value: total },
    { label: "Campañas", value: campaigns },
    { label: "Otros avisos", value: updates },
  ];
  const frag = document.createDocumentFragment();
  stats.forEach((stat) => frag.appendChild(buildStat(stat.label, stat.value)));
  statsWrapper.appendChild(frag);
};

const buildFilterChip = (value, label, isActive = false) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "filter-chip";
  if (isActive) button.classList.add("is-active");
  button.dataset.filter = value;
  button.textContent = label;
  return button;
};

const renderFilters = () => {
  if (!filtersWrapper) return;
  const categories = Array.from(new Set(CMO_DATA.news.map((item) => item.category))).sort();
  const frag = document.createDocumentFragment();
  frag.appendChild(buildFilterChip("all", "Todas", true));
  categories.forEach((category) => {
    const label = category.charAt(0).toUpperCase() + category.slice(1);
    frag.appendChild(buildFilterChip(category, label));
  });
  filtersWrapper.appendChild(frag);
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return new Intl.DateTimeFormat("es-CR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
    .format(date)
    .replace(".", "");
};

const buildNewsCard = (item) => {
  const article = document.createElement("article");
  article.className = "news-card";
  article.dataset.category = item.category;
  article.innerHTML = `
    <div class="news-card__meta">
      <span class="news-card__tag">${item.category}</span>
      <time datetime="${item.date}">${formatDate(item.date)}</time>
    </div>
    <h3>${item.title}</h3>
    <p>${item.excerpt}</p>
    <a class="btn btn--ghost" href="${item.link || "#"}">Leer más</a>
  `;
  return article;
};

const matchesFilters = (item) => {
  const matchesCategory = state.filter === "all" || item.category === state.filter;
  const normalizedQuery = state.query.trim().toLowerCase();
  if (!normalizedQuery) return matchesCategory;
  const searchable = `${item.title} ${item.excerpt}`.toLowerCase();
  return matchesCategory && searchable.includes(normalizedQuery);
};

const renderNews = () => {
  if (!newsGrid) return;
  newsGrid.innerHTML = "";
  const frag = document.createDocumentFragment();
  CMO_DATA.news.filter(matchesFilters).forEach((item) => frag.appendChild(buildNewsCard(item)));
  if (!frag.childElementCount) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "No se encontraron publicaciones con los filtros seleccionados.";
    newsGrid.appendChild(empty);
    return;
  }
  newsGrid.appendChild(frag);
};

const renderFeatured = () => {
  if (!featuredSection || !featuredGrid) return;
  const featured = CMO_DATA.news.filter((item) => item.featured);
  if (!featured.length) {
    featuredSection.hidden = true;
    return;
  }
  const frag = document.createDocumentFragment();
  featured.forEach((item) => frag.appendChild(buildNewsCard(item)));
  featuredGrid.appendChild(frag);
  featuredSection.hidden = false;
};

const handleFilterClick = (event) => {
  const button = event.target.closest(".filter-chip");
  if (!button) return;
  state.filter = button.dataset.filter || "all";
  filtersWrapper?.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.classList.toggle("is-active", chip === button);
  });
  renderNews();
};

const initSearch = () => {
  if (!searchInput) return;
  searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderNews();
  });
};

const init = () => {
  renderStats();
  renderFilters();
  renderFeatured();
  renderNews();
  filtersWrapper?.addEventListener("click", handleFilterClick);
  initSearch();
};

init();
