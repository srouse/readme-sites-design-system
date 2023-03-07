
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
  <div id="root"><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_31_1229)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.6 11.1C4.61177 11.1 3 12.7117 3 14.7V45.3C3 47.2882 4.61177 48.9 6.6 48.9H53.4C55.3882 48.9 57 47.2882 57 45.3V14.7C57 12.7117 55.3882 11.1 53.4 11.1H6.6ZM8.4 14.7C7.40589 14.7 6.6 15.5059 6.6 16.5V43.5C6.6 44.4941 7.40589 45.3 8.4 45.3H51.6C52.5941 45.3 53.4 44.4941 53.4 43.5V16.5C53.4 15.5059 52.5941 14.7 51.6 14.7H8.4Z" fill="#353739"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M41.6999 17.4C40.7058 17.4 39.8999 18.2059 39.8999 19.2V40.8C39.8999 41.7942 40.7058 42.6 41.6999 42.6H48.8999C49.894 42.6 50.6999 41.7942 50.6999 40.8V19.2C50.6999 18.2059 49.894 17.4 48.8999 17.4H41.6999ZM45.2999 21C44.3058 21 43.4999 21.8059 43.4999 22.8V37.2C43.4999 38.1942 44.3058 39 45.2999 39C46.294 39 47.0999 38.1942 47.0999 37.2V22.8C47.0999 21.8059 46.294 21 45.2999 21Z" fill="#353739"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1 17.4C10.1059 17.4 9.30005 18.2059 9.30005 19.2V40.8C9.30005 41.7942 10.1059 42.6 11.1 42.6H35.4C36.3942 42.6 37.2 41.7942 37.2 40.8V19.2C37.2 18.2059 36.3942 17.4 35.4 17.4H11.1ZM14.7 21C13.7059 21 12.9 21.8059 12.9 22.8V37.2C12.9 38.1942 13.7059 39 14.7 39H31.8C32.7942 39 33.6 38.1942 33.6 37.2V22.8C33.6 21.8059 32.7942 21 31.8 21H14.7Z" fill="#353739"/>
</g>
<defs>
<clipPath id="clip0_31_1229">
<rect width="54" height="37.8" fill="white" transform="translate(3 11.1)"/>
</clipPath>
</defs>
</svg>
</div>
`;

class RDSpresentationDeckWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('rds-icon-presentation-deck-widget', RDSpresentationDeckWidget);