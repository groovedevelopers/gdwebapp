import { html, LitElement, property, customElement } from 'lit-element';


@customElement('groovy-custom-embed')
class main extends LitElement {

    @property()
  embedcode =  '<iframe width="806" height="453" src="https://www.youtube.com/embed/PLYotsLtw78" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  src="https://www.youtube.com/embed/PLYotsLtw78"

  firstUpdated(){
      this.shadowRoot.querySelector('#code').innerHTML = this.embedcode
  }

  
    settings(event){
        const embedClickEvent  =  new CustomEvent('embed-settings', {
    
            composed: true,
            bubbles: true
        })
    
        window.dispatchEvent(embedClickEvent)
    
      }
    

  render() {
    return html`
        <!-- <iframe 
            width="806" 
            height="453" 
            src=${this.src} 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
        </iframe> -->

        <!-- ${html `${new DOMParser().parseFromString(this.embedcode, "text/html")}`} -->
<div id="code">

</div>


<style>
    .embed:focus{
        border: 2px solid blue;

    }
    .embed:not(:focus){
        border:none;
    }
</style>



        `;
  }
}
