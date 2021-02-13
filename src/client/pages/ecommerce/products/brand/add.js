import { html, LitElement, property, customElement } from 'lit-element';
import { createBrands } from '../../../../../secure/firebase.config';

@customElement('new-brand')
class main extends LitElement {
  createRenderRoot() {
    return this;
  }

  closeS(){
    document.querySelector('.cp').style.display = 'none';
  }

  formData(event){
    event.preventDefault()
    // console.log(event.target.elements)
   
    
    const values = Array.from(event.target.elements).map(item => ({name:item.name , value: item.value}))
     values.pop()
   
    const valueFields = {}

    for(const items in values){

  
      const {name, value } = values[items]
      valueFields[name] = value
    }

    createBrands(valueFields)
  }

  

  connectedCallback() {
    super.connectedCallback();
    
    
  }

  render() {
    return html`
       
   <div class="newp" >  
     
   <div class="newp-head">
   <b>Add Brand</b>

   <a href="" @click=${this.closeS}>
    
        <img src="https://img.icons8.com/fluent/48/000000/close-window.png" style="float:right;"/>
     
    </a>

   </div>

   <hr>

   <form @submit=${this.formData}>
     <div class="form-group">
       <input type="text" class="form-control" name="brandName" placeholder="Name" />

     </div>

     <div class="form-group">
       <select class="form-control" name="brandStatus" >
         <option>Status</option>
         <optgroup></optgroup>
         <option value="active">Active</option>
         <option value="notactive">Not Active</option>
       </select>

     </div>

     <div class="form-group">
       <textarea class="form-control" name="brandDesc" placeholder="Brand Description" ></textarea>

     </div>

     <div class="form-group">
       <input type="submit" @click=${this.closeS} class="form-control" value="Submit" />

     </div>

   </form>



</div> 


    `;
  }
}
