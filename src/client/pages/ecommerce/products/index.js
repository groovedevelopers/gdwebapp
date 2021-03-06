import { html, LitElement, property } from 'lit-element';
import { routerSubject$ } from '../../../../settings/util/page-router';
import '../../../components/footer';
import '../../../components/header';
import '../../../components/sidebar';
// import { gethome } from '../util/firebase.config';
// import { switchMap, tap, map, filter } from 'rxjs/operators';
// import { BehaviorSubject, combineLatest } from 'rxjs';

// import 'elix/define/SlidingPages.js';
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
          <sidebar-component ></sidebar-component>

          <div class="ecommerceBody">

          <a href="/commerce">
            <button class="btn btn-outline-primary">Back</button>
          </a>
          <br><br>
            <div class="container">
              <div class="row">
                <div class="col-sm-3 ecommerce-Containers">
                  <a href="/commerce/all-product">
                    <div class="ecomMenu-T">
                    <!-- <img src="https://img.icons8.com/dotty/80/000000/tetra-pak.png" height="50px" width="50px"/> -->
                      <p>All Products</p>
                    </div>
                  </a>
                </div>

                &nbsp; &nbsp;

                <div class="col-sm-3 ecommerce-Containers">
                  <a href="">
                    <div class="ecomMenu-T">
                    <!-- <img src="https://img.icons8.com/material-two-tone/24/000000/shopping-cart--v1.png" height="50px" width="50px"/> -->
                      <p>Inventory</p>
                    </div>
                  </a>
                </div>

                &nbsp; &nbsp;

                <div class="col-sm-3 ecommerce-Containers">
                  <a href="/commerce/product-categories">
                    <div class="ecomMenu-T">
                    <!-- <img src="https://img.icons8.com/dotty/80/000000/online-shop-sale--v2.png" height="50px" width="50px"/> -->
                      <p>Categories</p>
                    </div>
                  </a>
                </div>
              </div>
              <br />

              <div class="row">
                <div class="col-sm-3 ecommerce-Containers">
                  <a href="/commerce/product-brands">
                    <div class="ecomMenu-T">
                    <!-- <img src="https://img.icons8.com/metro/26/000000/pos-terminal.png" height="50px" width="50px"/> -->
                      <p>Brands</p>
                    </div>
                  </a>
                </div>

                &nbsp; &nbsp;

                <div class="col-sm-3 ecommerce-Containers">
                  <a href="/commerce/gift-cards">
                    
                    <div class="ecomMenu-T">
                    <!-- <span class="fa fa-cog" style="font-size:50px;"></span> -->
                      <p>Gift Cards</p>
                    </div>
                  </a>
                </div>

              </div>
            </div>
            <br /><br />
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('product-manager', ecommerce);
