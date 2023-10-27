import config from "../site.config.js";

function fillProjects() {
  const projectsDiv = document.querySelector(".projects");
  if (!projectsDiv) return;
  const isFeatured = projectsDiv.getAttribute("data-featured") == "";
  let index = 0;
  config.projects.forEach((project, i, arr) => {
    if (!project.featured && isFeatured) return;
    const div = document.createElement("div");
    div.classList.add("project");
    if (index % 2 == 1) div.classList.add("reversed");
    div.setAttribute("data-id", project.id);

    div.innerHTML = /*html*/`
      <div class="info">
        ${isFeatured ? /*html*/`<p class="featured">Featured project</p>` : ""}
        <h1>${project.title}</h1>
        <div class="description">${project.description}</div>
        <div class="technologies">${getProjectTechnologies(project)}</div>
        <div class="buttons">${getProjectButtons(project)}</div>
      </div>
      <a href="${project.live ?? project.package ?? project.code ?? ""}" class="image" target="_blank">
        <img src="${project.image}" alt="Codefoxdev.com" draggable="false">
        ${getImageIcon(project)}
      </a>
    `;
    projectsDiv.append(div);
    index++;
  });

  if (isFeatured) {
    const button = document.createElement("a");
    button.className = "button";
    button.href = "/projects";
    button.innerHTML = "View more";
    projectsDiv.append(button);
  }
}

function getProjectTechnologies(project) {
  let res = "";
  project.technologies.forEach(e => res += /*html*/`<span>${e}</span>`);
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