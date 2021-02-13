import { html, LitElement, property } from 'lit-element';
import { routerSubject$ } from '../../../settings/util/page-router';
import '../../components/footer';
import '../../components/header';
import '../../components/sidebar';
import './email/index';
import './mobile/index';
import './seo/index';
import './social/index';

class marketing extends LitElement {
  createRenderRoot() {
    return this;
  }

  seoPage() {
    document.querySelector('.seo').style.display = 'block';
    document.querySelector('.email').style.display = 'none';
    document.querySelector('.social').style.display = 'none';
    document.querySelector('.mobilem').style.display = 'none';
  }
  emailPage() {
    document.querySelector('.seo').style.display = 'none';
    document.querySelector('.email').style.display = 'block';
    document.querySelector('.social').style.display = 'none';
    document.querySelector('.mobilem').style.display = 'none';
  }

  socialPage() {
    document.querySelector('.seo').style.display = 'none';
    document.querySelector('.email').style.display = 'none';
    document.querySelector('.social').style.display = 'block';
    document.querySelector('.mobilem').style.display = 'none';
  }

  mobilePage() {
    document.querySelector('.seo').style.display = 'none';
    document.querySelector('.email').style.display = 'none';
    document.querySelector('.social').style.display = 'none';
    document.querySelector('.mobilem').style.display = 'block';
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
      <div class="marketing">
        <div class="marketingBody">
          <div class="marketingHead">
            <a href="/my-dashboard"
              ><button class="btn btn-outline-primary">Back</button></a
            >
            <hr />
          </div>

          <seo-marketing class="seo"></seo-marketing>

          <email-marketing
            class="email"
            style="display:none;"
          ></email-marketing>

          <social-management
            class="social"
            style="display:none;"
          ></social-management>

          <mobile-marketing
            class="mobilem"
            style="display:none;"
          ></mobile-marketing>
        </div>

        <div class="marketingNav">
          <div class="marketingMenuHead">
            <a href="my-dashboard">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gdmaintest.appspot.com/o/logo_transparent_background.png?alt=media&token=af55c7ae-3c74-455e-b19f-0a0b899d6e59"
                width="100px"
                height="30px"
                style="object-fit: cover; float:center"
                class="marketingMenuLogo"
              />
            </a>
          </div>

          <div class="marketingMenu">
            <div class="marketingMenuList">
              <a href="" @click=${this.seoPage}>SEO Marketing</a>
            </div>
            <div class="marketingMenuList">
              <a href="" @click=${this.emailPage}>Email Marketing</a>
            </div>
            <div class="marketingMenuList">
              <a href="" @click=${this.socialPage}>Social Management</a>
            </div>
            <div class="marketingMenuList">
              <a href="" @click=${this.mobilePage}>Mobile Marketing</a>
            </div>
          </div>

          <div class="marketingMenuFooter">

          
            
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('marketing-tools', marketing);
