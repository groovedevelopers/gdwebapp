import { html, LitElement, property, customElement } from 'lit-element';

@customElement('page-config-home')
class main extends LitElement {
  createRenderRoot() {
    return this;
  }


  configclose() {
    document.querySelector('.pageConfig-modal').style.display = 'none';
  }

  general() {
    document.querySelector('.general').style.display = 'block';
    document.querySelector('.seo').style.display = 'none';
    document.querySelector('.social-image').style.display = 'none';
    document.querySelector('.advanced').style.display = 'none';
  }
  seo() {
    document.querySelector('.general').style.display = 'none';
    document.querySelector('.seo').style.display = 'block';
    document.querySelector('.social-image').style.display = 'none';
    document.querySelector('.advanced').style.display = 'none';
  }
  social() {
    document.querySelector('.general').style.display = 'none';
    document.querySelector('.seo').style.display = 'none';
    document.querySelector('.social-image').style.display = 'block';
    document.querySelector('.advanced').style.display = 'none';
  }
  advanced() {
    document.querySelector('.general').style.display = 'none';
    document.querySelector('.seo').style.display = 'none';
    document.querySelector('.social-image').style.display = 'none';
    document.querySelector('.advanced').style.display = 'block';
  }

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener('pageConfig-settings', (event) => {
      document.querySelector('.pageConfig-modal').style.display = 'block';
    });
  }

  render() {
    return html`
      <div class="pageConfig-modal">
        <!-- Modal content -->
        <div class="config-content">
          <a>
            <span class="config-close" @click=${this.configclose}
              >&times;</span
            ></a
          >
          <br />
          <br />

          <div class="container">
            <div class="row">
              <div class="col-sm-4 config-menu">
                <div class="config-side-header">
                  <h3>Page Settings</h3>
                </div>

                <div class="menu-item">
                  <a href="" @click=${this.general}
                    ><span class="menulink"> General </span></a
                  >
                </div>
                <div class="menu-item">
                  <a href="" @click=${this.seo}
                    ><span class="menulink"> SEO </span></a
                  >
                </div>
                <div class="menu-item">
                  <a href="" @click=${this.social}>
                    <span class="menulink"> Social Image </span></a
                  >
                </div>

                <div class="menu-item">
                  <a href="" @click=${this.advanced}
                    ><span class="menulink"> Advanced </span></a
                  >
                </div>
              </div>
              <div class="col-sm-7 config-home">
                <div class="general">
                  <h1 style="padding:30px;">General</h1>
                  <br />

                  <div class="container">
                    <div class="form-group">
                      <label for="pageTitle" style="font-weight:normal;">
                        PAGE TITLE</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="pageTitle"
                        value="Home"
                      />
                      <p style="font-size: 12px; font-weight: normal;">
                        The page title appears in the top of the browser window.
                      </p>
                    </div>

                    <br />

                    <div class="form-group">
                      <label for="navigationTitle" style="font-weight:normal;">
                        NAVIGATION TITLE</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="navigationTitle"
                        value="Home"
                      />
                      <p style="font-size: 12px; font-weight: normal;">
                        The navigation title is the page’s name in the
                        navigation menu.
                      </p>
                    </div>

                    <br />

                    <div class="form-group">
                      <label for="urlSlug" style="font-weight:normal;">
                        URL SLUG</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="urlSlug"
                        value="/home"
                      />
                      <p style="font-size: 12px; font-weight: normal;">
                        The unique location slug for this page.
                      </p>
                    </div>

                    </div> 

                  </div>

                  <div class="seo" style="display:none;">

                  <h1 style="padding:30px;">Seo</h1>
                  <br />

                  <div class="container">
                    <div class="form-group">
                      <label for="seoTitle" style="font-weight:normal;">
                        TITLE</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="seoTitle"
                        value="Home"
                      />
                      <p style="font-size: 12px; font-weight: normal;">
                        The page title appears in the top of the browser window.
                      </p>
                    </div>

                    <br />

                    <div class="form-group">
                      <label for="seoDesc" style="font-weight:normal;">
                        Description</label
                      >
                      <textarea class="form-control" id="seoDesc" ></textarea>
                      <p style="font-size: 12px; font-weight: normal;">
                        The navigation title is the page’s name in the
                        navigation menu.
                      </p>
                    </div>

                    <br />

                    <div class="form-group">
                      <label for="keywords" style="font-weight:normal;">
                        Keywords</label
                      >
                      <textarea class="form-control" id="keywords" >Amsterdam,Washington,Sydney</textarea>
                      
                      <p style="font-size: 12px; font-weight: normal;">
                        Seperate the keywords with a coma (,).
                      </p>
                    </div>
        </div> 
                
                </div>
                  <div class="social-image" style="display:none;">

                  <h1 style="padding:30px;">Social Image</h1>
                  <br />

                  <div class="container">
                    <div class="form-group">
                      <label for="social-image" style="font-weight:normal;">
                        Image</label
                      >
                      <div class="socialImg">
                      <input type="file" id="social-image"  @change=${this.uploadImage} class="secImg-main " name="file" />
                      <i class="fa fa-upload" style="font-size: 30px;"></i>
                      
                      <p>Upload Image</p>
                      </div>
                      <br>
                      <p style="font-size: 12px; font-weight: normal;">
                        The page title appears in the top of the browser window.
                      </p>
                    </div>

                    

                    
        </div> 

                
                </div>
                  <div class="advanced" style="display:none;">

                  <h1 style="padding:30px;">Advanced</h1>
                  <br />

                  <div class="container">
                  

                    <div class="form-group">
                      <label for="seo-code" style="font-weight:normal;">
                        Add Custom Code</label
                      >
                      <textarea class="form-control" id="seo-code" placeholder="<script>........"></textarea>
                      
                      <p style="font-size: 12px; font-weight: normal;">
                        Add any script to be placed in the head tag area.
                      </p>
                    </div>
        </div> 

                  
                
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>
            .socialImg{
                padding:40px;
                display:block;
                box-shadow: 3px 3px 5px #f1f1f1;
                border-radius: 25px;
                border:  1px solid #ffff;
                text-align:center;
                position: relative;
            }
        </style>
      </div>
    `;
  }
}
