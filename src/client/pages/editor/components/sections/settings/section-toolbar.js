import { html, LitElement, property, customElement } from 'lit-element';
import './section-editor';
@customElement('toolbar-manager')
class main extends LitElement {
  createRenderRoot() {
    return this;
  }

  currentId

  sectools() {

    document.querySelector('.secSettings').style.display = 'block'

    const currentidevent = new CustomEvent('secid', {
      detail:{value:this.currentId},
      bubbles: true,
      composed: true
    })

    window.dispatchEvent(currentidevent)

  }

  duplicateSection(event) {
    // alert(this.currentId);
    const secClone = document.getElementById(`${this.currentId}`);

    const cln = this.cloneNodeWithAdditionalProperties(secClone);

    document.querySelector('.secarea').appendChild(cln);

    this.specialEvents();
  }

  cloneNodeWithAdditionalProperties(node) {
    const clone = node.cloneNode(true);

    Object.keys(node).forEach((property) => (clone[property] = n[property]));

    // returning the clone to the calling context:
    return clone;
  }


  removeChild() {
    const removesec = document.getElementById(`${this.currentId}`);
    // if(this.currentId !== '0'){

    document.querySelector('.secarea').removeChild(removesec);
    // }
    // console.log(document.querySelector('.secarea'));
  }
  
  

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener('sections', (event) => {
      this.currentId = event.detail.value
    });
    
  }

  render() {
    return html`
      <div class="">
                &nbsp;

                <a
                  data-toggle="esec"
                  title="Edit Section"
                  data-placement="bottom"
                  @click=${this.sectools}
                  ><i
                    class="fa fa-edit"
                    style="font-size:20px; color:black;"
                  ></i></a
                >&nbsp;&nbsp;
                <a
                  data-toggle="duplicateSec"
                  title="Duplicate"
                  data-placement="bottom"
                  @click=${this.duplicateSection}
                  ><i
                    class="fa fa-clone"
                    style="font-size:20px; color:black;"
                  ></i></a
                >&nbsp;&nbsp;
                <a
                  data-toggle="moveSecDown"
                  title="Move Down"
                  data-placement="bottom"
                  ><i
                    class="fa fa-arrow-down"
                    style="font-size:20px; color:black;"
                  ></i></a
                >&nbsp;&nbsp;
                <a
                  data-toggle="moveSecUp"
                  title="Move Up"
                  data-placement="bottom"
                  ><i
                    class="fa fa-arrow-up"
                    style="font-size:20px; color:black;"
                  ></i></a
                >&nbsp;&nbsp;
                <a
                  data-toggle="deleteSec"
                  title="Delete"
                  data-placement="bottom"
                  @click=${this.removeChild}
                  ><i
                    class="fa fa-trash"
                    style="font-size:20px; color:red;"
                  ></i></a
                >&nbsp;
              </div>

              <!-- <sec-manager></sec-manager> -->
    `;
  }
}
