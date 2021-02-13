import { html, LitElement, property, customElement } from 'lit-element';

@customElement('audience-segments')
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
     audience segments
     </div>
    `;
  }
}
