import { html, LitElement, property, customElement } from 'lit-element';

@customElement('report-manager')
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
     report-manager
     </div>
    `;
  }
}
