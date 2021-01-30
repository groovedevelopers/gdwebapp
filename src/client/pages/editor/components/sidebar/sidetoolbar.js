import { html, LitElement, property, customElement } from 'lit-element';

import './sidetoolbar-layout';
import './sidetoolbar-sections';

@customElement('side-tool-bar')
class main extends LitElement {
  createRenderRoot() {
    return this;
  }

  
  
  
  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    return html`
     

      

     <side-sections></side-sections>
      <side-layout></side-layout>
      
    `;
  }
}
