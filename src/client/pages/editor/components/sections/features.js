import { html, LitElement, property, customElement } from 'lit-element';


@customElement('groovy-featuers-sec')
class main extends LitElement {

    @property()
    placeholder = 'Enter Text'

    @property()
    rows = '15'

    @property()
    cols = '500'

    @property()
    setPlaceholder(placeholder){
     this.placeholder = placeholder
    }

    @property()
    setRows(rows){
     this.rows = rows
    }

    @property()
    setCols(cols){
     this.cols = cols
    }

    

    // connectedCallback(){
    //   super.connectedCallback()
    // }
  render() {
    return html`

<section class="sections ">
                <!-- ADD SECTION BUTTON -->

                <!-- ADD SECTION BUTTON -->
                <br />
                <br />
                <div class="droppables container divarea">
                  <div class="gjumbotron text-center droppables">
                    <h1>Company</h1>
                    <p>We specialize in blablabla</p>
                  </div>

                  <form class="form-inline">
                    <div class="input-group">
                      <input
                        type="email"
                        class="form-control"
                        size="50"
                        placeholder="Email Address"
                        required
                      />
                      <div class="input-group-btn">
                        <button type="button" class="btn btn-danger">
                          Subscribe
                        </button>
                      </div>

                      

                    </div>
                  </form>

                </div>
                <br />
                <br />
                <br />
              </section>
      `;
  }
}
