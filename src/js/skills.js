import config from "../site.config.js";

function fillSkills() {
  const skills = document.querySelector("[data-skills-fill]");
  if (!skills) return;

  config.skills.forEach((e, i) => {
    const div = document.createElement("div");
    div.className = "skill-icon";
    div.id = `skill-${e.id.toLowerCase()}`;

    div.innerHTML = /*html*/`
      <img src="${e.icon}" alt="" draggable="false">
      <p>${e.name ?? e.id}</p>
    `;
    skills.appendChild(div);
  });
}

fillSkills();