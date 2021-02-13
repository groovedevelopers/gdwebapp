import { html, LitElement, property, customElement } from 'lit-element';


@customElement('new-sub')
class main extends LitElement {
  createRenderRoot() {
    return this;
  }

  closeS(){
    document.querySelector('.ns').style.display = 'none';
  }

  formData(event){
    event.preventDefault()

    
      const colorevent = new CustomEvent('colorform', {
        detail: {colorName:event.target.elements.colorName.value, color:event.target.elements.color.value},
        composed: true,
        bubbles: true,
      });
      window.dispatchEvent(colorevent);
   
  }

  connectedCallback() {
    super.connectedCallback();
   
    
  }

  render() {
    return html`
       
   <div class="newp">  
     
   <div class="newp-head">
   <b>New Sub Product</b>

   <a href="" @click=${this.closeS}>
    
        <img src="https://img.icons8.com/fluent/48/000000/close-window.png" style="float:right;"/>
     
    </a>

   </div>

   <hr>

   <form @submit=${this.formData}>
     <div class="form-group">
       <input type="text" name="colorName" class="form-control" placeholder="Color Name" />

     </div>

     <div class="form-group">
       <input type="color" name="color" class="form-control" placeholder="$1" />

     </div>

     <div class="form-group">
       <input type="submit"  class="form-control" value="Submit" />

     </div>

   </form>



</div> 


    `;
  }
}
