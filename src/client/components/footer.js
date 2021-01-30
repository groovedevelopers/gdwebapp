import { html, LitElement } from 'lit-element';


class footer extends LitElement {
  createRenderRoot() {
    return this;
  }

  connectedCallback(){
    super.connectedCallback()
    
  }
  render() {
    return html`
<div class="footer-wrap pd-20 mb-20 card-box">
				 All rights reserved By <a href="https://github.com/dropways" target="_blank">Ankit Hingarajiya</a>
			</div>
		</div>
    </div>
    `;
  }
}

customElements.define('footer-component', footer);