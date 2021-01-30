import { html, LitElement, property } from 'lit-element';
import { routerSubject$ } from '../../../settings/util/page-router';
import '../../components/footer';
import '../../components/header';
// import { gethome } from '../util/firebase.config';
// import { switchMap, tap, map, filter } from 'rxjs/operators';
// import { BehaviorSubject, combineLatest } from 'rxjs';

import 'elix/define/SlidingPages'; 
class start extends LitElement {


  createRenderRoot() {
    return this;
  }


  @property()
  slideindex = 1

  next(){
     document.getElementById('searchSlide').goNext()
     this.slideindex = this.slideindex + 1
    //  alert(this.slideindex)
  }
  previous(){
     document.getElementById('searchSlide').goPrevious()
     this.slideindex = this.slideindex - 1
  }
  skip(){

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

      <!-- <header-component></header-component> -->

      <div class="gd-header" style="background:#110746; color: white;">
                <div class="logo">
                        <a class="mysitename" href="home"> <img src="https://firebasestorage.googleapis.com/v0/b/gdmaintest.appspot.com/o/white_logo_transparent_background.png?alt=media&token=5861bdc6-7720-4f27-b5df-cf0e18745baf" width="100px" height="30px" style="object-fit: cover;" />  </a>
                </div>
                <!-- Menu 1 Starts -->
                    <div class="menu1">

                        <!-- <ul>

                        <li class="links"> <a href="" > Products</a> </li>
                        <li class="links"> <a href=""> Templates</a> </li>
                        <li class="links"> <a href=""> Pricing</a> </li>

                        </ul> -->
                    </div>
                <!-- Menu 1 Ends -->

                <div class="menu2">

                    <ul class="" >
                        <!-- <li class="components"><a href=""><span class="fa fa-language" style="font-size:20px"></span></a></li> -->
                        <li class="components"><a href="templates" > I am just browsing</a></li>
                       
                    </ul>
                </div>

          </div>
      <!--================Header Menu Area =================-->

      <!--================Hero Banner Area Start =================-->
      <!-- <section class="hero-banner d-flex align-items-center">
        <div class="container text-center"></div>
      </section> -->
      <!--================Hero Banner Area End =================-->

      <section class="blog_area area-padding">
        <div
          style="margin:0 auto; width: 50%;
  padding: 10px;"
        >
          <elix-sliding-pages id="searchSlide">
            <div>
              <div class="">
                <h1>What's your site about?</h1>
                <p>
                  This will help us find you some starting ideas and examples.
                </p>
              </div>
              <div class="radio-toolbar">
                <input
                  type="radio"
                  id="animals"
                  name="radioFilter"
                  value="animals"
                  checked
                />
                <label for="animals">Animals</label>

                <input
                  type="radio"
                  id="beauty"
                  name="radioFilter"
                  value="beauty"
                />
                <label for="beauty">Beauty &amp;spa</label>

                <input
                  type="radio"
                  id="technology"
                  name="radioFilter"
                  value="orange"
                />
                <label for="technology">Technology</label>

                <input
                  type="radio"
                  id="realEstate"
                  name="radioFilter"
                  value="orange"
                />
                <label for="realEstate">Real Estate</label>

                <input
                  type="radio"
                  id="travelAgency"
                  name="radioFilter"
                  value="orange"
                />
                <label for="travelAgency">Travel Agency</label>

                <input
                  type="radio"
                  id="health"
                  name="radioFilter"
                  value="orange"
                />
                <label for="health">Health & Clinics</label>

                <input
                  type="radio"
                  id="software"
                  name="radioFilter"
                  value="orange"
                />
                <label for="software">IT / Software</label>

                <input
                  type="radio"
                  id="blog"
                  name="radioFilter"
                  value="orange"
                />
                <label for="blog">Blog / News</label>

                <input
                  type="radio"
                  id="entertainment"
                  name="radioFilter"
                  value="orange"
                />
                <label for="entertainment">Entertainment</label>

                <input
                  type="radio"
                  id="E-commerce"
                  name="radioFilter"
                  value="orange"
                />
                <label for="E-commerce">E-commerce</label>

                <input
                  type="radio"
                  id="Corporate"
                  name="radioFilter"
                  value="orange"
                />
                <label for="Corporate">Corporate</label>

                <input
                  type="radio"
                  id="social"
                  name="radioFilter"
                  value="orange"
                />
                <label for="social">Social</label>

                <input
                  type="radio"
                  id="personal"
                  name="radioFilter"
                  value="orange"
                />
                <label for="personal">Personal & Cv</label>

                <input
                  type="radio"
                  id="personal"
                  name="radioFilter"
                  value="orange"
                />
                <label for="personal">Politics</label>

                <input
                  type="radio"
                  id="Interior"
                  name="radioFilter"
                  value="orange"
                />
                <label for="Interior">Interior & Exterior Design</label>

                <input
                  type="radio"
                  id="Education"
                  name="radioFilter"
                  value="orange"
                />
                <label for="Education">Education</label>

                <input
                  type="radio"
                  id="Art"
                  name="radioFilter"
                  value="orange"
                />
                <label for="Art">Art</label>

                <input
                  type="radio"
                  id="Marketing"
                  name="radioFilter"
                  value="orange"
                />
                <label for="Marketing">Marketing</label>

                <input
                  type="radio"
                  id="Others"
                  name="radioFilter"
                  value="orange"
                />
                <label for="Others">Others</label>

                
              </div>
              <p>&nbsp;</p>
            </div>

            <div>
              <h1>What are your top goals?</h1>
              <p>
                Select all that apply. If something interests you but isn't a
                top priority, no worries. You can add all our features to any
                template.
              </p>
              <div class="radio-toolbar">
                <div style="display: inline-block;">
                  <label class="container"
                    >Sell Products
                    <input type="checkbox" checked="checked" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div style="display: inline-block;">
                  <label class="container"
                    >Build Community
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div style="display: inline-block;">
                  <label class="container"
                    >Get Appointments
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                
                <div style="display: inline-block;">
                  <label class="container"
                    >Promote Physical Business
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div style="display: inline-block;">
                  <label class="container"
                    >Market myself or my business
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div style="display: inline-block;">
                  <label class="container"
                    >Sell Memberships
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div style="display: inline-block;">
                  <label class="container"
                    >Sell Services
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div style="display: inline-block;">
                  <label class="container"
                    >Collect Donations
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div style="display: inline-block;">
                  <label class="container"
                    >Showcase work
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div style="display: inline-block;">
                  <label class="container"
                    >Publish a Blog
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <div class="">
                <h1>Where are you in your process?</h1>
                <p>Let us know what stage you're at.</p>
              </div>

              <div class="radio-toolbar">
                <input
                  type="radio"
                  id="inspiration"
                  name="idea"
                  value="one"
                  checked
                />
                <label for="inspiration">Collecting inspiration</label>

                <input
                  type="radio"
                  id="project"
                  name="idea"
                  value="two"
                  checked
                />
                <label for="project">Setting up an idea or personal project</label>

                <input
                  type="radio"
                  id="business"
                  name="idea"
                  value="two"
                  checked
                />
                <label for="business">Turning a project or hobby into a business</label>

                <input
                  type="radio"
                  id="existing"
                  name="idea"
                  value="two"
                  checked
                />
                <label for="existing">Growing an existing business</label>

                <input
                  type="radio"
                  id="GD"
                  name="idea"
                  value="two"
                  checked
                />
                <label for="GD">Replace my site with one from GD</label>
              </div>
            </div>

            
          </elix-sliding-pages>

          <br />

            ${this.slideindex > 1? html`
            <button
            @click=${this.previous}
            class="btn"
          >
            Back
          </button>
            `: html`&nbsp;`}

          
          <div style="float: right">
          ${this.slideindex  <= 2?  html`
          <button 
            @click=${this.next}
            class="btn btn-outline-default"
          >
            Next
          </button>
          ` : html `
          <a href="templates">
          <button
            class="btn finish" 
            style="background:#1f2338; color:#fff"
          >
            Finish
          </button>
          </a>
          ` }
          
          
          </div>

         

          
        </div>
      </section>

      <!--================Header Menu Area =================-->

      <style>
        .radio-toolbar {
          margin: 10px;
        }

        .radio-toolbar input[type='radio'] {
          opacity: 0;
          position: fixed;
          width: 0;
        }

        .radio-toolbar label {
          display: inline-block;
          /* background-color: #ddd; */
          padding: 10px 20px;
          font-family: sans-serif, Arial;
          font-size: 16px;
          border: 2px solid #444;
          border-radius: 4px;
        }

        .radio-toolbar label:hover {
          background-color: #dfd;
        }

        .radio-toolbar input[type='radio']:focus + label {
          border: 2px dashed #444;
        }

        .radio-toolbar input[type='radio']:checked + label {
          background-color: #bfb;
          border-color: #4c4;
        }
      </style>

      <footer-component></footer-component>
    `;
  }
}

customElements.define('start-page', start);