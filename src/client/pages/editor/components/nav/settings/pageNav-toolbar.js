import { html, LitElement, property, customElement } from 'lit-element';

@customElement('navheader-btn')
class main extends LitElement {
  createRenderRoot() {
    return this;
  }

  closepagenav() {
    document.querySelector('.pagenav-toolbar').style.display = 'none';
  }

  siteTitle() {
    document.querySelector('.sitename-and-logo').style.display = 'block';
    document.querySelector('.elements').style.display = 'none';
    document.querySelector('.pagenav-main').style.display = 'none';
    document.querySelector('.colors').style.display = 'none';
    document.querySelector('.position').style.display = 'none';
    document.querySelector('.position').style.display = 'none';
  }

  backtoMain() {
    document.querySelector('.pagenav-main').style.display = 'block';
    document.querySelector('.sitename-and-logo').style.display = 'none';
    document.querySelector('.elements').style.display = 'none';
    document.querySelector('.colors').style.display = 'none';
    document.querySelector('.position').style.display = 'none';
    document.querySelector('.head-style').style.display = 'none';
  }

  elements() {
    document.querySelector('.elements').style.display = 'block';
    document.querySelector('.sitename-and-logo').style.display = 'none';
    document.querySelector('.pagenav-main').style.display = 'none';
    document.querySelector('.colors').style.display = 'none';
  }

  colors() {
    document.querySelector('.colors').style.display = 'block';
    document.querySelector('.elements').style.display = 'none';
    document.querySelector('.sitename-and-logo').style.display = 'none';
    document.querySelector('.pagenav-main').style.display = 'none';
  }

  position() {
    document.querySelector('.position').style.display = 'block';
    document.querySelector('.colors').style.display = 'none';
    document.querySelector('.elements').style.display = 'none';
    document.querySelector('.sitename-and-logo').style.display = 'none';
    document.querySelector('.pagenav-main').style.display = 'none';
  }

  headStyle() {
    document.querySelector('.head-style').style.display = 'block';
    document.querySelector('.colors').style.display = 'none';
    document.querySelector('.elements').style.display = 'none';
    document.querySelector('.sitename-and-logo').style.display = 'none';
    document.querySelector('.pagenav-main').style.display = 'none';
  }

  nav(event){
 
    const navevent = new CustomEvent('navChange', {
      detail: { value: event },
      composed: true,
      bubbles: true,
    });

    window.dispatchEvent(navevent);
  }
 

  sitename(event) {
    // alert('ttttttttt')

    const sitenameevent = new CustomEvent('sitenameChange', {
      detail: { value: event },
      composed: true,
      bubbles: true,
    });

    window.dispatchEvent(sitenameevent);
  }

  @property()
  noImg = true;

  logo(event) {
    // alert('ttttttttt')
    const file = event.target.files[0];
    const logoevent = new CustomEvent('logoChange', {
      detail: { file },
      composed: true,
      bubbles: true,
    });

    window.dispatchEvent(logoevent);
  }

  mobilelogo(event) {
    // alert('ttttttttt')
    const file = event.target.files[0];
    const mobilelogoevent = new CustomEvent('mobilelogoChange', {
      detail: { file },
      composed: true,
      bubbles: true,
    });

    window.dispatchEvent(mobilelogoevent);
  }

  removeLogo() {
    const logoevent = new CustomEvent('logoRemove', {
      composed: true,
      bubbles: true,
    });

    window.dispatchEvent(logoevent);
  }

  navbtnName(event) {
    // alert('ttttttttt')

    const navbtnNameevent = new CustomEvent('navbtnNameChange', {
      detail: { value: event },
      composed: true,
      bubbles: true,
    });

    window.dispatchEvent(navbtnNameevent);
  }

  navbtnUrl(event) {
    // alert('ttttttttt')

    const navbtnUrlevent = new CustomEvent('navbtnUrlChange', {
      detail: { value: event },
      composed: true,
      bubbles: true,
    });

    window.dispatchEvent(navbtnUrlevent);
  }

  cartbtn(event) {
    // alert('ttttttttt')

    const cartbtnevent = new CustomEvent('cartsizeChange', {
      detail: { value: event },
      composed: true,
      bubbles: true,
    });

    window.dispatchEvent(cartbtnevent);
  }


  colorbtn(event) {
    // alert('ttttttttt')

    const navcolorevent = new CustomEvent('navcolorChange', {
      detail: { value: event },
      composed: true,
      bubbles: true,
    });

    window.dispatchEvent(navcolorevent);
  }

  

  cartbtnswitch(event) {
    const sw = document.querySelector('.cartsw');
    if (sw.checked === true) {
      document.querySelector('.cartProperties').style.display = 'block';

      const cartbtnevent = new CustomEvent('cartbtnChange', {
        detail: { value: event },
        composed: true,
        bubbles: true,
      });

      window.dispatchEvent(cartbtnevent);
    } else {
      document.querySelector('.cartProperties').style.display = 'none';

      const cartbtnevent = new CustomEvent('cartBtnRemove', {
        composed: true,
        bubbles: true,
      });

      window.dispatchEvent(cartbtnevent);
    }
  }

  btnswitch(event) {
    const sw = document.querySelector('.btnswitch');

    if (sw.checked === true) {
      document.querySelector('.btnProperties').style.display = 'block';

      const navbtnevent = new CustomEvent('navbtnChange', {
        detail: { value: event },
        composed: true,
        bubbles: true,
      });

      window.dispatchEvent(navbtnevent);
    } else {
      document.querySelector('.btnProperties').style.display = 'none';

      const navbtnevent = new CustomEvent('navBtnRemove', {
        composed: true,
        bubbles: true,
      });

      window.dispatchEvent(navbtnevent);
    }
  }

  bgbtnswitch(event) {
    const sw = document.querySelector('.bgssw');
    console.log(sw)
    if (sw.checked === true) {
      document.querySelector('.bgProperties').style.display = 'none';
      

      const bgevent = new CustomEvent('bgChange', {
        detail: { value: event },
        composed: true,
        bubbles: true,
      });

      window.dispatchEvent(bgevent);
    } else {
      document.querySelector('.bgProperties').style.display = 'block';

      const bgevent = new CustomEvent('bgRemove', {
        composed: true,
        bubbles: true,
      });

      window.dispatchEvent(bgevent);
    }
  }




  navpositionbtnswitch(event) {
    const sw = document.querySelector('.navpositionsw');
    if (sw.checked === true) {
      // document.querySelector('.navpositionProperties').style.display = 'block';

      const navpositionevent = new CustomEvent('navpositionChange', {
        detail: { value: event },
        composed: true,
        bubbles: true,
      });

      window.dispatchEvent(navpositionevent);
    } else {
      // document.querySelector('.navpositionProperties').style.display = 'none';

      const navpositionevent = new CustomEvent('navpositionRemove', {
        composed: true,
        bubbles: true,
      });

      window.dispatchEvent(navpositionevent);
    }
  }


  userLoginswitch(event) {
    const sw = document.querySelector('.ulogin');
    console.log(sw)
    if (sw.checked === true) {
      document.querySelector('.login').style.display = 'block';
      

      const bgevent = new CustomEvent('userLoginChange', {
        detail: { value: event },
        composed: true,
        bubbles: true,
      });

      window.dispatchEvent(bgevent);
    } else {
      document.querySelector('.login').style.display = 'none';

      const bgevent = new CustomEvent('userLoginRemove', {
        composed: true,
        bubbles: true,
      });

      window.dispatchEvent(bgevent);
    }
  }



  connectedCallback() {
    super.connectedCallback();
    // document.querySelector('.sitename-and-logo').style.display = 'none';

    window.addEventListener('newLogo', (event) => {
      
      this.noImg = !event.detail.state;
      // document.querySelector('.testttt').style.display = 'block'
    });
  }

  render() {
    return html`
      <div class="pagenav-toolbar">
        <i class="close fa fa-close" @click=${this.closepagenav}></i>

        <div class="pagenav-main">
          <div class="pagenav-header">
            <span>Global</span>
            <span class="pagenav-header-icons">
              <i class="fa fa-desktop" style="font-size:20px"></i>
              <i class="fa fa-mobile" style="font-size:30px"></i>
            </span>
            <hr />

            <img
              src="https://firebasestorage.googleapis.com/v0/b/gdmaintest.appspot.com/o/download.svg?alt=media&token=c7201d28-816b-4ee6-a146-03b5e42e61a8"
            />
          </div>

          <div class="pagenav-menulist">
            <a href="" @click=${this.siteTitle}>
              <span>Site Title & Logo</span>
              <span class="headnav-arrow">&gt;</span>
            </a>
          </div>

          <div class="pagenav-menulist">
            <a href="" @click=${this.elements}>
              <span>Elements</span>
              <span class="headnav-arrow">&gt;</span>
            </a>
          </div>

          <div class="pagenav-menulist">
            <a href="" @click=${this.colors}>
              <span>Colors</span>
              <span class="headnav-arrow">&gt;</span>
            </a>
          </div>

          <div class="pagenav-menulist">
            <a href="" @click=${this.position}>
              <span>Fixed Position</span>
              <span class="headnav-arrow">&gt;</span>
            </a>
          </div>

          <div class="pagenav-menulist">
            <a href="" @click=${this.headStyle}>
              <span>Header Style</span>
              <span class="headnav-arrow">&gt;</span>
            </a>
          </div>
        </div>

        <div class="sitename-and-logo">
          <div class="pagenav-header">
            <a href="" @click=${this.backtoMain}>
              <span class="headnav-back-arrow">&lt; Back</span>
            </a>

            <div class="min-head">
              <b>Site Title & Logo</b>
            </div>
            <hr />
          </div>

          <div class="form-group">
            <label for="sitename" style="font-weight:normal;">
              SITE TITLE</label
            >
            <input
              type="text"
              class="form-control"
              id="sitename"
              value="Home"
              @input=${(event) => {
                this.sitename(event.target.value);
              }}
            />
            <p style="font-size: 12px; font-weight: normal;">
              The page title appears in the top of the browser window.
            </p>
          </div>

          <div class="logoImg">
            <input
              type="file"
              id="social-image"
              @change=${this.logo}
              class="secImg-main "
              name="file"
            />
            <i class="fa fa-upload" style="font-size: 30px;"></i>

            ${this.noImg
              ? html` <p>Upload Image</p>`
              : html`<p>Change Image</p>`}
          </div>
          ${this.noImg
            ? html`<p>Add logo</p>`
            : html` <a href="" @click=${this.removeLogo}>
                <span>Remove Logo</span>
              </a>`}

          <div class="mobile-logoImg">
            <input
              type="file"
              id="social-image"
              @change=${this.mobilelogo}
              class="secImg-main "
              name="file"
            />
            <i class="fa fa-upload" style="font-size: 30px;"></i>

            <p>Upload Image</p>
          </div>
          <p>Add mobile logo</p>
        </div>

        <div class="elements">
          <div class="pagenav-header">
            <a href="" @click=${this.backtoMain}>
              <span class="headnav-back-arrow">&lt; Back</span>
            </a>

            <div class="min-head">
              <b>Site Elements</b>
            </div>
            <hr />
          </div>

          <div class="form-group">
            <label for="sitename" style="font-weight:normal;"> Button</label>
            <div class=" elementSwitch">
              <label class="switch">
                <input class="btnswitch bgwsw" type="checkbox" @click=${this.btnswitch} />
                <span class="slider round"></span>
              </label>
            </div>
          </div>

          <div class="btnProperties">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="sitename"
                value="Get Started"
                @input=${(event) => {
                  this.navbtnName(event.target.value);
                }}
              />
            </div>

            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Clickthrough URL"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="url"
                @input=${(event) => {
                  this.navbtnUrl(event.target.value);
                }}
              />
              <div class="input-group-prepend" style="background: #fff">
                <a href="$1"
                  ><span
                    class="input-group-text fa fa-cog"
                    id="basic-addon1"
                    style="font-size:25px;"
                  ></span
                ></a>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="sitename" style="font-weight:normal;">
              Social Links</label
            >
            <div class=" elementSwitch">
              <label class="switch">
                <input class="bgwsw" type="checkbox" @click=${this.bgwsw} />
                <span class="slider round"></span>
              </label>
            </div>
          </div>

          <div class="form-group">
            <label for="sitename" style="font-weight:normal;"> Cart</label>
            <div class=" elementSwitch">
              <label class="switch">
                <input
                  class="cartsw bgwsw"
                  type="checkbox"
                  @click=${this.cartbtnswitch}
                />
                <span class="slider round"></span>
              </label>
            </div>
          </div>

          <div class="cartProperties">
            <div class="form-group">
              <input
                type="range"
                class="form-control"
                id="sitename"
                min="15"
                max="40"
                value="15"
                @input=${(event) => {
                  this.cartbtn(event.target.value);
                }}
              />
            </div>
          </div>

          <div class="form-group">
            <label for="sitename" style="font-weight:normal;">
              Account Login & Register</label
            >
            <div class=" elementSwitch">
              <label class="switch">
                <input class="ulogin bgwsw" type="checkbox" @click=${this.userLoginswitch} />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
          <div class="login">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  @input=${(event) => {
                    this.colorbtn(event.target.value);
                  }}
                />
              </div>
            </div>



          <div class="form-group">
            <label for="sitename" style="font-weight:normal;"> Translate</label>
            <div class=" elementSwitch">
              <label class="switch">
                <input class="bgwsw" type="checkbox" @click=${this.bgwsw} />
                <span class="slider round"></span>
              </label>
            </div>
          </div>

          <div class="form-group">
            <label for="sitename" style="font-weight:normal;"> Currency</label>
            <div class=" elementSwitch">
              <label class="switch">
                <input class="bgwsw" type="checkbox" @click=${this.bgwsw} />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </div>

        <div class="colors">
          <div class="pagenav-header">
            <a href="" @click=${this.backtoMain}>
              <span class="headnav-back-arrow">&lt; Back</span>
            </a>

            <div class="min-head">
              <b>Colors</b>
            </div>
            <hr />
          </div>

          <div class="form-group">
            <label for="sitename" style="font-weight:normal;">
              Transparent</label
            >
            <div class=" elementSwitch">
              <label class="switch">
                <input
                  class="bgwsw bgssw"
                  type="checkbox"
                  @click=${this.bgbtnswitch}
                />
                <span class="slider round"></span>
              </label>
            </div>

            
          </div>


          <div class="bgProperties">
              <div class="form-group">
                <input
                  type="color"
                  class="form-control"
                  @input=${(event) => {
                    this.colorbtn(event.target.value);
                  }}
                />
              </div>
            </div>


        </div>


        



        <div class="position">
          <div class="pagenav-header">
            <a href="" @click=${this.backtoMain}>
              <span class="headnav-back-arrow">&lt; Back</span>
            </a>

            <div class="min-head">
              <b>Header Position</b>
            </div>
            <hr />
          </div>

          <div class="form-group">
            <label for="sitename" style="font-weight:normal;">
              Fixed Header</label
            >
            <div class=" elementSwitch">
              <label class="switch">
                <input class="navpositionsw bgwsw" type="checkbox" @click=${this.navpositionbtnswitch} />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </div>

        <div class="head-style">
          <div class="pagenav-header">
            <a href="" @click=${this.backtoMain}>
              <span class="headnav-back-arrow">&lt; Back</span>
            </a>

            <div class="min-head">
              <b>Templates</b>
            </div>
            <hr />

            <div class="nav-temp">
              <div class="form-group">

                <div>
                <button @click=${() => {this.nav('<navbar-one></navbar-one>')}} value="navbar-one" class="btn btn-outline-secondary">navbar 1</button>
                
                </div>
                <div>
                <button @click=${() => {this.nav('<navbar-two></navbar-two>')}} value="navbar-two" class="btn btn-outline-secondary">navbar 2</button>
                
                </div>
                <div>
                <button @click=${() => {this.nav('<navbar-three></navbar-three>')}} value="navbar-three" class="btn btn-outline-secondary">navbar 3</button>
                
                </div>
                <div>
                <button @click=${() => {this.nav('<navbar-four></navbar-four>')}} value="navbar-four" class="btn btn-outline-secondary">navbar 4</button>
                
                </div>

                <div>
                <button @click=${() => {this.nav('<navbar-five></navbar-five>')}} value="navbar-five" class="btn btn-outline-secondary">navbar 5</button>
                
                </div>
                <div>
                <button @click=${() => {this.nav('<navbar-six></navbar-six>')}} value="navbar-six" class="btn btn-outline-secondary">navbar 6</button>
                
                </div>



              </div>
            </div>


          </div>
        </div>
      </div>

      <style>
        .login{
          display: none;
        }
        .bgProperties {
          display: none;
        }
        .cartProperties {
          display: none;
        }
        .btnProperties {
          display: none;
        }

        .head-style {
          display: none;
        }

        .position {
          display: none;
        }

        .elements {
          display: none;
        }

        .colors {
          display: none;
        }

        .elementSwitch {
          float: right;
          text-align: center;
        }

        .logoImg {
          padding: 30px;
          display: block;
          box-shadow: 3px 3px 5px #f1f1f1;
          border-radius: 25px;
          border: 1px solid #ffff;
          text-align: center;
          position: relative;
        }

        .mobile-logoImg {
          padding: 30px;
          display: block;
          box-shadow: 3px 3px 5px #f1f1f1;
          border-radius: 25px;
          border: 1px solid #ffff;
          text-align: center;
          position: relative;
        }
        .sitename-and-logo {
          display: none;
        }
        .headnav-arrow {
          float: right;
          color: black;
        }

        .pagenav-menulist {
          padding: 10px;
          border-bottom: 1px groove #f1f1f1;
          text-decoration: none;
        }
        .pagenav-header {
          padding: 20px;
        }
        .pagenav-header-icons {
          float: right;
        }

        .headnav-back-arrow {
          float: left;
          padding: 10px;
        }

        .min-head {
          text-align: center;
          font-size: 15px;
          font-weight: 20px;
          padding: 10px;
        }
      </style>
    `;
  }
}
