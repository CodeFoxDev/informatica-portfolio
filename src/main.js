import "./js/projects.js";
import "./js/skills.js";

const scrollShow = Array.from(document.querySelectorAll("[data-scroll-class]"));
scrollShow?.forEach((e, i) => {
  const attr = e.getAttribute("data-scroll-threshold");
  const threshold = parseCssVal(attr);
  if (typeof threshold != "number" || !attr) return;
  addEventListener("scroll", () => {
    const className = e.getAttribute("data-scroll-class");
    if (window.scrollY < threshold) return e.classList.remove(className);
    e.classList.add(className);
  });
});

function parseCssVal(inp, toPX) {
  const ex = /([0-9\.]*)([a-z]*)/gi.exec(inp);
  const val = parseFloat(ex[1]);
  const unit = ex[2];
  if (!unit) return [ex[1], ex[2]];
  if (unit == "vh") {
    return (val / 100) * window.innerHeight;
  } else if (unit == "vw") {
    return (val / 100) * window.innerWidth;
  } else if (unit == "rem") {
    return val * 16;
  }
  return val;
}