import { html, LitElement, property, customElement } from 'lit-element';

@customElement('layouts-tool')
class main extends LitElement {
  createRenderRoot() {
    return this;
  }

  firstUpdated(){

    const dragabbles = document.querySelectorAll('.draggables');

    Array.from(dragabbles).map((dragabble, index) => {
        dragabble.setAttribute('id', `dg${index}`);
        dragabble.addEventListener('dragstart', (event) => {
            // alert('i am dragged')
          const elementTag = event.currentTarget.getAttribute('elementtag');
          event.dataTransfer.setData('Text', elementTag);
        });
  
       
      });
    
  }
  
  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    return html`
      

          <p class="text-center">Layouts</p>
          <hr />

          <div class="row">
          
          <div 
          class="col-sm-3 styleicons text-center draggables" 
          draggable="true" 
          elementtag="groovy-custom-spacer">
              <img
                src="assets/images/grid.svg"
                style="height:30px; width:30px;"
              />
              <p>Spacer</p>
            </div>
            <div 
            class="col-sm-3 styleicons text-center draggables" 
            draggable="true"
            elementtag="groovy-custom-grids"
            >
              <img
                src="assets/images/grid.svg"
                style="height:30px; width:30px;"
              />
              <p>Grid</p>
            </div>
            <div 
            class="col-sm-3 styleicons draggables" 
            draggable="true"
            elementtag="groovy-custom-slider">
              <img
                src="assets/images/slider.png"
                style="height:30px; width:30px;"
              />
              <p>Slider</p>
            </div>
            <div 
            class="col-sm-3 styleicons draggables" 
            draggable="true"
            elementtag="groovy-custom-divider">
              <img
                src="assets/images/video.svg"
                style="height:30px; width:30px;"
              />
              <p>Divider</p>
            </div>
            <div 
            class="col-sm-3 styleicons draggables" 
            draggable="true"
            elementtag="groovy-custom-card">
              <span> &mdash; </span>
              <p>Card</p>
            </div>
            <div 
            class="col-sm-3 styleicons draggables" 
            draggable="true"
            elementtag="groovy-custom-calender">
              <button class="btn btn-outline-dark btn-xs" disabled>B</button>
              <p>Calender</p>
            </div>
            <div 
            class="col-sm-3 styleicons draggables" 
            draggable="true"
            elementtag="groovy-custom-table">
              <img
                src="assets/images/link.svg"
                style="height:30px; width:30px;"
              />
              <p>Table</p>
            </div>
            <div 
            class="col-sm-3 styleicons draggables" 
            draggable="true"
            elementtag="groovy-custom-result">
              <img
                src="assets/images/audio.svg"
                style="height:30px; width:30px;"
              />
              <p>Results</p>
            </div>
            <div 
            class="col-sm-3 styleicons draggables" 
            draggable="true"
            elementtag="groovy-custom-form">
              <img
                src="assets/images/audio.svg"
                style="height:30px; width:30px;"
              />
              <p>Form</p>
            </div>
          </div>

          <br />
          <hr />
    `;
  }
}
