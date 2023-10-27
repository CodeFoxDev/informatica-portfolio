import config from "../site.config.js";

(function () {
  const title = document.querySelector("#title-changing");

  let index = 0;

  setInterval(() => {
    if (index < config.home.titles.length - 1) index++;
    else index = 0;
    const content = config.home.titles[index];

    typeContent(title, content, 20);
  }, 5000);
})();

function typeContent(element, content, speed) {
  let innerHTMLLength = element.innerHTML.length;
  let totalLength = innerHTMLLength + content.length;
  let i = 0;
  let iv = setInterval(() => {
    if (i < innerHTMLLength) {
      // Remove char
      element.innerHTML = element.innerHTML.slice(0, -1);
    } else if (i < totalLength) {
      // Add char
      let contentIndex = i - innerHTMLLength;
      element.innerHTML += content.charAt(contentIndex);
    } else {
      clearInterval(iv);
    }
    i++;
  }, speed);
}