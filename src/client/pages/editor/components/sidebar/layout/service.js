import { html, LitElement, property, customElement } from 'lit-element';

@customElement('service-tool')
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
      

          <p class="text-center">Service</p>
          <hr />

          <div class="row">
            <div 
            class="col-sm-3 styleicons text-center draggables" 
            draggable="true"
            elementtag="groovy-custom-countdown">
              <img
                src="assets/images/clock.svg"
                style="height:30px; width:30px;"
              />
              <p>Count Down</p>
            </div>
            <div class="col-sm-3 styleicons" draggable="true">
              <img
                src="assets/images/counter.png"
                style="height:30px; width:30px;"
              />
              <p>Counter</p>
            </div>
            <div class="col-sm-3 styleicons" draggable="true">
              <img
                src="assets/images/video.svg"
                style="height:30px; width:30px;"
              />
              <p>Clients</p>
            </div>
            <div class="col-sm-3 styleicons" draggable="true">
              <span> &mdash; </span>
              <p>Maps</p>
            </div>
            <div class="col-sm-3 styleicons" draggable="true">
              <button class="btn btn-outline-dark btn-xs" disabled>B</button>
              <p>Newsletter</p>
            </div>
          </div>

          <br />
          <hr />

    `;
  }
}
