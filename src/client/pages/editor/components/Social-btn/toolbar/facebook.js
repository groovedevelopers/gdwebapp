import { html, LitElement, property, customElement } from 'lit-element';

@customElement('facebook-toolbar')
class main extends LitElement {
  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    // document.querySelector('url')
  }

  removebtn(event) {
    this.addEventListener('removeBtnnested', () => {
      const btnevent = new CustomEvent('removeBtn', {
        detail: this.shadowRoot,
        composed: true,
        bubbles: true,
      });
      window.dispatchEvent(btnevent);
    });
  }

  Facebooktools() {
    document.querySelector('.facebookToolbar').style.display = 'block';
    
  }

  closeFacebooktools() {
    document.querySelector('.facebookToolbar').style.display = 'none';
  }

  closebtn() {
    document.querySelector('.facebookbtn').style.display = 'none';
  }

  url(event) {
    //   alert('ttttttttt')

    const  srcevent = new CustomEvent('facebookSrcChange', {
        detail: {value:event},
        composed: true,
        bubbles: true
    })

    window.dispatchEvent(srcevent)
  }

  btnSize(event) {
    //   alert('ttttttttt')

    const  facebookevent = new CustomEvent('facebookBtnChange', {
        detail: {value:event},
        composed: true,
        bubbles: true
    })

    window.dispatchEvent(facebookevent)
  }

  btnType(event) {
    //   alert('ttttttttt')

    const  facebooktypeevent = new CustomEvent('facebookTypeChange', {
        detail: {value:event},
        composed: true,
        bubbles: true
    })

    window.dispatchEvent(facebooktypeevent)
  }

  connectedCallback() {
    super.connectedCallback();
    // alert('i ran')
    window.addEventListener('open-facebook-toolbar', (event) => {
      this.Facebooktools();

      event.stopPropagation();
    });

    // window.addEventListener('newVideo', (event) => {
    //     this.noImg = !event.detail.state
    //     document.querySelector('.testttt').style.display = 'block'

    // })

    window.addEventListener('facebook-settings', (event) => {
      document.querySelector('.facebookbtn').style.display = 'block';
    });
  }

  render() {
    return html`
      <div class="facebookToolbar toolbar" style="display:none">
        <i class="close fa fa-close" @click=${this.closeFacebooktools}></i>

        <h4 class="text-center">Facebook Button</h4>
        <hr />

        <div class="container">
         

          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Clickthrough URL"
              aria-label="Username"
              aria-describedby="basic-addon1"
              id="url"
              @input=${(event) => {this.url(event.target.value)}} 
            />
           
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect1">Button Size</label>
            <select class="form-control" id="exampleFormControlSelect1" @change=${(event) => {this.btnSize(event.target.value)}} >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          <div class="form-group">
            <label for="btnType">Button Design</label>
            <select class="form-control" id="btnType" @change=${(event) => {this.btnType(event.target.value)}}>
              <option value="rounded">Rounded</option>
              <option value="square">Square</option>
            </select>
          </div>
        </div>
      </div>
      <style>
        .line1 {
          border: 1px solid black;
        }
        .line2 {
          border: 2px solid black;
        }
        .line3 {
          border: 3px solid black;
        }
        .line4 {
          border: 4px solid black;
        }
      </style>

      <div class="facebookbtn hoverSetBlock" style="display:none">
        &nbsp;
        <i class="close fa fa-close" @click=${this.closebtn}></i>
        <br />
        &nbsp;

        <a
          data-toggle="esec"
          title="Edit Section"
          data-placement="bottom"
          @click=${this.Facebooktools}
          ><i class="fa fa-edit" style="font-size:20px; color:black;"></i></a
        >&nbsp;&nbsp;

        <a
          data-toggle="deleteSec"
          title="Delete"
          data-placement="bottom"
          @click=${this.removebtn}
          ><i class="fa fa-trash" style="font-size:20px; color:red;"></i></a
        >&nbsp;
      </div>
    `;
  }
}
