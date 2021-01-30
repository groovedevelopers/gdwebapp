import { html, LitElement, property, customElement } from 'lit-element';

@customElement('nav-btn')
class main extends LitElement {
  createRenderRoot() {
    return this;
  }

  headerManager() {
    // alert('jjdjdj')
document.querySelector('.pagenav-toolbar').style.display = 'block'


  }


  connectedCallback() {
    super.connectedCallback();
    
    
  }

  render() {
    return html`
      <div class="header-edit-btn"></div>
      <div class="editHeaderBtn">
                <button @click=${this.headerManager} class="  btn btn-outline-dark">
                  Edit Header
                </button>
              </div>
<!-- 
              .pageConfig-modal {
		display: none; /* Hidden by default */
		position: fixed; /* Stay in place */
		z-index: 1; /* Sit on top */
		padding-top: 100px; /* Location of the box */
		left: 0;
		top: 0;
		width: 100%; /* Full width */
		height: 100%; /* Full height */
		overflow: auto; /* Enable scroll if needed */
		background-color: rgb(0,0,0); /* Fallback color */
		background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
	  } -->



              
    `;
  }
}
