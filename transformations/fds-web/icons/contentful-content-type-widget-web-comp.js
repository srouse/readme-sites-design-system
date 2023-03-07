
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
<g clip-path="url(#clip0_12_5120)">
<path d="M12.8181 30.6544C12.8181 29.2988 13.917 28.1998 15.2727 28.1998H44.7272C46.0828 28.1998 47.1817 29.2988 47.1817 30.6544C47.1817 32.01 46.0828 33.109 44.7272 33.109H15.2727C13.917 33.109 12.8181 32.01 12.8181 30.6544Z" fill="#353739"/>
<path d="M12.8181 42.3546C12.8181 40.9989 13.917 39.9 15.2727 39.9H44.7272C46.0828 39.9 47.1817 40.9989 47.1817 42.3546C47.1817 43.7102 46.0828 44.8091 44.7272 44.8091H15.2727C13.917 44.8091 12.8181 43.7102 12.8181 42.3546Z" fill="#353739"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 12.8182C3 7.39575 7.39575 3 12.8182 3H47.1818C52.6042 3 57 7.39575 57 12.8182V47.1818C57 52.6042 52.6042 57 47.1818 57H12.8182C7.39575 57 3 52.6042 3 47.1818V12.8182ZM7.90909 21.9V46.7729C7.90909 49.484 10.107 51.6819 12.8182 51.6819H47.1818C49.8931 51.6819 52.091 49.484 52.091 46.7729V21.9H7.90909ZM42.2728 14.209C42.2728 12.8535 43.3717 11.7545 44.7272 11.7545C46.0829 11.7545 47.1818 12.8535 47.1818 14.209C47.1818 15.5646 46.0829 16.6636 44.7272 16.6636C43.3717 16.6636 42.2728 15.5646 42.2728 14.209ZM14.8637 11.7545C13.5081 11.7545 12.4092 12.8535 12.4092 14.209C12.4092 15.5646 13.5081 16.6636 14.8637 16.6636H29.591C30.9466 16.6636 32.0455 15.5646 32.0455 14.209C32.0455 12.8535 30.9466 11.7545 29.591 11.7545H14.8637Z" fill="#353739"/>
</g>
<defs>
<clipPath id="clip0_12_5120">
<rect width="54" height="54" fill="white" transform="translate(3 3)"/>
</clipPath>
</defs>
</svg>
</div>
`;

class RDScontentfulContentTypeWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('rds-icon-contentful-content-type-widget', RDScontentfulContentTypeWidget);