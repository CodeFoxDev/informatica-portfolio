const parser = new DOMParser();
const preFetched = [];
let currentPage = window.location.pathname;

const SPA = {
  setup: () => {
    // Current page
    preFetched.push({
      url: window.location.pathname,
      body: document.body.innerHTML
    });

    // Listen for silent anchor click
    document.addEventListener("click", async (ev) => {
      if (ev.target.getAttribute("data-silent") || !ev.target.href) return 0;
      ev.preventDefault();
      console.log("Navigating to:", ev.target.href);
      render(currentPage = ev.target.pathname);
    });

    // Listen for url change
    setInterval(() => {
      if (window.location.pathname == currentPage) return;
      render(currentPage = window.location.pathname);
    }, 1000/30);
  },
  prefetch: () => {
    const urls = Array.from(document.querySelectorAll("a[data-silent]"));
    urls.forEach(async (e, index) => {
      const url = e.pathname;
      const res = await fetch(e.href, { headers: { "Content-type": "text/html" } });
      if (res.status == 404) return;
      const newDoc = parser.parseFromString(await res.text(), "text/html");
      preFetched.push({
        url: url,
        body: newDoc.body.innerHTML
      });
      console.log("Prefetched:", url);
    });
  },
  render: render
}

function render(url) {
  const page = fetchOrCached(url);
  document.body.innerHTML = page.body;
  history.pushState({}, "", url);
}

function fetchOrCached(url) {
  const cached = preFetched.find(e => e.url == url);
  if (cached) return cached;
}

export default SPA;