import { html, LitElement, property, customElement } from 'lit-element';
// import '../textarea/editor'



@customElement('groovy-custom-audio')
class main extends LitElement {
  @property()
  src = '';
title = 'Enter Text';

  author = ''

  @property()
  setTitle(title) {
    this.title = title;
  }

  @property()
  setSrc(src) {
    this.src = src;
  }

  @property()
  setAuthor(author) {
    this.author = author;
  }

 

 


  firstUpdated(){
    this.addEventListener('removeAudionested', ()=> {
       


      const textevent = new CustomEvent('removeAudio', {
        detail: this.shadowRoot,
        composed: true,
        bubbles:true,
    })
    window.dispatchEvent(textevent)
    
    })
    
  }


  

  audioClick(event){
    
        
    const audioClickEvent  =  new CustomEvent('audio-settings', {

        composed: true,
        bubbles: true
    })

    window.dispatchEvent(audioClickEvent)


  }

  

  

  // connectedCallback(){
  //   super.connectedCallback()
  // }
  render() {
    return html`
      <div class="ttt"  >
      <audio controls @click=${this.audioClick}>
  <source src=${this.src} type="audio/mpeg">
Your browser does not support the audio element.
</audio>
      </div>
      

      

              <!-- jhngbshjvcjvkwhchwvgv -->

      

      <style>
        

        .ttt:active {
          border: 1px solid blue;
          
        }
        
       

  

   
       
      </style>
    `;
  }
}
