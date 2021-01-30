import { html, LitElement, property } from 'lit-element';
import { routerSubject$ } from '../../settings/util/page-router';
import '../components/footer';
import '../../client/pages/editor/mainarea';
// import '../components/header';
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
      <div class="gd">
        <div class="gd-banner">

          <div class="gd-header">
                <div class="logo">
                        <a class="mysitename" href="#"> <img src="https://firebasestorage.googleapis.com/v0/b/gdmaintest.appspot.com/o/white_logo_transparent_background.png?alt=media&token=5861bdc6-7720-4f27-b5df-cf0e18745baf" width="100px" height="30px" style="object-fit: cover;" />  </a>
                </div>
                <!-- Menu 1 Starts -->
                    <div class="menu1">

                        <ul>

                        <li class="links"> <a href="" > Products</a> </li>
                        <li class="links"> <a href=""> Templates</a> </li>
                        <li class="links"> <a href=""> Pricing</a> </li>

                        </ul>
                    </div>
                <!-- Menu 1 Ends -->

                <div class="menu2">

                    <ul class="" >
                        <li class="components"><a href=""><span class="fa fa-language" style="font-size:20px"></span></a></li>
                        <li class="components"><a href="login" class="login"> Login</a></li>
                       
                    </ul>
                </div>

          </div>

          <!-- <div class="sticky-top bg-white hidden-spacer"></div> -->
          <section class="firstSec">
            <div class="container">
              <div class="row">
                <div class="col-sm-6 ">

                <div class="banner-img">
                    <img src="https://firebasestorage.googleapis.com/v0/b/gdmaintest.appspot.com/o/business-3560934_1920.jpg?alt=media&token=f0bac3f3-06b2-48bb-935b-bd718f8ddfd7" />
                    </div>
                </div>
                <div class="col-sm-6">
                  <div class="poster">
                  <q>If You can <b class="poster-text">THINK IT</b>
                        <br>
                           You can <b class="poster-text">MAKE IT</b>
                        </q>
                      
                    </div>
                    <br>

                    <div class="quote" >

                        Launch your own website and online store today
                    
                    </div>
                    <div class="$1">
                    <a href="start"><button class="get-started btn">Get Started</button></a>
                    </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section class="templates-sec">
            <div class="sec-header ">

            <div class="ht">
            CREATE A WEBSITE
            </div>
            <div class="subhead">
            Start with award-winning templates, then customize to fit your style and professional needs.
            </div>

            </div>
            <div class="container">
                <div class="row">

                <div class="col-sm-5">
                        <div class="tem">
                            <h3>Choose your website template</h3>
                            <br>
                            <p>Select from any of our industry-leading website templates, designer fonts and color palettes</p>
                        </div>

                        <div class="tem">
                            <h3>Add the tools you need</h3>
                            <br>
                            <p>Select from any of our industry-leading website templates, designer fonts and color palettes</p>
                        </div>

                        <div class="tem">
                            <h3>Reach your audience</h3>
                            <br>
                            <p>Select from any of our industry-leading website templates, designer fonts and color palettes</p>
                        </div>

                        <div class="tem">
                        <button class="get-started btn">Get Started</button>
                          
                        </div>
                    </div>

                    <div class="col-sm-7">
                        <div class="$1">

                        <img src="https://firebasestorage.googleapis.com/v0/b/gdmaintest.appspot.com/o/teee.png?alt=media&token=b7783ab6-434e-41b6-8421-4640a14c05cc" />
                            

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="hiw">
        <div class="right" >

            <div class="htr">
                See how it works.
            </div>
            <div class="subheadr">
                Our website builder makes it easy to customize your site and add the tools you need to grow your business.
            </div>
            <button class="get-started btn">Get Started</button>

        </div>

        <div class="editor-test">
            <img src="https://firebasestorage.googleapis.com/v0/b/gdmaintest.appspot.com/o/dashboard-idea.webp?alt=media&token=cc78f82f-dd1d-40ce-857d-77d97afd5fdb" style="max-height:100%; max-width:100%;">
        </div>



        </section>



<footer-component></footer-component>
       
      </div>

      
    `;
  }
}

customElements.define('front-home-page', home);
