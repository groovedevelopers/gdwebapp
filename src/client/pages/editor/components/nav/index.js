import { html, LitElement, property, customElement } from 'lit-element';
import './navbarOne';
import './navbarTwo';
import './navbarThree';
import './navbarFour';
import './navbarFive';
import './navbarSix';

const stringToHTML = (str) => {
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, 'text/html');
  return doc.body.firstElementChild;
};

@customElement('navbar-main')
class main extends LitElement {
  currentnav = stringToHTML('<navbar-one></navbar-one>');

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener('sitenameChange', (event) => {
      this.shadowRoot.firstElementChild.sitename = event.detail.value;
    });

    window.addEventListener('navbtnNameChange', (event) => {
      this.shadowRoot.firstElementChild.navbtnname = event.detail.value;
    });

    window.addEventListener('navbtnUrlChange', (event) => {
      this.shadowRoot.firstElementChild.navbtnurl = event.detail.value;
    });

    window.addEventListener('cartsizeChange', (event) => {
      this.shadowRoot.firstElementChild.cartSize = event.detail.value;
    });

    window.addEventListener('navcolorChange', (event) => {
      this.shadowRoot.firstElementChild.navColor = event.detail.value;
    });

    window.addEventListener('mobilelogoChange', (event) =>{
      // alert('working')
      document.querySelector('navbar-one').sitename = event.detail.file
      // alert('zxdfcgvhbjn')
    })

    window.addEventListener('logoChange', (event) => {

      const logo = URL.createObjectURL(event.detail.file)
     
      this.shadowRoot.firstElementChild.logo = logo;

      const newLogoevent = new CustomEvent('newLogo', {
        detail:{state: true},
        bubbles: true,
        composed: true
      })
  
      window.dispatchEvent(newLogoevent)

    });

    window.addEventListener('logoRemove', (_) => {
      this.shadowRoot.firstElementChild.logo = ''

    });

    


    window.addEventListener('navChange', (event) => {
      this.currentnav = stringToHTML(event.detail.value);
      this.requestUpdate();

      // alert('zxdfcgvhbjn')
    });
  }
  render() {
    return html` ${this.currentnav} `;
  }
}
