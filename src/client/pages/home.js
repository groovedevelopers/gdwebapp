import { html, LitElement, property } from 'lit-element';
import { routerSubject$ } from '../../settings/util/page-router';
import '../components/footer';
import '../components/header';
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
          <div class="container">
            <div class="row">
              <!-- Sidebar ends -->
              <div class="col-sm-3 client-menu">
                <div class="client-menu-area">
                  <div class="client-menu-list">
                    <a href="my-dashboard">
                    <span class="fa fa-home client-menu-icon"></span>
                    <span class="client-menu-link">Dashboard</span>
                    </a>
                  </div>

                  <div class="client-menu-list">
                  <a href="editor">
                    <span class="fa fa-edit client-menu-icon"></span>
                    <span class="client-menu-link">Editor</span>
                    </a>
                  </div>

                  <div class="client-menu-list">
                  <a href="">
                    <span class="fa fa-edit client-menu-icon"></span>
                    <span class="client-menu-link">E-commerce</span>
                    </a>
                  </div>

                  <div class="client-menu-list">
                  <a href="">
                    <span class="fa fa-edit client-menu-icon"></span>
                    <span class="client-menu-link">Marketing</span>
                    </a>
                  </div>

                  <div class="client-menu-list">
                  <a href="">
                    <span class="fa fa-edit client-menu-icon"></span>
                    <span class="client-menu-link">Analytics</span>
                    </a>
                  </div>

                  <div class="client-menu-list">
                  <a href="">
                    <span class="fa fa-edit client-menu-icon"></span>
                    <span class="client-menu-link">Scheduler</span>
                    </a>
                  </div>

                  <div class="client-menu-list">
                  <a href="">
                    <span class="fa fa-user client-menu-icon"></span>
                    <span class="client-menu-link">Accounts</span>
                    </a>
                  </div>

                  <div class="client-menu-list">
                  <a href="">
                    <span class="fa fa-cog client-menu-icon"></span>
                    <span class="client-menu-link">Settings</span>
                    </a>
                  </div>

                  <div class="client-menu-list">
                  <a href="">
                    <span class="fa fa-edit client-menu-icon"></span>
                    <span class="client-menu-link">Help</span>
                    </a>
                  </div>

                  <hr>

                 
                </div>
              </div>
              <!-- Sidebar Menu ends -->

              <!-- Main ends -->
              <div class="col-sm-6 dashboard-middle">
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

                    <div class="row">
                      <div class="col-sm-12 big-service-tab">ffff</div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Main ends -->

              <div class="col-sm-3 dashboard-right">

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
