const template = document.createElement('template');
  template.innerHTML = `
    <style>
      :host {
        width: 42px;
        height: 42px;
      }
        :host, #root {
          display: inline-block;
        }
          #root, img, svg {
            width: 100%;
            height: 100%;
          }
            svg, svg * {
              fill: var( --color, #222 ) !important;
            }
        .error {
          font-family: sans-serif;
          font-size: 12px;
          color: #f00;
        }
    </style>
    <div id="root"></div>
  `;
  
  class RDSIcon extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  
    static get observedAttributes() {
      return ['icon'];
    }
  
    async getSvg(icon) {
      let svg;
      switch (icon) {
        case 'contentful-content-type-widget' :
          // svg = await fetch('https://admirable-pegasus-a42d6b.netlify.app/transformations/fdst-web/icons/contentful-content-type-widget.svg').then(r => r.text())
          // svg = (await import('./icons/contentful-content-type-widget.js')).default;
          break;
      }
      if (svg) {
        this.shadowRoot.querySelector(
          '#root'
        ).innerHTML = svg;
      }else{
        this.shadowRoot.querySelector(
          '#root'
        ).innerHTML = '<div class="error">no icon</div><script src="./icons/contentful-content-type-widget.js"></script>';
      }
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'icon') {
        this.getSvg(newValue);
      }
    }
  }
  
  window.customElements.define('rds-icon', RDSIcon);
