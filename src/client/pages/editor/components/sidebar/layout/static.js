import { html, LitElement, property, customElement } from 'lit-element';

@customElement('static-tool')
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
      

      <p class="text-center">Static</p>

          <hr />

          <div class="row">
            <div 
            class="col-sm-3 styleicons text-center draggables" 
            draggable="true"
            elementtag="groovy-custom-codeeditor">
              <i class="fa fa-font" style="font-size:20px"></i>
              <p>Code</p>
            </div>
            <div 
            class="col-sm-3 styleicons draggables" 
            draggable="true"
            elementtag="groovy-custom-apieditor">
              <img
                src="assets/images/img.svg"
                style="height:30px; width:30px;"
              />
              <p>API</p>
            </div>
          </div>
          <br />
    `;
  }
}
