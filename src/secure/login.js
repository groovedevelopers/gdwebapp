import { html, LitElement, property } from 'lit-element';
import { routerSubject$ } from '../settings/util/page-router';
import '../front/components/footer';
import '../front/components/header';
// import { gethome } from '../util/firebase.config';
// import { switchMap, tap, map, filter } from 'rxjs/operators';
// import { BehaviorSubject, combineLatest } from 'rxjs';

// import 'elix/define/SlidingPages.js';
class login extends LitElement {


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

<div class="gd-header" style="background:#110746; color: white;">
                <div class="logo">
                        <a class="mysitename" href="home"> <img src="https://firebasestorage.googleapis.com/v0/b/gdmaintest.appspot.com/o/white_logo_transparent_background.png?alt=media&token=5861bdc6-7720-4f27-b5df-cf0e18745baf" width="100px" height="30px" style="object-fit: cover;" />  </a>
                </div>
                <!-- Menu 1 Starts -->
                    <div class="menu1">

                       
                    </div>
                <!-- Menu 1 Ends -->

                <div class="menu2">

                    <ul class="" >
                        <li class="components"><a href="start" > Create Accouunt</a></li>
                       
                    </ul>
                </div>

          </div>
      <!--================Header Menu Area =================-->

      <!--================Hero Banner Area Start =================-->
      <!-- <section class="hero-banner d-flex align-items-center">
        <div class="container text-center"></div>
      </section> -->
      <!--================Hero Banner Area End =================-->

      <section class="login-sec">
        <div class="center-hero">

          <div class="login-logo">
            <img src="https://firebasestorage.googleapis.com/v0/b/gdmaintest.appspot.com/o/logo_transparent_background.png?alt=media&token=af55c7ae-3c74-455e-b19f-0a0b899d6e59" style="max-width:100%; max-height:100%;"/>
          </div>

          <div class="login-text">
            Login to manage your projects
          </div>

        </div>

        <div class="login_area">

        <form>

            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Your Email"
              />
            </div>

            <div class="form-group">
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Your Password"
              />
            </div>

            <div class="logins-buttons">
              <div class="login-btn">
            <button class="btn btn-outline-secondary">Login</button>
            </div>

            <div class="recover-btn">
            <button class="btn btn-outline-secondary">lost your password?</button>
            </div>
            </div>

            </form>

            
        </div>
        <hr>

        <div class="social-cont">

        <a href="">
          <div class="social-login">
            Login with Google &nbsp;  <span class="fa fa-google"></span>
          </div>
        </a>

        <br>

        <a href="">
          <div class="social-login">
            Login with Facebook &nbsp; <span class="fa fa-facebook"></span>
          </div>
        </a>

        <br>

        <a href="">
          <div class="social-login">
            Login with Github &nbsp; <span class="fa fa-github"></span>
          </div>
        </a>

        </div>

        

        
      </section>
      <br>
      <br>
      <!--================Header Menu Area =================-->

      <style>
        .vl {
          border-left: 1px solid black;
          height: 90px;
        }
      </style>


<footer-component></footer-component>
    `;
  }
}

customElements.define('login-page', login);