import { html, LitElement, property, customElement } from 'lit-element';

@customElement('style-manager-btn')
class main extends LitElement {
  createRenderRoot() {
    return this;
  }

  openStyleManager() {
    document.getElementById('styleManager').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
  }
  

  connectedCallback() {
    super.connectedCallback();
    

    
    
  }

  render() {
    return html`
      <div class="">
                <button @click=${this.openStyleManager} class="btn btn-primary">
                  Add Section
                </button>
              </div>
    `;
  }
}
