export function CreateApp() {
  let page = window.location.pathname;
  let pages = [];

  return {
    /**
     * Adds javascript that auto-runs when the page at `path` is loaded
     * @param {string} path
     * @param {(e) => any} callback
     */
    page: (path, callback) => {
      pages.push({
        path, callback
      });
    }
  }
}

/**
 * @param {object} options 
 * @param {string | null} options.tagname
 * @param {string} options.customName
 * @param {() => string | HTMLElement} options.render
 */
export function CreateElement(options) {
  if (!options.render || !options.customName) return;
  class CustomElement extends HTMLElement {
    constructor() {
      super();

      this._options = options;
      this._render = options.render;
    }

    connectedCallback() {
      const res = this._render();
      const t = typeof res;

      if (t == "string") {
        this.innerHTML = res;
      }
    }
  }
  customElements.define(options.customName, CustomElement);
}