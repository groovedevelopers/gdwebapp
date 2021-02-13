import { html, LitElement, property, customElement } from 'lit-element';

@customElement('audience-dashboard')
class main extends LitElement {
  createRenderRoot() {
    return this;
  }

  audience() {}
  campaigns() {}
  automations() {}

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
     <div>
         dashoard
     </div>
    `;
  }
}
