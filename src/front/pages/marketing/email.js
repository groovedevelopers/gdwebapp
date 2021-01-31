import { html, LitElement, property } from 'lit-element';
import { routerSubject$ } from '../../../settings/util/page-router';
import '../../components/footer';
import '../../../client/pages/editor/mainarea';
// import '../components/header';
// import { gethome } from '../util/firebase.config';
// import { switchMap, tap, map, filter } from 'rxjs/operators';
// import { BehaviorSubject, combineLatest } from 'rxjs';

// import 'elix/define/SlidingPages.js';
class emailMarketing extends LitElement {
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
      <div class="domain-bg">
        <div class="gd-header">
          <div class="logo">
            <a class="mysitename" href="home">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gdmaintest.appspot.com/o/logo_transparent_background.png?alt=media&token=af55c7ae-3c74-455e-b19f-0a0b899d6e59"
                width="100px"
                height="30px"
                style="object-fit: cover;"
              />
            </a>
          </div>
          <!-- Menu 1 Starts -->
          <div class="menu1">
            <ul>
              <li class="links"><a href="products"> Products</a></li>
              <li class="links"><a href="templates"> Templates</a></li>
              <li class="links"><a href="pricing"> Pricing</a></li>
            </ul>
          </div>
          <!-- Menu 1 Ends -->

          <div class="menu2">
            <ul class="">
              <li class="components">
                <a href=""
                  ><span class="fa fa-language" style="font-size:20px"></span
                ></a>
              </li>
              <li class="components">
                <a href="login" class="login"> Login</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- <div class="sticky-top bg-white hidden-spacer"></div> -->
        <section class="domain-sec">
            <div class="container">

                <div class="search-area">
                        
                </div>
          </div>
          </div>

        </section>
      </div>

      <footer-component></footer-component>
    `;
  }
}

customElements.define('email-marketing', emailMarketing);
