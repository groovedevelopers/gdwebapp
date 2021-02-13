import { html, LitElement, property, customElement } from 'lit-element';

@customElement('customer-journey')
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
     customer journey
     </div>
    `;
  }
}
