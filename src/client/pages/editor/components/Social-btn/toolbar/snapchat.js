import { html, LitElement, property, customElement } from 'lit-element';

@customElement('snapchat-toolbar')
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

  Snapchattools() {
    document.querySelector('.snapchatToolbar').style.display = 'block';
    
  }

  closeSnapchattools() {
    document.querySelector('.snapchatToolbar').style.display = 'none';
  }

  closebtn() {
    document.querySelector('.snapchatbtn').style.display = 'none';
  }

  url(event) {
    //   alert('ttttttttt')

    const  snapchatsrcevent = new CustomEvent('snapchatSrcChange', {
        detail: {value:event},
        composed: true,
        bubbles: true
    })

    window.dispatchEvent(snapchatsrcevent)
  }

  btnSize(event) {
    //   alert('ttttttttt')

    const  snapchatevent = new CustomEvent('snapchatBtnChange', {
        detail: {value:event},
        composed: true,
        bubbles: true
    })

    window.dispatchEvent(snapchatevent)
  }

  btnType(event) {
    //   alert('ttttttttt')

    const  snapchattypeevent = new CustomEvent('snapchatTypeChange', {
        detail: {value:event},
        composed: true,
        bubbles: true
    })

    window.dispatchEvent(snapchattypeevent)
  }

  connectedCallback() {
    super.connectedCallback();
    // alert('i ran')
    window.addEventListener('open-snapchat-toolbar', (event) => {
      this.Snapchattools();

      event.stopPropagation();
    });


    window.addEventListener('snapchat-settings', (event) => {
      document.querySelector('.snapchatbtn').style.display = 'block';
    });
  }

  render() {
    return html`
      <div class="snapchatToolbar toolbar" style="display:none">
        <i class="close fa fa-close" @click=${this.closeSnapchattools}></i>

        <h4 class="text-center">Snapchat Button</h4>
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
      

      <div class="snapchatbtn hoverSetBlock" style="display:none">
        &nbsp;
        <i class="close fa fa-close" @click=${this.closebtn}></i>
        <br />
        &nbsp;

        <a
          data-toggle="esec"
          title="Edit Section"
          data-placement="bottom"
          @click=${this.Snapchattools}
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
