import { html, LitElement, property, customElement } from 'lit-element';
import '../textarea/editor'



@customElement('groovy-custom-image')
class main extends LitElement {
  @property()
  src =
    '';
  width = '700px';
  height = '';

  text = 'Enter Text';

  @property()
  setWidth(width) {
    this.width = width;
  }

  @property()
  setSrc(src) {
    this.src = src;
  }

  @property()
  setHeight(height) {
    this.height = height;
  }

  @property()
  setText(text) {
    this.text = text;
  }

  firstUpdated() {
   

  }

  filter = 170

  @property()
  styles = { fiter: 'brightness(250%)'};

  @property()
  brightness = 100

  @property()
  contrast = 100

  @property()
  dropshadow = ''

  @property()
  blur = 0

  @property()
  saturate = 100


  firstUpdated(){
    this.addEventListener('removeTextareanested', ()=> {
       


      const textevent = new CustomEvent('removeTextarea', {
        detail: this.shadowRoot,
        composed: true,
        bubbles:true,
    })
    window.dispatchEvent(textevent)
    
    })
    
  }


  

  imageClick(event){
    // const imgclick = this.shadowRoot.querySelector('.editImage');

    // console.log(this.shadowRoot.querySelector('.editImage'))

    // imgclick.classList.add('edit-custom-img');
    
        
    const imgClickEvent  =  new CustomEvent('image-settings', {

        composed: true,
        bubbles: true
    })

    window.dispatchEvent(imgClickEvent)


  }

  

  

  // connectedCallback(){
  //   super.connectedCallback()
  // }
  render() {
    return html`
      <div class="ttt" @click=${this.imageClick} >
       <a>  <img src=${this.src} width=${this.width} height=${this.height}  
       .style=${`filter: contrast(${this.contrast}%)  blur(${this.blur}px) saturate(${this.saturate}%) brightness(${this.brightness}%); 

       `} /> </a>
        <editor-toolbar ></editor-toolbar>
        <br>
      <br>
      </div>
      

      

              <!-- jhngbshjvcjvkwhchwvgv -->

      

      <style>
        .editor-toolbar{

          border: none;

        }


        .text-block {
          /* position: absolute; */
          background-color: transparent;
          color: black;
        }

        .ttt:active {
          border: 1px solid blue;
          
        }
        
        /* img {
        filter: brightness(170%);
        } */

  

   
       
      </style>
    `;
  }
}
