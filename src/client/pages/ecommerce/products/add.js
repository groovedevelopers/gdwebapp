import { html, LitElement, property } from 'lit-element';
import { routerSubject$ } from '../../../../settings/util/page-router';
import '../../../components/footer';
import '../../../components/header';
import '../../../components/sidebar';
import { createProduct, getCategories } from '../../../../secure/firebase.config';
import { SubSink } from 'subsink';
import { switchMap, tap, map, filter } from 'rxjs/operators';

class ecommerce extends LitElement {
  createRenderRoot() {
    return this;
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
    
   


    console.log(valueFields)


    createProduct(valueFields)

    

  }


  subs = new SubSink();

  category$ = getCategories().pipe(tap((theCategory) => {this.category = theCategory}))
  
  // category$ = getCategoriesFromFirebase().pipe(tap((cat) => {this.category = cat;}),);

  @property()
  category = [];





  // uploadFile(event) {
  //   console.log(event);
  //   const file = event.target.files[0];

  //   const t = file.type.split("/").pop().toLowerCase();
  //   if (
  //     t !== "jpeg" &&
  //     t !== "jpg" &&
  //     t !== "png" &&
  //     t !== "bmp" &&
  //     t !== "gif"
  //   ) {
  //     return alert("only images are allowed");
  //   }

  //   const filePath = `images/products/${Date.now()}_${file.name}`;
  //   const fileRef = this.storage.ref(filePath);
  //   const task = this.storage.upload(filePath, file);

  //   this.uploadPercent$ = task.percentageChanges();

  //   this.subs.sink = task
  //     .snapshotChanges()
  //     .pipe(
  //       finalize(() =>
  //         fileRef
  //           .getDownloadURL()
  //           .toPromise()
  //           .then((data) => {
  //             const doc: ProductImageCollection = {
  //               imageLink: data,
  //               imagePath: filePath,
  //               timeMilliseconds: Date.now(),
  //             };

  //             return this.firestoreFacade.addToimageCollection(doc);
  //           })
  //           .then(() => {
  //             this.toastFacade.toastMessageSubject$.next("Image was uploaded");
  //           })
  //           .catch((error) => {
  //             this.errorFacade.errorSubject$.next(error);
  //           })
  //       )
  //     )
  //     .subscribe();
  // }

 

  connectedCallback() {
    super.connectedCallback();
    routerSubject$.next(false);
    this.subs.sink = this.category$.subscribe();
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

            <form class="addProduct"  @submit=${this.formData}>
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

                      ${this.category.map(
                    (item) => html`
                        <option>${item.catName}</option>
                        `,
                  )}
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

            

            <br /><br />
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('add-product', ecommerce);
