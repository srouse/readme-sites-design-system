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
          console.log('hii');
          // svg = await fetch('https://admirable-pegasus-a42d6b.netlify.app/transformations/fdst-web/icons/contentful-content-type-widget.svg').then(r => r.text())
          // svg = await import('https://admirable-pegasus-a42d6b.netlify.app/transformations/fdst-web/icons/contentful-content-type-widget.js');
          // console.log(import.meta);
          
          svg = "https://admirable-pegasus-a42d6b.netlify.app/transformations/fdst-web/icons/contentful-content-type-widget.svg";
            
          
          console.log('hii', svg);
          break;
      }
      if (svg) {
        this.shadowRoot.querySelector(
          '#root'
        ).innerHTML = `<object type="image/svg+xml" data="${svg}" class="logo"></object>`;
      }else{
        this.shadowRoot.querySelector(
          '#root'
        ).innerHTML = '<div class="error">no icon</div>';
      }
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'icon') {
        this.getSvg(newValue);
      }
    }
  }
  
  window.customElements.define('rds-icon', RDSIcon);
