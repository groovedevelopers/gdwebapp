import { html, LitElement, property, customElement } from 'lit-element';
import './settings/index';

@customElement('editor-header')
class main extends LitElement {
  createRenderRoot() {
    return this;
  }

  savePage() {
    const view = document.querySelector(".body").innerHTML;
   console.log(view);

  }

  fullscreen() {
    const elem = document.getElementById('editor-body');
    function openFullscreen() {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
      }
    }
  }

  openLayout() {
    document.getElementById('myLayout').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
  }

  openStyleManager() {
    document.getElementById('styleManager').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
  }

  mobile(){
   
  }


 
  pageConfig(event){
    const btnClickEvent  =  new CustomEvent('pageConfig-settings', {

        composed: true,
        bubbles: true
    })

    window.dispatchEvent(btnClickEvent)

  }

  

  connectedCallback() {
    super.connectedCallback();
    
    
  }

  render() {
    return html`
       <div class="editor-header">
          <div class="editor-header-left">
            <div class="container">
              <button @click=${this.savePage} class="btn btn-outline-primary">Done</button>
            </div>
          </div>

          <div class="editor-header-center">
            <div class="page-selector">
              <div class="dropdown">
                <a class="" href="#" role="button" data-toggle="dropdown">
                  <span style="font-size:15px;"> <b>Home Page</b></span>
                  <p style="font-size:10px;">Page - Published</p>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list"
                >
                  <a class="dropdown-item" href="profile.html"
                    > About</a
                  >
                  <a class="dropdown-item" href="profile.html"
                    > Service</a
                  >
                  <a class="dropdown-item" href="faq.html"
                    > Contact</a
                  >
                  <hr>
                  <a class="dropdown-item" href="faq.html"
                    > + Add Page</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="editor-header-right">
            <div class="tools-area">
              
              
              
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  @click=${this.openLayout}
                >
                  L
                </button>
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  @click=${this.openStyleManager}
                >
                  S
                </button>

                &nbsp;&nbsp;
                <a href="" style="top:20px">
                <span class="fa fa-mobile" @click=${this.mobile} style="font-size:35px; "></span
              ></a>
              &nbsp;
              <a href="">
                <span class="fa fa-cog" @click=${this.pageConfig} style="font-size:20px; padding:9px; "></span
              ></a>

                
              </div>

              
            </div>
            <!-- <div class="">
              <a href="https://github.com/dropways/deskapp" target="_blank"
                ><img src="https://firebasestorage.googleapis.com/v0/b/gdmaintest.appspot.com/o/logo_transparent_background.png?alt=media&token=af55c7ae-3c74-455e-b19f-0a0b899d6e59" width="50px" height="50px" alt=""
              /></a>
            </div> -->
          </div>
        </div>


        <page-config-home></page-config-home>
        






    `;
  }
}
