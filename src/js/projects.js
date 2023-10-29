import config from "../site.config.js";

function fillProjects() {
  const projectsDiv = document.querySelector("[data-projects-fill]");
  if (!projectsDiv) return;
  const isSmall = projectsDiv.getAttribute("data-projects-small") != null ? true : false;
  let largest = 0;
  let done = false;
  config.projects.forEach((e, i) => {
    if (done) return;
    const a = document.createElement("a");
    a.className = "project-small flex-list";
    a.href = `/projects?id=${e.id}`;
    a.innerHTML = /*html*/`
      <div class="image">
        <img src="${e.image}" alt="" />
        <div class="overlay absolute top left"></div>
      </div>
      <div class="info flex-list">
        <div class="description flex-list">
          <h1>${e.title}</h1>
          <p>${e.description}</p>
        </div>
        <div class="inline flex-row">
          <div class="technologies flex-row">
            ${getProjectTechnologies(e)}
          </div>
          <div class="button">
            <span class="material-symbols-rounded no-select">
              chevron_right
            </span>
          </div>
        </div>
      </div>
    `;
    projectsDiv.appendChild(a);
    const d = a.getBoundingClientRect().height;
    if (d > largest) largest = d;
    if (i == (projectsDiv.getAttribute("data-projects-limit") ?? config.projects.length) - 1) done = true;
  });
}

function getProjectTechnologies(project) {
  let res = "";
  project.technologies.forEach(e => res += /*html*/`<code>${e}</code>`);
  return res;
}

function getProjectButtons(project) {
  let res = "";
  if (project.live) res += /*html*/`<a href="${project.live}" class="button" target="_blank">View live</a>`;
  if (project.code) res += /*html*/`<a href="${project.code}" class="button" target="_blank">View code</a>`;
  if (project.package) res += /*html*/`<a href="${project.package}" class="button" target="_blank">View package</a>`;
  return res;
}

function getImageIcon(project) {
  if (project.live) return /*html*/`<span class="material-symbols-rounded">open_in_new</span>`;
  if (project.package) return /*html*/`<span class="material-symbols-rounded">deployed_code</span>`;
  if (project.code) return /*html*/`<span class="material-symbols-rounded">code</span>`;
  return "";
}

fillProjects();

export default config.projects;