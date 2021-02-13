import { html, LitElement, property, customElement } from 'lit-element';

@customElement('my-inbox')
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
     Inbox
     </div>
    `;
  }
}
