import { html, LitElement, property, customElement } from 'lit-element';

@customElement('all-campaign')
class main extends LitElement {
  createRenderRoot() {
    return this;
  }

  

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
     <div>
     all campaign
     </div>
    `;
  }
}
