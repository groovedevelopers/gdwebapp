import { html, LitElement, property, customElement } from 'lit-element';


@customElement('edit-brand')
class main extends LitElement {
  createRenderRoot() {
    return this;
  }

  closeS(){
    document.querySelector('.cep').style.display = 'none';
  }

  

  connectedCallback() {
    super.connectedCallback();
    
    
  }

  render() {
    return html`
       
   <div class="newp" >  
     
   <div class="newp-head">
   <b>Edit Brand</b>

   <a href="" @click=${this.closeS}>
    
        <img src="https://img.icons8.com/fluent/48/000000/close-window.png" style="float:right;"/>
     
    </a>

   </div>

   <hr>

   <form>
     <div class="form-group">
       <input type="text" class="form-control" placeholder="Name" />

     </div>

     <div class="form-group">
       <textarea class="form-control" placeholder="category description" ></textarea>

     </div>

     <div class="form-group">
       <input type="button" class="form-control" value="Submit" />

     </div>

   </form>



</div> 


    `;
  }
}
