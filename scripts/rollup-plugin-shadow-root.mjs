export default function shadowRoot() {
  return {
    name: 'shadow-root',
    transform(code, id) {
      if (id.endsWith('.js')) { // Adjust if you have a specific naming convention or directory
        code = `
          class Wrapped extends HTMLElement {
            connectedCallback() {
              const shadowRoot = this.attachShadow({ mode: 'open' });
              shadowRoot.innerHTML = \`${code}\`;
            }
          }
          customElements.define('reporting-widget-${id.split('/').pop().replace('.js', '')}', Wrapped);
        `;
        return {
          code: code,
          map: { mappings: "" }
        };
      }
    }
  };
}
