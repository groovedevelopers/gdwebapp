import { html, LitElement, property, customElement } from 'lit-element';


@customElement('embed-toolbar')
class main extends LitElement {
  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    // document.querySelector('url')
  }

  removebtn(event) {
    this.addEventListener('removeEmbednested', () => {
      const embedevent = new CustomEvent('removeEmbed', {
        detail: this.shadowRoot,
        composed: true,
        bubbles: true,
      });
      window.dispatchEvent(embedevent);
    });
  }

  customEmbedtools() {
    document.querySelector('.customEmbedToolbar').style.display = 'block';
  }

  closeCustomEmbedtools() {
    document.querySelector('.customEmbedToolbar').style.display = 'none';
  }

  closebtn() {
    document.querySelector('.editEmbed').style.display = 'none';
  }

  connectedCallback() {
    super.connectedCallback();
    // alert('i ran')
    window.addEventListener('open-embed-toolbar', (event) => {
      this.customEmbedtools();

      event.stopPropagation();
    });

    // window.addEventListener('newVideo', (event) => {
    //     this.noImg = !event.detail.state
    //     document.querySelector('.testttt').style.display = 'block'

    // })

    window.addEventListener('embed-settings', (event) => {
      document.querySelector('.editembed').style.display = 'block';
    });
  }

  render() {
    return html`
      <div class="customEmbedToolbar toolbar" style="display:none">
        <i class="close fa fa-close" @click=${this.closeCustomEmbedtools}></i>

        <h4 class="text-center">Embed</h4>
        <hr />

        <div class="container">
         

          <div class="input-group mb-3">
            
            <input
              type="text"
              class="form-control"
              placeholder="Enter embed url"
              aria-label="Username"
              aria-describedby="basic-addon1"
              id="url"
            />
            <div class="input-group-prepend" style="background: #fff">
              <a href="$1"
                ><span
                  class="input-group-text fa fa-code"
                  id="basic-addon1"
                  style="font-size:25px;"
                ></span
              ></a>
            </div>
          </div>

         




        </div>
      </div>
      <style>
       
      </style>

      <div class="editembed hoverSetBlock" style="display:none">
        &nbsp;
        <i class="close fa fa-close" @click=${this.closebtn}></i>
        <br />
        &nbsp;

        <a
          data-toggle="esec"
          title="Edit Section"
          data-placement="bottom"
          @click=${this.customEmbedtools}
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
