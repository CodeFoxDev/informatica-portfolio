const SPA = {
  setup: () => {
    document.addEventListener("click", async (ev) => {
      if (ev.target.getAttribute("data-silent") || !ev.target.href) return 0;
      ev.preventDefault();
      console.log("Navigating to:", ev.target.href);

      const res = await fetch(ev.target.href, { headers: { "Content-type": "text/xml" } });
      if (res.status == 404) return 404;
      
      const parser = new DOMParser();
      const newDoc = parser.parseFromString(await res.text(), "text/html");
      
      history.pushState({}, "", ev.target.href);
      document.body.innerHTML = newDoc.body.innerHTML;
    });
  },
  search: () => {
    console.log("search");
  }
}

export default SPA;