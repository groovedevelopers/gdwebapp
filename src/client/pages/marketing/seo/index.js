import { html, LitElement, property, customElement } from 'lit-element';

@customElement('seo-marketing')
class main extends LitElement {
  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <div class="email-marketing">
        <div class="audience">
          <div style="display:flex;">
            <div class="email-marketingNav">
              <div class="email-marketingMenu">
                <div class="email-marketingMenuList">
                  <a href="" @click=${this.seoDashboard}>Dashboard</a>
                </div>
                <div class="email-marketingMenuList">
                  <a href="" @click=${this.seoKeywords}>Keywords</a>
                </div>
                <div class="email-marketingMenuList">
                  <a href="" @click=${this.linkBuilding}>Link Building</a>
                </div>
                <div class="email-marketingMenuList">
                  <a href="" @click=${this.hireExpert}>Hire an expert</a>
                </div>
              </div>
            </div>

            <div class="email-marketingBody"></div>
          </div>
        </div>

        
      </div>
    `;
  }
}
