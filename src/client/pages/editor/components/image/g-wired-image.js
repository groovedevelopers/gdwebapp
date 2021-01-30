import { html, LitElement, property, customElement } from 'lit-element';
import 'wired-image';

@customElement('groovy-wired-image')
class main extends LitElement {

    @property()
    src = 'https://www.gstatic.com/webp/gallery/1.sm.jpg'

    @property()
    elevation = '6'

    @property()
    setSrc(src){
     this.src = src
    }

    @property()
    setElevation(elevation){
     this.elevation = elevation
    }

    // connectedCallback(){
    //   super.connectedCallback()
    // }
  render() {
    return html`<wired-image src=${this.src} elevation=${this.elevation}></wired-image>`;
  }
}
