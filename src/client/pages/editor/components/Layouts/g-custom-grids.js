import { html, LitElement, property, customElement } from 'lit-element';


@customElement('groovy-custom-grids')
class main extends LitElement {

   

    

  firstUpdated() {
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


      <div class="grid-container">
  <div class="grid-item droppables" >1</div>
  <div class="grid-item droppables">2</div>
  <div class="grid-item droppables">3</div>  
  <div class="grid-item droppables">4</div>
  <div class="grid-item droppables">5</div>
  <div class="grid-item droppables">6</div>  
  <div class="grid-item droppables">7</div>
  <div class="grid-item droppables">8</div>
  <div class="grid-item droppables">9</div>  
</div>


<style>
    .grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196F3;
  padding: 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
</style>



        `;
  }
}
