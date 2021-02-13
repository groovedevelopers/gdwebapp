import { html, LitElement, property } from 'lit-element';
import { routerSubject$ } from '../../../../settings/util/page-router';
import '../../../components/footer';
import '../../../components/header';
import '../../../components/sidebar';
import './brand/add';
import './brand/edit';
import { getBrands, deleteBrands } from '../../../../secure/firebase.config';
import { SubSink } from 'subsink';
import { switchMap, tap, map, filter } from 'rxjs/operators';
class ecommerce extends LitElement {
  createRenderRoot() {
    return this;
  }


  subs = new SubSink();

  brand$ = getBrands().pipe(tap((theBrand) => {this.brand = theBrand}))
  
  // category$ = getCategoriesFromFirebase().pipe(tap((cat) => {this.category = cat;}),);

  @property()
  brand = [];


  deleteBrand(id){
    deleteBrands(id);
  }



  abrand(){
    document.querySelector('.cp').style.display = 'block';
  }

  ebrand(){
    document.querySelector('.cep').style.display = 'block';
  }

  connectedCallback() {
    super.connectedCallback();
    routerSubject$.next(false);
    this.subs.sink = this.brand$.subscribe();
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
            <div class="commerceHead container-fluid">
              <a href="/commerce/product-manager">
                <button class="btn btn-outline-primary">Back</button>
              </a>

              <div class="commerceAtt">
                <a href="" @click=${this.abrand}>
                  <button class="btn btn-outline-dark">Add Brand</button>
                </a>

                
              </div>
            </div>
            <br /><br />

            Add Brands

            <div class="container">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>Brand</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                ${this.brand.map(
                    (item) => html`
                  <tr>
                    <td>${item.brandName}</td>
                    <td>${item.brandDesc}</td>
                    <td>${item.brandStatus}</td>
                    <td>
                      <a href="">
                        <button class="btn btn-outline-secondary" @click=${this.ebrand}>
                          <span class="fa fa-edit"></span>
                        </button>
                      </a>
                      <a href="" @click=${()=>this.deleteBrand(item.id) }>
                        <button class="btn btn-outline-danger">
                          <span class="fa fa-trash"></span>
                        </button>
                      </a>
                    </td>
                  </tr>
                  `,
                  )}
                </tbody>
              </table>
            </div>


            <br /><br />



            <new-brand class="cp"></new-brand>
            <edit-brand class="cep"></edit-brand>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('product-brands', ecommerce);
