import { html, LitElement, property, customElement } from 'lit-element';

@customElement('instagram-toolbar')
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

  Instagramtools() {
    document.querySelector('.instagramToolbar').style.display = 'block';
    
  }

  closeInstagramtools() {
    document.querySelector('.instagramToolbar').style.display = 'none';
  }

  closebtn() {
    document.querySelector('.instagrambtn').style.display = 'none';
  }

  url(event) {
    //   alert('ttttttttt')

    const  instagramsrcevent = new CustomEvent('instagramSrcChange', {
        detail: {value:event},
        composed: true,
        bubbles: true
    })

    window.dispatchEvent(instagramsrcevent)
  }

  btnSize(event) {
    //   alert('ttttttttt')

    const  instagramevent = new CustomEvent('instagramBtnChange', {
        detail: {value:event},
        composed: true,
        bubbles: true
    })

    window.dispatchEvent(instagramevent)
  }

  btnType(event) {
    //   alert('ttttttttt')

    const  instagramtypeevent = new CustomEvent('instagramTypeChange', {
        detail: {value:event},
        composed: true,
        bubbles: true
    })

    window.dispatchEvent(instagramtypeevent)
  }

  connectedCallback() {
    super.connectedCallback();
    // alert('i ran')
    window.addEventListener('open-instagram-toolbar', (event) => {
      this.Instagramtools();

      event.stopPropagation();
    });

    // window.addEventListener('newVideo', (event) => {
    //     this.noImg = !event.detail.state
    //     document.querySelector('.testttt').style.display = 'block'

    // })

    window.addEventListener('instagram-settings', (event) => {
      document.querySelector('.instagrambtn').style.display = 'block';
    });
  }

  render() {
    return html`
      <div class="instagramToolbar toolbar" style="display:none">
        <i class="close fa fa-close" @click=${this.closeInstagramtools}></i>

        <h4 class="text-center">Instagram Button</h4>
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
      

      <div class="instagrambtn hoverSetBlock" style="display:none">
        &nbsp;
        <i class="close fa fa-close" @click=${this.closebtn}></i>
        <br />
        &nbsp;

        <a
          data-toggle="esec"
          title="Edit Section"
          data-placement="bottom"
          @click=${this.Instagramtools}
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
