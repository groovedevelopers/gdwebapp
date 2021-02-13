import { html, LitElement, property } from 'lit-element';
import { routerSubject$ } from '../../../../settings/util/page-router';
import '../../../components/footer';
import '../../../components/header';
import '../../../components/sidebar';
import { getProductFromFirebase, deleteProduct } from '../../../../secure/firebase.config';
import { SubSink } from 'subsink';
import { switchMap, tap, map, filter } from 'rxjs/operators';
// import { BehaviorSubject, combineLatest } from 'rxjs';

// import 'elix/define/SlidingPages.js';
class ecommerce extends LitElement {
  createRenderRoot() {
    return this;
  }

  subs = new SubSink();

  products$ = getProductFromFirebase().pipe(tap((theProducts) => {this.products = theProducts}))
  
  // category$ = getCategoriesFromFirebase().pipe(tap((cat) => {this.category = cat;}),);

  @property()
  products = [];


  deleteProd(id){
    deleteProduct(id);
  }


 

 
  

//   selectall(){  
//     var ele=document.getElementsByName('chk');  

    
//     for(var i=0; i<ele.length; i++){  
//         if(ele[i].type=='checkbox') 

//             {ele[i].checked=true; 
//               document.querySelector('.commerceAtt').style.display = 'block';
//               document.querySelector('.edit').style.display = 'none';
            
//             }
//             else if ( ele[i].checked=true )  {
//               ele[i].checked=false;  
//               document.querySelector('.commerceAtt').style.display = 'none';
//             }
            
//     }  

   
// } 

// chked(event){
 
//   if(event.target.checked == true){

    
//     document.querySelector('.commerceAtt').style.display = 'block';
    
//   }
//   else{
//     document.querySelector('.commerceAtt').style.display = 'none';
//   }


// }

// tbody(){
//   var ele=document.getElementsByName('chk'); 
//   ele == 'checked';
//   // document.querySelector('.commerceAtt').style.display = 'block';

  
// }




  connectedCallback() {
    super.connectedCallback();
    routerSubject$.next(false);
    this.subs.sink = this.products$.subscribe();
  }

  disconnectedCallback() {
    this.subs.unsubscribe();
    super.disconnectedCallback();
  }

  render() {
    return html`
      <div class="ecommerceArea">
        <header-component></header-component>

        <div class="dashboard-body">
          <sidebar-component style="width:200px;"></sidebar-component>

          <div class="ecommerceBody">

          <div class="commerceHead container-fluid">
              <a href="/commerce/product-manager">
                <button class="btn btn-outline-primary">Back</button>
              </a>

              <div class="commerceAtt" >


                <a href="/commerce/add-product"  class="edit"  >
                    <button class="btn btn-outline-dark">Add Product</button>
                </a>

              </div>
            </div>



            <br /><br />

            All product
            <div class="container">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th></th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Current Stock</th>
                    <th>Category</th>
                  </tr>
                </thead>
                <tbody>
                ${this.products.map(
                    (item) => html`
                  <tr>
                    <td>
                    <a href=${`/commerce/edit-product?id=${item.id}`} >
                          <span class="fa fa-edit" style="font-size:20px; "></span>
                      </a>
                      &nbsp;
                      <a href="" @click=${()=>this.deleteProd(item.id) } >
                          <span class="fa fa-trash" style="font-size:20px; color:red"></span>
                      </a>
                    </td>
                    <td>${item.productImage}</td>
                    <td>${item.productName}</td>
                    <td>${item.productprice}</td>
                    <td>${item.stock}</td>
                    <td>${item.productCat}</td>
                  </tr>
                  `,
                  )}
                </tbody>
              </table>
            </div>

            <br /><br />
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('all-product', ecommerce);
