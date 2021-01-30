import { html, LitElement, property } from 'lit-element';
import { routerSubject$ } from '../../../settings/util/page-router';
import '../../components/footer';
import '../../../client/pages/editor/mainarea';
// import '../components/header';
// import { gethome } from '../util/firebase.config';
// import { switchMap, tap, map, filter } from 'rxjs/operators';
// import { BehaviorSubject, combineLatest } from 'rxjs';

// import 'elix/define/SlidingPages.js';
class domain extends LitElement {
  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    ////////////////////////////
    // Twitter: @mikedevelops
    ////////////////////////////

    // your custome placeholder goes here!
    var ph = 'Type to search e.g. "groovedevelopers.com"',
      searchBar = $('#search'),
      // placeholder loop counter
      phCount = 0;

    // function to return random number between
    // with min/max range
    function randDelay(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // function to print placeholder text in a
    // 'typing' effect
    function printLetter(string, el) {
      // split string into character seperated array
      var arr = string.split(''),
        input = el,
        // store full placeholder
        origString = string,
        // get current placeholder value
        curPlace = $(input).attr('placeholder'),
        // append next letter to current placeholder
        placeholder = curPlace + arr[phCount];

      setTimeout(function () {
        // print placeholder text
        $(input).attr('placeholder', placeholder);
        // increase loop count
        phCount++;
        // run loop until placeholder is fully printed
        if (phCount < arr.length) {
          printLetter(origString, input);
        }
        // use random speed to simulate
        // 'human' typing
      }, randDelay(50, 90));
    }

    // function to init animation
    function placeholder() {
      $(searchBar).attr('placeholder', '');
      printLetter(ph, searchBar);
    }

    placeholder();
    $('.submit').click(function (e) {
      phCount = 0;
      e.preventDefault();
      placeholder();
    });
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
                        <div class="form-group">
                                <div class="wrapper">
                                    <input class="search" type="text" id="search" />
                                    <!-- <input class="submit" type="submit" value=" " /> -->
                                </div>

                        </div>
                </div>
          </div>
          </div>

        </section>
      </div>

      <footer-component></footer-component>
    `;
  }
}

customElements.define('domain-name', domain);
