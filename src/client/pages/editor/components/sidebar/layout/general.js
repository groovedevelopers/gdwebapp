import { html, LitElement, property, customElement } from 'lit-element';

@customElement('general-tool')
class main extends LitElement {
  createRenderRoot() {
    return this;
  }

  
  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    return html`
      <p class="text-center">General</p>
      <hr />

      <div class="row">
        <div
          class="col-sm-3 styleicons text-center draggables"
          draggable="true"
          elementtag="groovy-custom-textarea"
        >
          <i class="fa fa-font" style="font-size:20px"></i>
          <p>Text</p>
        </div>
        <div
          class="col-sm-3 styleicons draggables"
          draggable="true"
          elementtag="groovy-custom-image"
        >
          <img src="assets/images/img.svg" style="height:30px; width:30px;" />
          <p>Image</p>
        </div>
        <div 
        class="col-sm-3 styleicons draggables" 
        draggable="true"
        elementtag="groovy-custom-video"
        >
          <img src="assets/images/video.svg" style="height:30px; width:30px;" />
          <p>Video</p>
        </div>
        <div class="col-sm-3 styleicons draggables" 
        draggable="true"
        elementtag="groovy-custom-line">
          <span> &mdash; </span>
          <p>Line</p>
        </div>
        <div class="col-sm-3 styleicons draggables" 
        draggable="true"
        elementtag="groovy-custom-button">
          <button class="btn btn-outline-dark btn-xs" >B</button>
          <p>Button</p>
        </div>
        <!-- <wired-button elevation="3" draggable="true" class="draggables">Elevation</wired-button> -->

        <div class="col-sm-3 styleicons draggables" 
        draggable="true"
        elementtag="groovy-custom-embed">
          <img src="assets/images/link.svg" style="height:30px; width:30px;" />
          <p>Embed</p>
        </div>
        <div 
        class="col-sm-3 styleicons draggables" 
        draggable="true"
        elementtag="groovy-custom-audio">
          <img src="assets/images/audio.svg" style="height:30px; width:30px;" />
          <p>Audio</p>
        </div>
      </div>

      <br />
          <hr />
    `;
  }
}
