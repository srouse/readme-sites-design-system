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
          #root, svg {
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
      
        this.shadowRoot.querySelector(
          '#root'
        ).innerHTML = `<svg width="60" height="60" viewBox="0 0 60 60" style="fill: var( --color );" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_7_38105)">
<path d="M44.7272 28.1998H15.2727C13.9171 28.1998 12.8181 29.2988 12.8181 30.6544C12.8181 32.01 13.9171 33.1089 15.2727 33.1089H44.7272C46.0828 33.1089 47.1818 32.01 47.1818 30.6544C47.1818 29.2988 46.0828 28.1998 44.7272 28.1998Z" fill="#353739"/>
<path d="M44.7272 39.8999H15.2727C13.9171 39.8999 12.8181 40.9989 12.8181 42.3545C12.8181 43.7101 13.9171 44.809 15.2727 44.809H44.7272C46.0828 44.809 47.1818 43.7101 47.1818 42.3545C47.1818 40.9989 46.0828 39.8999 44.7272 39.8999Z" fill="#353739"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 12.8182C3 7.39575 7.39575 3 12.8182 3H47.1818C52.6042 3 57 7.39575 57 12.8182V21.9V47.1818C57 52.6042 52.6042 57 47.1818 57H12.8182C7.39575 57 3 52.6042 3 47.1818V21.9V12.8182ZM7.90909 21.9V46.7729C7.90909 49.4839 10.107 51.682 12.8182 51.682H47.1818C49.8931 51.682 52.0909 49.4839 52.0909 46.7729V21.9H7.90909ZM42.2727 14.209C42.2727 12.8535 43.3716 11.7545 44.7273 11.7545C46.0829 11.7545 47.1818 12.8535 47.1818 14.209C47.1818 15.5647 46.0829 16.6636 44.7273 16.6636C43.3716 16.6636 42.2727 15.5647 42.2727 14.209ZM14.8637 11.7545C13.5081 11.7545 12.4092 12.8535 12.4092 14.209C12.4092 15.5647 13.5081 16.6636 14.8637 16.6636H29.5911C30.9467 16.6636 32.0456 15.5647 32.0456 14.209C32.0456 12.8535 30.9467 11.7545 29.5911 11.7545H14.8637Z" fill="#353739"/>
</g>
<defs>
<clipPath id="clip0_7_38105">
<rect width="54" height="54" fill="white" transform="translate(3 3)"/>
</clipPath>
</defs>
</svg>
`;

    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'icon') {
        this.getSvg(newValue);
      }
    }
  }
  
  window.customElements.define('rds-icon', RDSIcon);
