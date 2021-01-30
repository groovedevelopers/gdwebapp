import { html, LitElement, property, customElement } from 'lit-element';

import './layout/general'
import './layout/layouts'
import './layout/service'
import './layout/social-blocks'
import './layout/static'


@customElement('side-layout')
class main extends LitElement {
  createRenderRoot() {
    return this;
  }

  closeLayout() {
    document.getElementById('myLayout').style.width = '0';

    let event = new CustomEvent('closeMain', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  
  
  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    return html`
     

      <div id="myLayout" class="layout">
      <a href="javascript:void(0)" class="closebtn" @click=${this.closeLayout}
          >&times;</a
        >
       

        <div class="container">
          <general-tool></general-tool>
          <layouts-tool></layouts-tool>
          <service-tool></service-tool>
          <social-tool></social-tool>
          <static-tool></static-tool>

        </div>
      </div>
    `;
  }
}
