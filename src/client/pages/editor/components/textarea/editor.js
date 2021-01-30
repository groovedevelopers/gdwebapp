import { html, LitElement, property, customElement } from 'lit-element';

@customElement('editor-toolbar')
class main extends LitElement {
  firstUpdated() {}

  @property()
  border;

  format(command, value) {
    document.execCommand(command, false, value);
    // alert('working')
  }

  bold(command, value) {
    document.execCommand(command, false, value);
  }

  setUrl() {
    var url = document.getElementById('txtFormatUrl').value;
    var sText = document.getSelection();
    document.execCommand(
      'insertHTML',
      false,
      '<a href="' + url + '" target="_blank">' + sText + '</a>',
    );
    document.getElementById('txtFormatUrl').value = '';
  }

  alignLeft() {}
  alignCenter() {}
  alignRight() {}
  quoteLeft() {}
  quoteRight() {}
  Strikethrough() {}
  Underline() {}
  Outdent() {}
  Indent() {}

  closeEditor(event) {
    const textevent = new CustomEvent('removeTextareanested', {
      detail: this.shadowRoot,
      composed: true,
      bubbles: true,
    });
    this.dispatchEvent(textevent);
  }

  editorclick() {
    this.shadowRoot.querySelector('.toolbar').style.display = 'block';
  }

  firstUpdated(){

    const editor = this.shadowRoot.querySelector('.main-editor')
    const toolbar = this.shadowRoot.querySelector('.toolbar')

    editor.addEventListener('mouseover', (_) => {

      toolbar.style.display = 'block'
     
    });

    editor.addEventListener('mouseleave', (_) => {

      toolbar.style.display = 'none'
     
    });


  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <div class="main-editor">
        <div class="toolbar">
          <a class="properties"
            href=""
            @click=${() => {
              this.format('bold');
            }}
            ><img src="https://img.icons8.com/metro/15/000000/bold.png"
          /></a>
          <a
          class="properties"
            href="javascript:void(0)"
            @click=${() => {
              this.format('italic');
            }}
            ><img src="https://img.icons8.com/android/15/000000/italic.png"
          /></a>
          <span class="vl"></span>&nbsp;
          <a
          class="properties"
            href="javascript:void(0)"
            @click=${() => {
              this.format('alignright');
            }}
            ><img src="https://img.icons8.com/android/15/000000/align-left.png"
          /></a>
          <a
          class="properties"
            href="javascript:void(0)"
            @click=${() => {
              this.format('text-align:center');
            }}
            ><img
              src="https://img.icons8.com/android/15/000000/align-center.png"
          /></a>
          <a
          class="properties"
            href="javascript:void(0)"
            @click=${() => {
              this.format('alignRight');
            }}
            ><img
              src="https://img.icons8.com/android/15/000000/align-right.png"
          /></a>
          <span class="vl"></span>&nbsp;
          <a
          class="properties"
            href="javascript:void(0)"
            @click=${() => {
              this.format('quoteleft');
            }}
            ><img
              src="https://img.icons8.com/fluent-systems-filled/15/000000/quote-left.png"
          /></a>
          <a
          class="properties"
            href="javascript:void(0)"
            @click=${() => {
              this.format('quoteright');
            }}
            ><img
              src="https://img.icons8.com/fluent-systems-filled/15/000000/quote-right.png"
          /></a>
          <a
          class="properties"
            href="javascript:void(0)"
            @click=${() => {
              this.format('strikethrough');
            }}
            ><img
              src="https://img.icons8.com/android/15/000000/strikethrough.png"
          /></a>
          <a 
          class="properties"
          href="javascript:void(0)" @click=${this.setUrl}>
            <img src="https://img.icons8.com/metro/15/000000/link.png" />
          </a>
          <!-- <span><input id="txtFormatUrl" placeholder="url" class="form-control"></span> -->
          <a
          class="properties"
            href="javascript:void(0)"
            @click=${() => {
              this.format('underline');
            }}
          >
            <img src="https://img.icons8.com/android/15/000000/underline.png" />
          </a>
          <span class="vl"></span>&nbsp;
          <a
          class="properties"
            href="javascript:void(0)"
            @click=${() => {
              this.format('undo');
            }}
          >
            <img src="https://img.icons8.com/metro/15/000000/undo.png" />
          </a>
          <a
          class="properties"
            href="javascript:void(0)"
            @click=${() => {
              this.format('redo');
            }}
          >
            <img src="https://img.icons8.com/metro/15/000000/redo.png" />
          </a>
          <a 
          class="properties"
          href="javascript:void(0)" @click=${this.format('paste')}>
            <img src="https://img.icons8.com/pastel-glyph/15/000000/file.png" />
          </a>
          <a
          class="properties"
            href="javascript:void(0)"
            @click=${() => {
              this.format('outdent');
            }}
          >
            <img src="https://img.icons8.com/metro/15/000000/outdent.png" />
          </a>
          <a
          class="properties"
            href="javascript:void(0)"
            @click=${() => {
              this.format('indent');
            }}
          >
            <img src="https://img.icons8.com/metro/15/000000/indent.png" />
          </a>
          <a
          class="properties"
            href="javascript:void(0)"
            @click=${() => {
              this.format('insertnumberedlist');
            }}
          >
            <img
              src="https://img.icons8.com/metro/15/000000/numbered-list.png"
            />
          </a>
          <a
          class="properties"
            href="javascript:void(0)"
            @click=${() => {
              this.format('insertunorderedlist');
            }}
          >
            <img src="https://img.icons8.com/material/16/000000/list--v1.png" />
          </a>
          <span class="vl"></span>&nbsp;
          <a 
          class="properties"
          href="javascript:void(0)" @click=${this.closeEditor}>
            <img
              src="https://img.icons8.com/fluent-systems-filled/15/000000/trash.png"
            />
          </a>
        </div>

        <div
          class="editor"
          @click=${this.editorclick}
          contenteditable="true"
          placeholder="Enter Text"
        ></div>
        <br />
      </div>

      <style>
        .main-editor {
          height: 100%;
          width: 500px;
          /* position:relative; */
          /* bottom:5%; */
          flex-shrink: 1;

        }

        .vl {
          border-left: 2px solid greenyellow;
          height: auto;
        }

        .editor:focus {
          border: 2px solid blue;
        }

        .editor {
          /* position:static; */
          outline: none;
          /* border: 1px solid #0B132B; */
          width: 400px;
        }

        .editor[contentEditable='true']:empty:not(:focus):before {
          content: attr(placeholder);
        }

        .toolbar {
          /* position: absolute; */
          border: solid 1px #ddd;
          background: #fff;
          padding: 10px;
          border-radius: 3px;
          width: 600px;
          box-shadow: 3px 3px 5px #f1f1f1;
          /* margin-bottom:10px; */

        }

        .properties{
          padding:5px;
        }

        .toolbar > span {
          cursor: pointer;
        }

        .toolbar > span:hover {
          text-decoration: underline;
        }
      </style>
    `;
  }
}
