import { html, LitElement, property, customElement } from 'lit-element';


@customElement('edit-card')
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
     <b>Add Gift Card</b>
  
     <a href="" @click=${this.closeS}>
      
          <img src="https://img.icons8.com/fluent/48/000000/close-window.png" style="float:right;"/>
       
      </a>
  
     </div>
  
     <hr>
  
     <form @submit=${this.formData}>
       <div class="form-group">
         <input type="text" class="form-control" name="cardCode" placeholder="Name" />
  
       </div>
       <div class="form-group">
         <input type="text" class="form-control" name="cardValue" placeholder="$10.00" />
  
       </div>
       <div class="form-group">
          <div class="radio">
          <label><input type="radio" class="form-control" name="validTill"  checked>No expiration date</label>
          </div>
          <div class="radio">
          <label><input type="radio" class="form-control" name="validTill" @change=${this.expDate}>Set expiration date</label>
          </div>
  
          <input type="date" class="form-control dateArea" style="display:none">
  
       </div>
  
       <div class="form-group">
         <select class="form-control" name="catStatus" >
           <option>Status</option>
           <optgroup></optgroup>
           <option value="active">Active</option>
           <option value="notactive">Not Active</option>
         </select>
  
       </div>
  
       
  
       <div class="form-group">
         <input type="submit" @click=${this.closeS} class="form-control" value="Submit" />
  
       </div>
  
     </form>
  
  
  
  </div> 

    `;
  }
}
