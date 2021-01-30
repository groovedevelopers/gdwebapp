import { html, LitElement, property, customElement } from 'lit-element';

@customElement('pinterest-toolbar')
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

  Pinteresttools() {
    document.querySelector('.pinterestToolbar').style.display = 'block';
    
  }

  closePinteresttools() {
    document.querySelector('.pinterestToolbar').style.display = 'none';
  }

  closebtn() {
    document.querySelector('.pinterestbtn').style.display = 'none';
  }

  url(event) {
    //   alert('ttttttttt')

    const  pinterestsrcevent = new CustomEvent('pinterestSrcChange', {
        detail: {value:event},
        composed: true,
        bubbles: true
    })

    window.dispatchEvent(pinterestsrcevent)
  }

  btnSize(event) {
    //   alert('ttttttttt')

    const  pinterestevent = new CustomEvent('pinterestBtnChange', {
        detail: {value:event},
        composed: true,
        bubbles: true
    })

    window.dispatchEvent(pinterestevent)
  }

  btnType(event) {
    //   alert('ttttttttt')

    const  pinteresttypeevent = new CustomEvent('pinterestTypeChange', {
        detail: {value:event},
        composed: true,
        bubbles: true
    })

    window.dispatchEvent(pinteresttypeevent)
  }

  connectedCallback() {
    super.connectedCallback();
    // alert('i ran')
    window.addEventListener('open-pinterest-toolbar', (event) => {
      this.Pinteresttools();

      event.stopPropagation();
    });


    window.addEventListener('pinterest-settings', (event) => {
      document.querySelector('.pinterestbtn').style.display = 'block';
    });
  }

  render() {
    return html`
      <div class="pinterestToolbar toolbar" style="display:none">
        <i class="close fa fa-close" @click=${this.closePinteresttools}></i>

        <h4 class="text-center">Pinterest Button</h4>
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
      

      <div class="pinterestbtn hoverSetBlock" style="display:none">
        &nbsp;
        <i class="close fa fa-close" @click=${this.closebtn}></i>
        <br />
        &nbsp;

        <a
          data-toggle="esec"
          title="Edit Section"
          data-placement="bottom"
          @click=${this.Pinteresttools}
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
