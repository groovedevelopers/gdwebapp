import { html, LitElement, property, customElement } from 'lit-element';

@customElement('retargeting-ads')
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
     retargeting ads
     </div>
    `;
  }
}
