import { html, LitElement, property, customElement } from 'lit-element';

@customElement('custom-codeeditor')
class main extends LitElement {
  createRenderRoot() {
    return this;
  }

  firstUpdated() {


    const first = document.querySelector(".codeArea");
const iframe = document.querySelector(".previewArea");
const btn = document.querySelector(".runCode");

btn.addEventListener("click", () => {
  var html = first.textContent;
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
});


first.addEventListener('keyup',()=>{
  var html = first.textContent;
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);


  const codeevent = new CustomEvent ('codePlace', {
      detail: html,
      bubbles: true,
      composed: true,
  })

  window.dispatchEvent(codeevent)
})

first.addEventListener("paste", function(e) {
        e.preventDefault();
        var text = e.clipboardData.getData("text/plain");
        document.execCommand("insertText", false, text);
    });




  }



  customeditor() {
    document.querySelector('.customCodeEditor').style.display = 'block';
  }

  closeCustomeditor() {
    document.querySelector('.customCodeEditor').style.display = 'none';
  }

  closeEditor() {
    document.querySelector('.editor').style.display = 'none';
  }


  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('open-editor', (event) => {
      this.customeditor();

      event.stopPropagation();
    });


    window.addEventListener('editor', (event) => {
      document.querySelector('.editor').style.display = 'block';
    });
  }

  render() {
    return html`
      <div class="customCodeEditor codeEditor" style="display:none">
        <i class="close fa fa-close" @click=${this.closeCustomeditor}></i>
        <br>

        <div class="container">

          <div class="Codeeditor">
              <div class="editorHeader">
            <button class="runCode">Run</button>
            </div>
            <div class="codeArea" contenteditable>writecode</div>
            <iframe class="previewArea"> </iframe>
          </div>
        </div>


      </div>

      <div class="editor hoverSetBlock" style="display:none">
        &nbsp;
        <i class="close fa fa-close" @click=${this.closeEditor}></i>
        <br />
        &nbsp;

        <a
          data-toggle="esec"
          title="Edit Section"
          data-placement="bottom"
          @click=${this.customeditor}
          ><i class="fa fa-edit" style="font-size:20px; color:black;"></i></a
        >&nbsp;&nbsp;

        <a
          data-toggle="deleteSec"
          title="Delete"
          data-placement="bottom"
          @click=${this.removeImage}
          ><i class="fa fa-trash" style="font-size:20px; color:red;"></i></a
        >&nbsp;
      </div>
    `;
  }
}
