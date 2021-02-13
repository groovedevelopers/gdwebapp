import { html, LitElement, property } from 'lit-element';
import { routerSubject$, queryParamMapper, queryString$ } from '../../../../settings/util/page-router';
import '../../../components/footer';
import '../../../components/header';
import '../../../components/sidebar';
import { createProduct, subProduct, getOneProductFromFirebase } from '../../../../secure/firebase.config';
import './add/newp';
import './add/parea';
import { take } from 'rxjs/operators';
import { SubSink } from 'subsink';
// import { switchMap, tap, map, filter } from 'rxjs/operators';
// import { BehaviorSubject, combineLatest } from 'rxjs';

// import 'elix/define/SlidingPages.js';
class ecommerce extends LitElement {
  createRenderRoot() {
    return this;
  }

  subs = new SubSink();


  productId

  products = {};

  formData(event) {
    event.preventDefault();
    // console.log(event.target.elements)

    const values = Array.from(event.target.elements).map((item) => ({
      name: item.name,
      value: item.value,
    }));
    values.pop();

    const valueFields = {};

    for (const items in values) {
      const { name, value } = values[items];
      valueFields[name] = value;
    }

    console.log(valueFields);

    createProduct(valueFields);
  }



  subProd() {
    document.querySelector('.sub').style.display = 'block';
    document.querySelector('.sp').classList.add('active')
    document.querySelector('.edit').style.display = 'none';
    document.querySelector('.ep').classList.remove('active')
    document.querySelector('.stock').style.display = 'none';
    document.querySelector('.es').classList.remove('active')
  }

  editProd() {
    document.querySelector('.sub').style.display = 'none';
    document.querySelector('.sp').classList.remove('active')
    document.querySelector('.edit').style.display = 'block';
    document.querySelector('.ep').classList.add('active')
    document.querySelector('.stock').style.display = 'none';
    document.querySelector('.es').classList.remove('active')
  }

  editStock() {
    document.querySelector('.sub').style.display = 'none';
    document.querySelector('.sp').classList.remove('active')
    document.querySelector('.edit').style.display = 'none';
    document.querySelector('.ep').classList.remove('active')
    document.querySelector('.stock').style.display = 'block';
    document.querySelector('.es').classList.add('active')
  }

  createSub(){
    document.querySelector('.ns').style.display = 'block';
  }

  async connectedCallback() {
    super.connectedCallback();
    routerSubject$.next(false);
    
    const id  =  await queryString$.pipe(queryParamMapper('id'),take(1)).toPromise()
    this.productId = id

    this.subs.sink = getOneProductFromFirebase(id).subscribe(items => {
      this.products = items
      document.querySelector('product-area').products = items.subproduct
   
    })


    this.addEventListener('deleteSubProd', (event) => {
      this.products.subproduct.splice(event.detail, 1)
      subProduct (id,{subproduct: this.products.subproduct})
    })
   

    
    window.addEventListener('colorform', (event) => {
      event.detail;
      const subproduct =[event.detail]

      if(!this.products.subproduct){

        this.products.subproduct = []
      }

      this.products.subproduct = [ ...this.products.subproduct, ...subproduct ]

      // console.log(this.products.subproduct)
    
      subProduct (id,{subproduct: this.products.subproduct})


    
          event.stopPropagation();
        });
 
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.subs.unsubscribe();
  }

  render() {
    return html`
      <div class="ecommerceArea">
        <header-component></header-component>

        <div class="dashboard-body">
          <sidebar-component></sidebar-component>

          <div class="ecommerceBody">
            <a href="/commerce/all-product">
              <button class="btn btn-outline-primary">Back</button>
            </a>

            <br />


            <div class="edit-tab">
                <span @click=${this.subProd} class="edit-tab-h1 sp active">
                  Sub Products</span
                >
                <span @click=${this.editProd} class="edit-tab-h1 ep">
                  Edit Product</span
                >
                <span @click=${this.editStock} class="edit-tab-h1 es">
                  Edit Stock</span
                >
              </div>
              <hr>



              <div class="sub">

                  <button class="btn btn-outline-primary" @click=${this.createSub}>Create New Sub-Product +</button>

                  <new-sub class="ns"></new-sub>

                  <br><br>

                  <product-area ></product-area>
              </div>

              

            <form class="addProduct edit" style="display: none;" @submit=${this.formData}>
              <!-- <div class="h1">Edit product</div> -->

              

              <div class="container ">
                
                    <div class="form-gorup">
                      <!-- <label for="productName">Product Name</label> -->
                      <input
                        type="text"
                        class="form-control"
                        id="productName"
                        placeholder="Product Name"
                        name="productName"
                        required
                      />
                    </div>
                  

                  
                    <div class="form-gorup">
                      <!-- <label for="productCat">Product Category</label> -->
                      <select
                        class="form-control"
                        name="productCat"
                        required
                        id="productCat"
                      >
                        <option>Product Category</option>
                        <optgroup></optgroup>
                        <option>test1</option>
                        <option>test2</option>
                      </select>
                    </div>
                  

                  
                    <div class="form-gorup">
                      <!-- <label for="productsku">Product SKU</label> -->
                      <input
                        type="text"
                        class="form-control"
                        id="productprice"
                        placeholder="Product Price"
                        name="productprice"
                        required
                      />
                    </div>
                  

                  
                    <div class="form-gorup">
                      <!-- <label for="productsku">Product SKU</label> -->
                      <input
                        type="text"
                        class="form-control"
                        id="salesprice"
                        placeholder="Sale Price"
                        name="salesprice"
                        required
                      />
                    </div>
                  

                 
                    <div class="form-gorup">
                      <!-- <label for="productsku">Product SKU</label> -->
                      <input
                        type="text"
                        class="form-control"
                        id="vat"
                        placeholder="Vat"
                        name="vat"
                        required
                      />
                    </div>
                

                  
                    <div class="form-gorup">
                      <!-- <label for="productsku">Product SKU</label> -->
                      <input
                        type="text"
                        class="form-control"
                        id="weight"
                        placeholder="Product Weight"
                        name="weight"
                        required
                      />
                    </div>
                  

                  
                    <div class="form-gorup">
                      <!-- <label for="productsku">Product SKU</label> -->

                      <textarea
                        class="form-control"
                        required
                        name="desc"
                        placeholder="Product Description"
                      ></textarea>
                    </div>
                 
                </div>

                <br />
                <div class="form-group">
                  <button type="submit" class="btn btn-primary">
                    Add Products
                  </button>
                  <br /><br />
                </div>
            </form>



            <form class="addProduct stock" style="display: none;" @submit=${this.formData}>
              

              

              <div class="container ">
                
                    <div class="form-gorup">
                      <!-- <label for="productName">Product Name</label> -->
                      <input
                        type="text"
                        class="form-control"
                        id="minOrder"
                        placeholder="Minimum Order"
                        name="minOrder"
                        required
                      />
                    </div>
                  


                    <div class="form-gorup">
                      <!-- <label for="productsku">Product SKU</label> -->
                      <input
                        type="text"
                        class="form-control"
                        id="maxOrder"
                        placeholder="Maximum Order"
                        name="maxOrder"
                        required
                      />
                    </div>


                    <div class="form-gorup">
                      <!-- <label for="productCat">Product Category</label> -->
                      <select
                        class="form-control"
                        name="bestSellers"
                        required
                        id="bestSellers"
                      >
                        <option>Best Sellers</option>
                        <optgroup></optgroup>
                        <option>test1</option>
                        <option>test2</option>
                      </select>
                    </div>

                    <div class="form-gorup">
                      <!-- <label for="productCat">Product Category</label> -->
                      <select
                        class="form-control"
                        name="status"
                        required
                        id="status"
                      >
                        <option>status</option>
                        <optgroup></optgroup>
                        <option>test1</option>
                        <option>test2</option>
                      </select>
                    </div>

                    <div class="form-gorup">
                      <!-- <label for="productCat">Product Category</label> -->
                      <select
                        class="form-control"
                        name="feature"
                        required
                        id="feature"
                      >
                        <option>Feature</option>
                        <optgroup></optgroup>
                        <option>test1</option>
                        <option>test2</option>
                      </select>
                    </div>

                    <div class="form-gorup">
                      <!-- <label for="productCat">Product Category</label> -->
                      <select
                        class="form-control"
                        name="preOrder"
                        required
                        id="preOrder"
                      >
                        <option>Pre Order</option>
                        <optgroup></optgroup>
                        <option>test1</option>
                        <option>test2</option>
                      </select>
                    </div>

                    <div class="form-gorup">
                      <!-- <label for="productCat">Product Category</label> -->
                      <select
                        class="form-control"
                        name="newArrival"
                        required
                        id="newArrival"
                      >
                        <option>New Arrival</option>
                        <optgroup></optgroup>
                        <option>test1</option>
                        <option>test2</option>
                      </select>
                    </div>

                    <div class="form-gorup">
                      <!-- <label for="productCat">Product Category</label> -->
                      <select
                        class="form-control"
                        name="sales"
                        required
                        id="sales"
                      >
                        <option>Put item on sales</option>
                        <optgroup></optgroup>
                        <option>test1</option>
                        <option>test2</option>
                      </select>
                    </div>


                </div>

                <br />
                <div class="form-group">
                  <button type="submit" class="btn btn-primary">
                    Add Products
                  </button>
                  <br /><br />
                
            </form>

            <br /><br />
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('edit-product', ecommerce);
