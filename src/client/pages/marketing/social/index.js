import { html, LitElement, property, customElement } from 'lit-element';


@customElement('social-management')
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
       social management
   </div>


    `;
  }
}
