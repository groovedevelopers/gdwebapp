import { html, LitElement, property, customElement } from 'lit-element';
import 'wired-button';

@customElement('groovy-wired-button')
class main extends LitElement {

    @property()
    text = 'placeholder'

    @property()
    setText(text){
     this.text = text
    }

    connectedCallback(){
      super.connectedCallback()
    }
  render() {
    return html`<wired-button>${this.text}</wired-button>`;
  }
}
