import { html, LitElement, property, customElement } from 'lit-element';


@customElement('groovy-custom-line')
class main extends LitElement {


    firstUpdated(){
        



          const lineevent = new CustomEvent('removeLinenested', {
            detail: this.shadowRoot,
            composed: true,
            bubbles:true,
        })
        this.dispatchEvent(lineevent)
    }

    linetoolbar(event){
        const lineClickEvent  =  new CustomEvent('line-settings', {

            composed: true,
            bubbles: true
        })
    
        window.dispatchEvent(lineClickEvent)
    }
  

  render() {
    return html`
        
<div class="line" @click=${this.linetoolbar}>
<div class="morespace"></div>
<hr>
<div class="morespace"></div>

</div>

<style>
    .line:hover{
        border: 2px solid blue;

    }
    hr{
        border: 1px solid
    }
</style>



        `;
  }
}
