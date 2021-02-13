import { html, LitElement, property } from 'lit-element';
import { routerSubject$ } from '../../../../settings/util/page-router';
import '../../../components/footer';
import '../../../components/header';
import '../../../components/sidebar';
import './category/add';
import './category/edit';
import { getCategories, deleteCategory } from '../../../../secure/firebase.config';
import { SubSink } from 'subsink';
import { switchMap, tap, map, filter } from 'rxjs/operators';

class ecommerce extends LitElement {
  createRenderRoot() {
    return this;
  }

  subs = new SubSink();

  category$ = getCategories().pipe(tap((theCategory) => {this.category = theCategory}))
  
  // category$ = getCategoriesFromFirebase().pipe(tap((cat) => {this.category = cat;}),);

  @property()
  category = [];


  deleteCat(id){
    deleteCategory(id);
  }



  acat(){
    document.querySelector('.cp').style.display = 'block';
  }

  ecat(){
    document.querySelector('.cep').style.display = 'block';
  }

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
            <div class="commerceHead container-fluid">
              <a href="/commerce/product-manager">
                <button class="btn btn-outline-primary">Back</button>
              </a>

              <div class="commerceAtt">
                <a href="" @click=${this.acat}>
                  <button class="btn btn-outline-dark">Add Category</button>
                </a>

                
              </div>
            </div>
            <br /><br />

            Add Categories

            <div class="container">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Desc</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                ${this.category.map(
                    (item) => html`
                  <tr>
                    <td>${item.catName}</td>
                    <td>${item.catDesc}</td>
                    <td>${item.catStatus}</td>
                    <td>
                      <a href="">
                        <button class="btn btn-outline-secondary" @click=${this.ecat}>
                          <span class="fa fa-edit"></span>
                        </button>
                      </a>
                      <a href="" @click=${()=>this.deleteCat(item.id) }>
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



            <new-cat class="cp"></new-cat>
            <edit-cat class="cep"></edit-cat>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('product-categories', ecommerce);
