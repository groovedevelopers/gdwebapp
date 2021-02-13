import { html, LitElement, property, customElement } from 'lit-element';

@customElement('audience-contact')
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
     audience contact
     </div>
    `;
  }
}
