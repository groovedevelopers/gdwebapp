import { html, LitElement, property, customElement } from 'lit-element';

import './editor';
@customElement('groovy-custom-textarea')
class main extends LitElement {

    @property()
    text = 'Enter Text'

    

    @property()
    setText(text){
     this.text = text
    }

    

    firstUpdated(){
    
      this.addEventListener('removeTextareanested', ()=> {
       


        const textevent = new CustomEvent('removeTextarea', {
          detail: this.shadowRoot,
          composed: true,
          bubbles:true,
      })
      window.dispatchEvent(textevent)
      
      })
        // console.log(event.target)


        

    }


    

    // connectedCallback(){
    //   super.connectedCallback()
    // }
  render() {
    return html`
    <editor-toolbar></editor-toolbar>

      
      `;
  }
}
