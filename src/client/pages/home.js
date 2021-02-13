import { html, LitElement, property } from 'lit-element';
import { routerSubject$ } from '../../settings/util/page-router';
import '../components/footer';
import '../components/header';
import '../components/sidebar';
// import { gethome } from '../util/firebase.config';
// import { switchMap, tap, map, filter } from 'rxjs/operators';
// import { BehaviorSubject, combineLatest } from 'rxjs';

// import 'elix/define/SlidingPages.js';
class home extends LitElement {
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
      <div class="dashboard">
        <header-component></header-component>

        <div class="dashboard-body">
              <!-- Sidebar ends -->
              <sidebar-component></sidebar-component>
              <!-- Sidebar Menu ends -->

              
          

              <!-- Main ends -->
              <div class=" dashboard-middle">
                <div class="main-top">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-4 service-tab size">ffff</div>
                      &nbsp; &nbsp;
                      <div class="col-sm-4 service-tab">ffff</div>
                      &nbsp; &nbsp;
                      <div class="col-sm-3 service-tab">ffff</div>
                    </div>
                    <hr />

                   
                      <div class="col-sm-12 big-service-tab">ffff</div>
                    
                  </div>
                </div>
              </div>
              <!-- Main ends -->

              <div class="dashboard-right">

              <div class="elementSwitch">
                    <span>Light</span>
                    <label class="switch">
                      <input class="btnswitch bgwsw" type="checkbox" />
                      <span class="slider round"></span>
                    </label>
                    <span>Dark</span>
                  </div>


                <div class="container">
                  <div class="row">
                    <div class="col-sm-12 side-service-tab ">ffff</div>
                    &nbsp; &nbsp;
                    <div class="col-sm-12 side-service-tab">ffff</div>
                    &nbsp; &nbsp;
                    <div class="col-sm-12 side-service-tab">ffff</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('home-page', home);
