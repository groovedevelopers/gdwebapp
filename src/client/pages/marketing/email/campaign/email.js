import { html, LitElement, property, customElement } from 'lit-element';

@customElement('email-templates')
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
     email templates
     </div>
    `;
  }
}
