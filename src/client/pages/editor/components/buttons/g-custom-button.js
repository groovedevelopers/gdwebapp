import { html, LitElement, property, customElement } from 'lit-element';
import '../textarea/editor'



@customElement('groovy-custom-button')
class main extends LitElement {
  @property()
  src = '';
  text = 'Text Here';

  

  @property()
  setSrc(src) {
    this.src = src;
  }


  @property()
  setText(text) {
    this.text = text;
  }

  firstUpdated() {
   

  }

 


  firstUpdated(){
    this.addEventListener('removeBtnnested', ()=> {
       


      const textevent = new CustomEvent('removeBtn', {
        detail: this.shadowRoot,
        composed: true,
        bubbles:true,
    })
    window.dispatchEvent(textevent)
    
    })
    
  }


  

  settings(event){
    const btnClickEvent  =  new CustomEvent('button-settings', {

        composed: true,
        bubbles: true
    })

    window.dispatchEvent(btnClickEvent)

  }

  

  

  // connectedCallback(){
  //   super.connectedCallback()
  // }
  render() {
    return html`
      


      <button @click=${this.settings} src=${this.src} > ${this.text}  </button>
      

      

              <!-- jhngbshjvcjvkwhchwvgv -->

      

      <style>
        button{
            border-radius: 25px;
            padding: 10px;
            box-shadow: 1px 5px #f1f1f1;
            background: #fff;
        }

  

   
       
      </style>
    `;
  }
}
