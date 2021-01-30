import { html, LitElement, property, customElement } from 'lit-element';
import 'wired-video';

@customElement('groovy-wired-video')
class main extends LitElement {

    @property()
    src = 'https://youtu.be/YSy2lBZ1QrA'

    @property()
    autoplay = false
    @property()
    muted = false
    @property()
     loop = false

    @property()
    setSrc(src){
     this.src = src
    }

    @property()
    setAutoplay(autoplay){
     this.autoplay = autoplay
    }

    @property()
    setMuted(muted){
     this.muted = muted
    }

    @property()
    setLoop(loop){
     this.loop = loop
    }

    // connectedCallback(){
    //   super.connectedCallback()
    // }
  render() {
    return html`<wired-video src=${this.src} autoplay=${this.autoplay} muted=${this.muted} loop=${this.loop}></wired-video>`;
  }
}
