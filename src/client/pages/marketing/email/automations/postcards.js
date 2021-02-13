import { html, LitElement, property, customElement } from 'lit-element';

@customElement('postcard-manager')
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
     postcard manager
     </div>
    `;
  }
}
