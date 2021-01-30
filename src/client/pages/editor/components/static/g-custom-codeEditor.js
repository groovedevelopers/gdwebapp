import { html, LitElement, property, customElement } from 'lit-element';
// import '../textarea/editor'



@customElement('groovy-custom-codeeditor')
class main extends LitElement {
  @property()
  code = html` `;

  

  @property()
  setCode(code) {
    this.code = code;
  }



  
 


  firstUpdated(){

    

    window.addEventListener('codePlace', (event)=> {
       
        this.shadowRoot.querySelector('#CodeArea').innerHTML = event.detail


    
    })

    
  }

  


  

  settings(event){
    const btnClickEvent  =  new CustomEvent('editor', {

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
      

<div id="CodeArea" @click=${this.settings}>
      ${this.code}
      </div>
      

      <style>
        div:hover{
border: 1px solid blue;
        }

        div:focus{
border: 1px solid blue;
        }
      </style>
      

   
    `;
  }
}
