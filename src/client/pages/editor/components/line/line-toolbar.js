import { html, LitElement, property, customElement } from 'lit-element';

@customElement('line-toolbar')
class main extends LitElement {
  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    // document.querySelector('url')
    
  }

  removeline(event){
    this.addEventListener('removeLinenested', ()=> {
       

        alert('i worked here')
                    const lineevent = new CustomEvent('removeLine', {
                      detail: this.shadowRoot,
                      composed: true,
                      bubbles:true,
                  })
                  window.dispatchEvent(lineevent)
                  
                  })
   
    
}



  customLinetools() {
    document.querySelector('.customLineToolbar').style.display = 'block';
  }

  closeCustomlinetools() {
    document.querySelector('.customLineToolbar').style.display = 'none';
  }

  closeline() {
      document.querySelector('.editLine').style.display = 'none'
    }

  connectedCallback() {
    super.connectedCallback();
    // alert('i ran')
    window.addEventListener('open-line-toolbar', (event) => {
      this.customLinetools();

      event.stopPropagation();
    });

    // window.addEventListener('newVideo', (event) => {
    //     this.noImg = !event.detail.state
    //     document.querySelector('.testttt').style.display = 'block'

    // })

    window.addEventListener('line-settings', (event) => {
        document.querySelector('.editLine').style.display = 'block'


    })

  }

  render() {
    return html`
      <div class="customLineToolbar toolbar" style="display:none">
        <i class="close fa fa-close" @click=${this.closeCustomlinetools}></i>

        <h4 class="text-center">Lines Editor</h4>
        <hr>

        <div class="videoUrl">

        <hr class="line1">
        <hr class="line2">
        <hr class="line3">
        <hr class="line4">
          
        </div>

    


      </div>
      <style>
          .line1{
              border: 1px solid black;
          }
          .line2{
              border: 2px solid black;
          }
          .line3{
              border: 3px solid black;
          }
          .line4{
              border: 4px solid black;
          }
      </style>

      <div class="editLine hoverSetBlock" style="display:none">
      &nbsp;
      <i class="close fa fa-close" @click=${this.closeline}></i>
      <br>
                &nbsp;

                

                <a
                  data-toggle="esec"
                  title="Edit Section"
                  data-placement="bottom"
                  @click=${this.customLinetools}
                  ><i
                    class="fa fa-edit"
                    style="font-size:20px; color:black;"
                  ></i></a
                >&nbsp;&nbsp;
                
                <a
                  data-toggle="deleteSec"
                  title="Delete"
                  data-placement="bottom"
                  @click=${this.removeline}
                  ><i
                    class="fa fa-trash"
                    style="font-size:20px; color:red;"
                  ></i></a
                >&nbsp;
              </div>
    `;
  }
}
