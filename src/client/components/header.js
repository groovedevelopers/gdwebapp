import { html, LitElement } from 'lit-element';

class Header extends LitElement {
  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    return html`
      <div class="dashboard-header">
        <div class="dashboard-header-left">
          <a class="mysitename" href="my-dashboard">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/gdmaintest.appspot.com/o/logo_transparent_background.png?alt=media&token=af55c7ae-3c74-455e-b19f-0a0b899d6e59"
              width="100px"
              height="30px"
              style="object-fit: cover;"
            />
          </a>
        </div>
        <div class="dashboard-header-center">
          <div class="topsearch">
            
            <form>
              <div class="s-form">
              <div class="search-area">
              <input class="form-control search-form" placeholder="Text here" type="text">
              </div>
              <div class="search-area">
              <i class="fa fa-search search-btn"></i>
              </div>
              </div>
            </form>

          </div>
        </div>
        <div class="dashboard-header-right">
          <div class="translate">
                <span>EN &#9660;</span>
                <div class="translate-content">
                  <p>PL</p>
                  <p>ES</p>
                  <p>FR</p>
                </div>
          </div>
          <div class="notifications">

              <span class="fa fa-bell-o notifications-icons"></span>
                <div class="notifications-content">
                  <p>PL</p>
                  <p>ES</p>
                  <p>FR</p>
                </div>

          </div>

          <div class="profile-drop">

          <img src="https://firebasestorage.googleapis.com/v0/b/gdmaintest.appspot.com/o/me.jpeg?alt=media&token=c15db542-f3ee-440f-b08e-86d6d4a39f59" class="profile-drop-img"  alt="Avatar">
                <div class="profile-drop-content">
                  <p>PL</p>
                  <p>ES</p>
                  <p>FR</p>
                </div>

          </div>
        </div>
      </div>


      
    `;
  }
}

customElements.define('header-component', Header);
