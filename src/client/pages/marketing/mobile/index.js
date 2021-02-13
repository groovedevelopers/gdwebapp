import { html, LitElement, property, customElement } from 'lit-element';

@customElement('mobile-marketing')
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
        <div class="container">
          <div class="email-marketing-Head">
            <div class="email-marketing-Head1">
              <a href="" @click=${this.mobileDash}> Dashboard</a>
            </div>
            <div class="email-marketing-Head2">
              <a href="" @click=${this.mobileContact}>Contacts</a>
            </div>

            <div class="email-marketing-Head3">
              <a href="" @click=${this.mobileSchedules}>Schedules</a>
            </div>
          </div>
        </div>

        
      </div>
    `;
  }
}
