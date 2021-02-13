import { html, LitElement, property, customElement } from 'lit-element';

@customElement('audience-tags')
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
     audience tags
     </div>
    `;
  }
}
