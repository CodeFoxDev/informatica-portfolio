import config from "./site.config.js";
import spa from "./spa.js";

const front = document.querySelector(".front");

function setupTitle() {
  const title = front.querySelector(".title-3d") ?? front.children[0];

  const eventListener = () => {
    const value = window.scrollY * -1;
    title.style.setProperty("--position", `${value}px`);
  }
  document.addEventListener("scroll", eventListener);
  eventListener();
}

function setupPointer() {
  const bgcicle = document.querySelector("#bg-circle");
  let currPos = [ 0, 0 ];
  let lastPos = [ 0, 0 ];

  const eventListener = (ev) => {
    currPos[0] = ev.pageX;
    currPos[1] = ev.pageY;
  }
  document.addEventListener("mousemove", eventListener);

  const movePointer = () => {
    const [ newX, newY ] = [ _getTween(lastPos[0], currPos[0], 2), _getTween(lastPos[1], currPos[1], 2) ]

    bgcicle.style.setProperty("--pos-x", `${newX}px`);
    bgcicle.style.setProperty("--pos-y", `${newY}px`);

    lastPos = [ newX, newY ];

    window.requestAnimationFrame(movePointer);
  }

  window.requestAnimationFrame(movePointer);
}

setupTitle();
setupPointer();

//spa.setup();
window.search = spa.search;

function _interpolate(x, y, oldX, oldY, value) {
  if (value < 0 || value > 1) return [ x, y ];
  const [ xDiff, yDiff ] = [ (x - oldX) * value, (y - oldY) * value ];
  return [ oldX + xDiff, oldY + yDiff ];
}

function _getTween(b, e, i) {
  return b + ((i/100) * (e-b));
}