import { html, LitElement } from 'lit-element';

class sidebar extends LitElement {
  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    return html`
      <div class=" client-menu">
                <div class="client-menu-area">
                  <div class="client-menu-list">
                    <a href="/my-dashboard">
                    <span class="fa fa-home client-menu-icon"></span>
                    <span class="client-menu-link"></span>Dashboard</span>
                    </a>
                  </div>

                  <div class="client-menu-list">
                  <a href="/editor">
                    <span class="fa fa-edit client-menu-icon"></span>
                    <span class="client-menu-link">Editor</span>
                    </a>
                  </div>

                  <div class="client-menu-list">
                  <a href="/commerce">
                    <span class="fa fa-edit client-menu-icon"></span>
                    <span class="client-menu-link">E-commerce</span>
                    </a>
                  </div>

                  <div class="client-menu-list">
                  <a href="/marketing">
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


      
    `;
  }
}

customElements.define('sidebar-component', sidebar);
