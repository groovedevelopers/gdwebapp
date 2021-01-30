import { html, LitElement, property, customElement } from 'lit-element';

@customElement('blogs-sec')
class main extends LitElement {
  createRenderRoot() {
    return this;
  }

  
  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    return html`
      
      <div class="col-sm-10 styleicons text-center" draggable="true">
              <i class="fa fa-font" style="font-size:20px"></i>
              <p>Blogs</p>
            </div>

    `;
  }
}
