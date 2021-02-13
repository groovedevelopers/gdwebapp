import { html, LitElement, property } from 'lit-element';
import { routerSubject$ } from '../../../../settings/util/page-router';
import '../../../components/footer';
import '../../../components/header';
import '../../../components/sidebar';
import './gift/add';
import './gift/edit';
import { getGiftcard, deletegiftCard } from '../../../../secure/firebase.config';
import { SubSink } from 'subsink';
import { switchMap, tap, map, filter } from 'rxjs/operators';

class ecommerce extends LitElement {
  createRenderRoot() {
    return this;
  }

  subs = new SubSink();

  giftCard$ = getGiftcard().pipe(tap((theGiftCard) => {this.giftCard = theGiftCard}))
  
  // category$ = getCategoriesFromFirebase().pipe(tap((cat) => {this.category = cat;}),);

  @property()
  giftCard = [];


  deleteCard(id){
    deletegiftCard(id);
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
    this.subs.sink = this.giftCard$.subscribe();
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
              <a href="javascript:history.go(-1)">
                <button class="btn btn-outline-primary">Back</button>
              </a>

              <div class="commerceAtt">
                <a href="" @click=${this.acat}>
                  <button class="btn btn-outline-dark">Add Gift Card</button>
                </a>

                
              </div>
            </div>
            <br /><br />

           

            <div class="container">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>Gift Card</th>
                    <th>Initial Value</th>
                    <th>Expiration Date</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                ${this.giftCard.map(
                    (item) => html`
                  <tr>
                    <td>${item.cardCode}</td>
                    <td>${item.cardValue}</td>
                    <td>${item.validTill}</td>
                    <td>${item.catStatus}</td>
                    <td>
                      <a href="">
                        <button class="btn btn-outline-secondary" @click=${this.ecat}>
                          <span class="fa fa-edit"></span>
                        </button>
                      </a>
                      <a href="" @click=${()=>this.deleteCard(item.id) }>
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



            <new-card class="cp"></new-card>
            <edit-card class="cep"></edit-card>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('gift-cards', ecommerce);
