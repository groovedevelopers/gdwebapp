import { html, LitElement, property, customElement } from 'lit-element';


@customElement('groovy-custom-spacer')
class main extends LitElement {


  render() {
    return html`


      <div class="spacer"></div>


<style>
:host{
    flex: 1;
    
    border:5px solid green;
    
    /* width:100%; */

}
.spacer {
    width:100%;
}

/* .spacer:active{
    border:1px solid blue;
} */
</style>



        `;
  }
}
