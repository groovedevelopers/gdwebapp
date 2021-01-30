import { html, LitElement, property, customElement } from 'lit-element';
import 'wired-textarea';

@customElement('groovy-wired-textarea')
class main extends LitElement {

    @property()
    placeholder = 'Enter Text'

    @property()
    rows = '6'

    @property()
    setPlaceholder(placeholder){
     this.placeholder = placeholder
    }

    @property()
    setRows(rows){
     this.rows = rows
    }

    // connectedCallback(){
    //   super.connectedCallback()
    // }
  render() {
    return html`<wired-textarea placeholder=${this.placeholder} rows=${this.rows}>${this.text}</wired-textarea>`;
  }
}
