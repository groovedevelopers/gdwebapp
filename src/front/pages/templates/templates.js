import { html, LitElement, property } from 'lit-element';
import { routerSubject$ } from '../../../settings/util/page-router';
import '../../components/footer';
import '../../components/header';
// import { gethome } from '../util/firebase.config';
// import { switchMap, tap, map, filter } from 'rxjs/operators';
// import { BehaviorSubject, combineLatest } from 'rxjs';

// import 'elix/define/SlidingPages.js';
class templates extends LitElement {


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

<div class="gd-header" style="background:#110746;color: white;">
                <div class="logo">
                        <a class="mysitename" href="home"> <img src="https://firebasestorage.googleapis.com/v0/b/gdmaintest.appspot.com/o/white_logo_transparent_background.png?alt=media&token=5861bdc6-7720-4f27-b5df-cf0e18745baf" width="100px" height="30px" style="object-fit: cover;" />  </a>
                </div>
                <!-- Menu 1 Starts -->
                    <div class="menu1" >

                        <ul>

                        <li class="links" style="color: white;"> <a href="" > Products</a> </li>
                        <li class="links" style="color: white;"> <a href=""> Templates</a> </li>
                        <li class="links" style="color: white;"> <a href=""> Pricing</a> </li>

                        </ul>
                    </div>
                <!-- Menu 1 Ends -->

                <div class="menu2">

                    <ul class="" >
                        <li class="components"><a href=""><span class="fa fa-language" style="font-size:20px"></span></a></li>
                        <li class="components"><a href="login" class="login-blue"> Login</a></li>
                       
                    </ul>
                </div>

          </div>

        <!--================Hero Banner Area Start =================-->
        <section class="hero-banner d-flex align-items-center">
        <div class="container text-center">
          <h2>Templates</h2>
        </div>
      </section>
      <!--================Hero Banner Area End =================-->

      <!--================Template Area =================-->
      <section class="template">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6">
              <div class="content">
                <img
                  src="https://cdn.pixabay.com/photo/2020/12/09/09/27/women-5816861_1280.jpg"
                  alt="Avatar"
                  class="image"
                  style="width:100%"
                />
                <div class="middle">
                  <span>
                    <a href="register"> <button class="btn btn-default">Start with</button></a>
                    <a href="$1" target="_blank"> <button class="btn btn-secondary">Preview</button></a>
                  </span>
                </div>
                <br>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="content">
                <img
                  src="https://cdn.pixabay.com/photo/2020/12/09/09/27/women-5816861_1280.jpg"
                  alt="Avatar"
                  class="image"
                  style="width:100%"
                />
                <div class="middle">
                  <span>
                  <a href="$1"> <button class="btn btn-default">Start with</button></a>
                    <a href="$1"> <button class="btn btn-secondary">Preview</button></a>
                  </span>
                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="content">
                <img
                  src="https://cdn.pixabay.com/photo/2020/12/09/09/27/women-5816861_1280.jpg"
                  alt="Avatar"
                  class="image"
                  style="width:100%"
                />
                <div class="middle">
                  <span>
                  <a href="$1"> <button class="btn btn-default">Start with</button></a>
                    <a href="$1"> <button class="btn btn-secondary">Preview</button></a>
                  </span>
                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="content">
                <img
                  src="https://cdn.pixabay.com/photo/2020/12/09/09/27/women-5816861_1280.jpg"
                  alt="Avatar"
                  class="image"
                  style="max-width:100%; max-height:100%"
                />
                <div class="middle">
                  <span>
                  <a href="$1"> <button class="btn btn-default">Start with</button></a>
                    <a href="$1"> <button class="btn btn-secondary">Preview</button></a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br>
      <br>
      <!--================Template Area =================-->


      <footer-component></footer-component>
    `;
  }
}

customElements.define('templates-page', templates);