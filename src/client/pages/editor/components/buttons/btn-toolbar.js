import { html, LitElement, property, customElement } from 'lit-element';

@customElement('btn-toolbar')
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

  customBtntools() {
    document.querySelector('.customBtnToolbar').style.display = 'block';
  }

  closeCustomBtntools() {
    document.querySelector('.customBtnToolbar').style.display = 'none';
  }

  closebtn() {
    document.querySelector('.editbtn').style.display = 'none';
  }

  connectedCallback() {
    super.connectedCallback();
    // alert('i ran')
    window.addEventListener('open-button-toolbar', (event) => {
      this.customBtntools();

      event.stopPropagation();
    });

    // window.addEventListener('newVideo', (event) => {
    //     this.noImg = !event.detail.state
    //     document.querySelector('.testttt').style.display = 'block'

    // })

    window.addEventListener('button-settings', (event) => {
      document.querySelector('.editbtn').style.display = 'block';
    });
  }

  render() {
    return html`
      <div class="customBtnToolbar toolbar" style="display:none">
        <i class="close fa fa-close" @click=${this.closeCustomBtntools}></i>

        <h4 class="text-center">Button</h4>
        <hr />

        <div class="container">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="btnText"
              placeholder="Text Here"
            />
          </div>

          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Clickthrough URL"
              aria-label="Username"
              aria-describedby="basic-addon1"
              id="url"
            />
            <div class="input-group-prepend" style="background: #fff">
              <a href="$1"
                ><span
                  class="input-group-text fa fa-cog"
                  id="basic-addon1"
                  style="font-size:25px;"
                ></span
              ></a>
            </div>
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect1">Button Size</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>

          <div class="form-group">
            <label for="btnType">Button Design</label>
            <select class="form-control" id="btnType">
              <option>wired</option>
              <option>Medium</option>
              <option>Large</option>
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

      <div class="editbtn hoverSetBlock" style="display:none">
        &nbsp;
        <i class="close fa fa-close" @click=${this.closebtn}></i>
        <br />
        &nbsp;

        <a
          data-toggle="esec"
          title="Edit Section"
          data-placement="bottom"
          @click=${this.customBtntools}
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
