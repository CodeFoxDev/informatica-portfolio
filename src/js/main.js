import config from "./site.config.js";
import spa from "./spa.js";

const title = document.querySelector(".title-3d");

function setup3DTitle() {
  const eventListener = () => {
    const value = window.scrollY * -1;
    title.style.setProperty("--position", `${value}px`);
  }
  document.addEventListener("scroll", eventListener);
  eventListener();
}

setup3DTitle();

//spa.setup();
window.search = spa.search;