import { html, LitElement, property } from 'lit-element';
import { routerSubject$ } from '../../../settings/util/page-router';
import '../../components/footer';
import '../../components/header';
import '../../components/sidebar';
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
            <div class="container">
              <div class="row">
                <div class="col-sm-3 ecommerce-Containers">
                  <a href="/commerce/product-manager">
                    <div class="ecomMenu-T">
                    <img src="https://img.icons8.com/dotty/80/000000/tetra-pak.png" height="50px" width="50px"/>
                      <p></p>Products
                    </div>
                  </a>
                </div>

                &nbsp; &nbsp;

                <div class="col-sm-3 ecommerce-Containers">
                  <a href="/commerce/purchase-manager">
                    <div class="ecomMenu-T">
                    <img src="https://img.icons8.com/material-two-tone/24/000000/shopping-cart--v1.png" height="50px" width="50px"/>
                      <p>Purchases</p>
                    </div>
                  </a>
                </div>

                &nbsp; &nbsp;

                <div class="col-sm-3 ecommerce-Containers">
                  <a href="">
                    <div class="ecomMenu-T">
                    <img src="https://img.icons8.com/dotty/80/000000/online-shop-sale--v2.png" height="50px" width="50px"/>
                      <p>Orders</p>
                    </div>
                  </a>
                </div>
              </div>
              <br />

              <div class="row">
                <div class="col-sm-3 ecommerce-Containers">
                  <a href="/commerce/point-of-sales">
                    <div class="ecomMenu-T">
                    <img src="https://img.icons8.com/metro/26/000000/pos-terminal.png" height="50px" width="50px"/>
                      <p>Point Of Sales</p>
                    </div>
                  </a>
                </div>

                &nbsp; &nbsp;

                <div class="col-sm-3 ecommerce-Containers">
                  <a href="#">
                    
                    <div class="ecomMenu-T">
                    <span class="fa fa-cog" style="font-size:50px;"></span>
                      <p>Apps</p>
                    </div>
                  </a>
                </div>

                &nbsp; &nbsp;

                <div class="col-sm-3 ecommerce-Containers">
                  <a href="/commerce/discount-manager">
                    <div class="ecomMenu-T">
                    <img src="https://img.icons8.com/metro/26/000000/discount.png" height="50px" width="50px"/>
                      <p>Discounts/Coupons</p>
                    </div>
                  </a>
                </div>

                &nbsp; &nbsp;

                <div class="col-sm-3 ecommerce-Containers">
                  <a href="#">
                    
                    <div class="ecomMenu-T">
                    <span class="fa fa-cog" style="font-size:50px;"></span>
                      <p>Settings</p>
                    </div>
                  </a>
                </div>

                &nbsp; &nbsp;
              </div>
            </div>
            <br /><br />
          </div>
         
        </div>
      </div>
    `;
  }
}

customElements.define('ecommerce-client', ecommerce);
