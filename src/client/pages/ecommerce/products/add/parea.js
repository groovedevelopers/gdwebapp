import { html, LitElement, property, customElement } from 'lit-element';
import { subProduct } from '../../../../../secure/firebase.config';
import { SubSink } from 'subsink';
@customElement('product-area')
class main extends LitElement {
  createRenderRoot() {
    return this;
  }

  

  subs = new SubSink();

  
  // category$ = getCategoriesFromFirebase().pipe(tap((cat) => {this.category = cat;}),);

  @property()
  products = [];



  closeS() {
    document.querySelector('.ns').style.display = 'none';
  }

  deleteSub(index){
    const subevent = new CustomEvent('deleteSubProd', {
      detail: index,
      composed: true,
      bubbles: true,
    });
    this.dispatchEvent(subevent);
  }

  connectedCallback() {
    super.connectedCallback();

    // this.subs.sink = this.subproducts$.subscribe();

    

    
  }

  disconnectedCallback() {
    this.subs.unsubscribe();
    super.disconnectedCallback();
  }

  render() {
    return html`

${this.products?.map(
                    (item, index) => html`
      <div class="parea">
        
          <button @click=${() => {this.deleteSub(index)}} class="btn btn-outline-danger" >
            DELETE ITEM <i class="fa fa-trash"></i>
          </button>
        

        <div class="parea-hero">
          <div class="p-hero1">
          <a href=""> Text <i class="fa fa-edit" style="font-size:20px;"></i></a>
          </div>

          <div class="p-hero2">
              <a href=""> Image <i class="fa fa-image"></i> </a></div>
        </div>

        Color Name: ${item.colorName}


        <div class="parea-b">
            <div class="parea-b1">
            <span class="dot">1</span>
            <!-- <span class="dot"> <i class="fa fa-edit"></i> </span> -->
            Input Size stock

            </div>
            <div class="parea-b2">
                <hr>
            </div>

            <div class="parea-b3">
            <!-- <span class="dot">2</span> -->
            <span class="dot"> <i class="fa fa-edit"></i> </span>
                Done

            </div>

        </div>

        <form style="display:flex;">
            <input class="form-control" style="width:40px; flex:1;" type="text">
            &nbsp;
            <input class="form-control" style="width:40px; flex:1;" type="text">
            &nbsp;
            <input class="form-control" style="width:40px; flex:1;" type="text">
            &nbsp;
            <input class="form-control" style="width:40px; flex:1;" type="text">
            &nbsp;
            <input class="form-control" style="width:40px; flex:1;" type="text">
            &nbsp;
            <input class="form-control" style="width:40px; flex:1;" type="text">
            &nbsp;
            <input class="form-control" style="width:40px; flex:1;" type="text">
            &nbsp;
            <input class="form-control" style="width:40px; flex:1;" type="text">
            &nbsp;
            <input class="form-control" style="width:40px; flex:1;" type="text">
            &nbsp;
            <input class="form-control" style="width:40px; flex:1;" type="text">
            
        </form>

      </div>
      <br>
      `,
                  )}
      


    `;
  }
}
