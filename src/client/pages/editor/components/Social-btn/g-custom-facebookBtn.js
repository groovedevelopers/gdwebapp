import { html, LitElement, property, customElement } from 'lit-element';
// import '../textarea/editor'



@customElement('groovy-custom-facebookbtn')
class main extends LitElement {
  @property()
  src = '';

  @property()
  size = 'small'

  @property()
  btnType = 'rounded'

  

  @property()
  setSrc(src) {
    this.src = src;
  }


  @property()
  setSmall(small) {
    this.small = small;
  }

  @property()
  setbtnType(btnType) {
    this.btnType = btnType;
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
    const btnClickEvent  =  new CustomEvent('facebook-settings', {

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
      


      <button @click=${this.settings} class=${`${this.size} ${this.btnType}`} src=${this.src} >  Facebook </button>
      

      

              <!-- jhngbshjvcjvkwhchwvgv -->

      

      <style>
        .rounded{
            border-radius: 25px;
            padding: 10px;
            box-shadow: 1px 5px #f1f1f1;
            background: #3b5998;
            color: white;
            font-weight: 40px; 
        }

        .square{
          display: block;
          padding: 10px;
          box-shadow: 1px 5px #f1f1f1;
          background: #3b5998;
          color: white;
          font-weight: 40px; 

        }

        .small{
          font-size:15px;

        }
        .medium{
          font-size:25px;

        }
        .large{
          font-size:35px;

        }

  

   
       
      </style>
    `;
  }
}
