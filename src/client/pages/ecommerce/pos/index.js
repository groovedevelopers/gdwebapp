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
      <div class="posHead">
        <div class="posHead1">
          <span>Location: </span>
        </div>

        <div class="posHead2">
          <button class="btn btn-outline-warning">
            <span class="fa fa-pause "></span>
          </button>
          <button class="btn btn-outline-dark">
            <span>
              <img
                src="https://img.icons8.com/pastel-glyph/64/000000/fullscreen.png"
                width="20px"
                height="20px"
              />
            </span>
          </button>
          <button class="btn btn-outline-secondary">
            <span class="fa fa-file"></span>
          </button>
          <button class="btn btn-outline-danger">
            <span class="fa fa-close"></span>
          </button>
          <a href="/commerce"
            ><button class="btn btn-outline-primary">
              <img
                src="https://img.icons8.com/metro/26/000000/back.png"
              /></button
          ></a>
        </div>
      </div>
      <div class="posBody">
        <div class="posArea1">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 ">
                <div class="input-group posUser">
                  <div class="input-group-prepend" >
                    <span
                        class="input-group-text basic-addon1 fa fa-user"
                        id="basic-addon1"
                        style="font-size:25px;"
                      ></span>
                    
                  </div>
                  <select class="form-control basic-addon2">
                    <option>Walking Customer</option>
                    <optgroup></optgroup>
                    <option>customer 1</option>
                  </select>
                  <div class="input-group-prepend  basic-addon3"  >
                    <span
                        class="input-group-text fa fa-plus"
                        id="basic-addon1"
                        
                      ></span>
                  </div>
                </div>
              </div>

              <div class="col-sm-5 ">
                <div class=" posSearch">
                  
                  <input type="text" class="form-control" placeholder="Search Here" />
                 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="posArea2">
          <div class="container">
            <div class="row">
              <div class="col-xs-3 well posProduct">
                <img
                  src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-delivery-pickup-social-distancing-card-phone-202008_FMT_WHH?wid=658&hei=550&fmt=png-alpha&qlt=80&.v=1597074988000"
                  width="150px"
                  height="150px"
                />
                <hr />
                <p class="text-center">dhjdehjfd</p>
              </div>
              <div class="col-xs-3 well posProduct">
                <img
                  src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-delivery-pickup-social-distancing-card-phone-202008_FMT_WHH?wid=658&hei=550&fmt=png-alpha&qlt=80&.v=1597074988000"
                  width="150px"
                  height="150px"
                />
                <hr />
                <p class="text-center">dhjdehjfd</p>
              </div>
              <div class="col-xs-3 well posProduct">
                <img
                  src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-delivery-pickup-social-distancing-card-phone-202008_FMT_WHH?wid=658&hei=550&fmt=png-alpha&qlt=80&.v=1597074988000"
                  width="150px"
                  height="150px"
                />
                <hr />
                <p class="text-center">dhjdehjfd</p>
              </div>
              <div class="col-xs-3 well posProduct">
                <img
                  src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-delivery-pickup-social-distancing-card-phone-202008_FMT_WHH?wid=658&hei=550&fmt=png-alpha&qlt=80&.v=1597074988000"
                  width="150px"
                  height="150px"
                />
                <hr />
                <p class="text-center">dhjdehjfd</p>
              </div>
              <div class="col-xs-3 well posProduct">
                <img
                  src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-delivery-pickup-social-distancing-card-phone-202008_FMT_WHH?wid=658&hei=550&fmt=png-alpha&qlt=80&.v=1597074988000"
                  width="150px"
                  height="150px"
                />
                <hr />
                <p class="text-center">dhjdehjfd</p>
              </div>
              <div class="col-xs-3 well posProduct">
                <img
                  src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-delivery-pickup-social-distancing-card-phone-202008_FMT_WHH?wid=658&hei=550&fmt=png-alpha&qlt=80&.v=1597074988000"
                  width="150px"
                  height="150px"
                />
                <hr />
                <p class="text-center">dhjdehjfd</p>
              </div>
              <div class="col-xs-3 well posProduct">
                <img
                  src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-delivery-pickup-social-distancing-card-phone-202008_FMT_WHH?wid=658&hei=550&fmt=png-alpha&qlt=80&.v=1597074988000"
                  width="150px"
                  height="150px"
                />
                <hr />
                <p class="text-center">dhjdehjfd</p>
              </div>
              <div class="col-xs-3 well posProduct">
                <img
                  src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-delivery-pickup-social-distancing-card-phone-202008_FMT_WHH?wid=658&hei=550&fmt=png-alpha&qlt=80&.v=1597074988000"
                  width="150px"
                  height="150px"
                />
                <hr />
                <p class="text-center">dhjdehjfd</p>
              </div>
              <div class="col-xs-3 well posProduct">
                <img
                  src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-delivery-pickup-social-distancing-card-phone-202008_FMT_WHH?wid=658&hei=550&fmt=png-alpha&qlt=80&.v=1597074988000"
                  width="150px"
                  height="150px"
                />
                <hr />
                <p class="text-center">dhjdehjfd</p>
              </div>
              <div class="col-xs-3 well posProduct">
                <img
                  src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-delivery-pickup-social-distancing-card-phone-202008_FMT_WHH?wid=658&hei=550&fmt=png-alpha&qlt=80&.v=1597074988000"
                  width="150px"
                  height="150px"
                />
                <hr />
                <p class="text-center">dhjdehjfd</p>
              </div>
              <div class="col-xs-3 well posProduct">
                <img
                  src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-delivery-pickup-social-distancing-card-phone-202008_FMT_WHH?wid=658&hei=550&fmt=png-alpha&qlt=80&.v=1597074988000"
                  width="150px"
                  height="150px"
                />
                <hr />
                <p class="text-center">dhjdehjfd</p>
              </div>
              <div class="col-xs-3 well posProduct">
                <img
                  src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-delivery-pickup-social-distancing-card-phone-202008_FMT_WHH?wid=658&hei=550&fmt=png-alpha&qlt=80&.v=1597074988000"
                  width="150px"
                  height="150px"
                />
                <hr />
                <p class="text-center">dhjdehjfd</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="posFooter">
        <span class="btn btn-outline-secondary">Draft</span>
        &nbsp;
        <span class="btn btn-outline-primary">Quotation</span>
        &nbsp;
        <span class="btn btn-outline-warning">Credit Sale</span>
        &nbsp;
        <span class="btn btn-outline-secondary"
          >Card <i class="fa fa-credit-card"></i>
        </span>
        &nbsp;
        <span class="btn btn-outline-dark"
          >Multiple Pay
          <img
            src="https://img.icons8.com/ios/50/000000/credit-card-cash-withdrawal.png"
            width="20px"
            height="20px"
          />
        </span>
        &nbsp;
        <span class="btn btn-outline-success"
          >Cash <i class="fa fa-money"></i
        ></span>
        &nbsp;

        <span class="totalAmount" style="width:200px;">
          Total Payable:
          <p style="color:green;"></p>
        </span>
        &nbsp;
        <span class="btn btn-outline-danger">Clear </span>
        &nbsp;

        <span class="btn btn-primary" style="text-align:right;"
          >Recent Transaction
        </span>
      </div>
    `;
  }
}

customElements.define('point-of-sales', ecommerce);
