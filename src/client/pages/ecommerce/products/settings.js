import { html, LitElement, property } from 'lit-element';
import { routerSubject$ } from '../../../../settings/util/page-router';
import '../../../components/footer';
import '../../../components/header';
import '../../../components/sidebar';
class ecommerce extends LitElement {
  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    routerSubject$.next(false);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  render() {
    return html`
      <div class="ecommerceArea">
        <header-component></header-component>

        <div class="dashboard-body">
          <sidebar-component></sidebar-component>

          <div class="ecommerceBody">

          <a href="/commerce/product-manager">
            <button class="btn btn-outline-primary">Back</button>
          </a>
          <br><br>

          Add Settings
           
            <br /><br />
          </div>
         
        </div>
      </div>
    `;
  }
}

customElements.define('product-settings', ecommerce);
