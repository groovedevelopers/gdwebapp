import { html, LitElement, property, customElement } from 'lit-element';

@customElement('sec-manager')
class main extends LitElement {
  createRenderRoot() {
    return this;
  }

  currentId = ''
  // bgvideolink = ''

  closeSectools() {

    document.querySelector('.secSettings').style.display = 'none'

  }

  firstUpdated(){
    
} 

  bgvideo(event){
    // alert('hhhhfhh')
    const tt = document.getElementById(`${this.currentId}`);
    const bgvideolink = event.target.value
    // this.shadowRoot.querySelector('.video').innerHTML = 
    tt.shadowRoot.querySelector('iframe').style.display = 'block'
    tt.shadowRoot.querySelector('iframe').src = bgvideolink
// console.log(tt.shadowRoot.querySelector('source'))
// // http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4


    
  }
  dbgimg(event){
    // const tt = document.getElementById(`${this.currentId}`);
    // tt.shadowRoot.querySelector('section').style.background = url(event.target.files[0])
    const src = URL.createObjectURL(event.target.files[0])
    document.getElementById(`${this.currentId}`).shadowRoot.querySelector('.sections').style.backgroundImage =
 `url(${src})`
  //  console.log(event.target.files[0])
  }

  

  secsw(event) {
    // Get the checkbox
    const sw = document.querySelector('.bgSwitch');
    const sec1 = document.querySelector('.secsw1');
    const sec2 = document.querySelector('.secsw2');
    const tt = document.getElementById(`${this.currentId}`);

    // If the checkbox is checked, display the output text
    if (sw.checked === true) {
      sec1.style.display = 'none';
      sec2.style.display = 'block';
      // alert('working')



      

      // const logoevent = new CustomEvent('bgvideoChange', {
      //   detail: { value: event },
      //   composed: true,
      //   bubbles: true,
      // });
  
      // window.dispatchEvent(logoevent);


    } else {
      sec1.style.display = 'block';
      sec2.style.display = 'none';

      tt.shadowRoot.querySelector('.sections').style.backgroundImage = ''

      // const file = event.target.files[0];
      // const logoevent = new CustomEvent('bgimgChange', {
      //   detail: { file },
      //   composed: true,
      //   bubbles: true,
      // });
  
      // window.dispatchEvent(logoevent);


    }
  }

  bgwsw() {
    const tt = document.getElementById(`${this.currentId}`);
    const sw = document.querySelector('.bgwsw');

    // console.log(tt)

    if (sw.checked === true) {
      console.log(tt)
      tt.shadowRoot.querySelector('.sections').classList.remove('container');
    } else {
      console.log(tt)
      tt.shadowRoot.querySelector('.sections').classList.add('container');
    }
  }




  secHeight1() {
    document.getElementById(`${this.currentId}`).shadowRoot.querySelector('.sections').style.height = '300px';
  }
  secHeight2() {
    document.getElementById(`${this.currentId}`).shadowRoot.querySelector('.sections').style.height = '500px';
  }
  secHeight3() {
    document.getElementById(`${this.currentId}`).shadowRoot.querySelector('.sections').style.height = '700px';
  }

  secWidth1() {
    const tt = document.getElementById(`${this.currentId}`);
    const div = tt.querySelector('div');
    div.style.width = '300px';
    // document.getElementById(`${this.currentId}`).innerText = '' ;
    // document.getElementById(`${this.currentId}`).appendChild(tt)
  }
  secWidth2() {
    document.getElementById(`${this.currentId}`).style.width = '500px';
  }
  secWidth3() {
    document.getElementById(`${this.currentId}`).style.width = '700px';
  }

  secBgtxt(event) {
    const sw = document.querySelector('p');

    if (sw) {
      document.getElementById(`${this.currentId}`).shadowRoot.querySelector('.sections').style.color =
        event.target.value;
    }
  }

  secBgC(event) {
    const sw = document.querySelector('.secBgC');

    // console.log('fdffdd')

    if (sw) {
      document.getElementById(`${this.currentId}`).shadowRoot.querySelector('.sections').style.backgroundColor =
        event.target.value;
    }
  }

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener('secid', (event) => {
      this.currentId = event.detail.value
    });
  }

  render() {
    return html`
      
        <i class="close fa fa-close" @click=${this.closeSectools}></i>

        <div class="tab">
          <ul class="nav nav-tabs customtab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                data-toggle="tab"
                href="#home2"
                role="tab"
                aria-selected="true"
                >Background</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="tab"
                href="#profile2"
                role="tab"
                aria-selected="false"
                >Format</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="tab"
                href="#contact2"
                role="tab"
                aria-selected="false"
                >Colors</a
              >
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade show active" id="home2" role="tabpanel">
              <div class="pd-20 ">
                <div class="bgsw">
                  <span>Image</span>
                  <label class="switch">
                    <input
                      class="bgSwitch bgimg"
                      type="checkbox"
                      @click=${this.secsw}
                    />
                    <span class="slider round"></span>
                  </label>
                  <span>Video</span>

                  <br /><br />

                  <div class="secsw1">
                    <form class="" >
                      <input type="file" class="secImg-main image" @change=${this.dbgimg} name="file" />
                      <i class="fa fa-upload"></i>
                    </form>
                  </div>

                  <div class="secsw2">
                    <form class="" action="#">
                      <input
                        type="text"
                        placeholder="Video link here"
                        class="form-control video"
                        name="file"
                        @click=${this.bgvideo}
                      />
                    </form>
                  </div>
                </div>

                <hr />

                <div class="bgsw">
                  <span>Inset</span>
                  <label class="switch">
                    <input class="bgwsw" type="checkbox" @click=${this.bgwsw} />
                    <span class="slider round"></span>
                  </label>
                  <span>Full </span>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="profile2" role="tabpanel">
              <div class="pd-20">
                <span>Section Height</span>
                <br />
                <div class=" btn-group-toggle secHeight" data-toggle="buttons">
                  <label class="secHeight-opt1 btn active">
                    <input
                      type="radio"
                      name="options"
                      id="height1"
                      @click=${this.secHeight1}
                      autocomplete="off"
                      checked
                    />
                    S
                  </label>
                  <label class="secHeight-opt2  btn">
                    <input
                      type="radio"
                      name="options"
                      id="height2"
                      @click=${this.secHeight2}
                      autocomplete="off"
                    />
                    M
                  </label>
                  <label class="secHeight-opt3 btn ">
                    <input
                      type="radio"
                      name="options"
                      id="height3"
                      @click=${this.secHeight3}
                      autocomplete="off"
                    />
                    L
                  </label>
                </div>

                <div class="">
                  <input
                    class="form-control"
                    id="hslider"
                    value="100"
                    min="1"
                    max="700"
                    type="range"
                  />
                </div>

                <hr />

                <span>Section Width</span>
                <br />
                <div
                  class="btn-group btn-group-toggle secWidth"
                  data-toggle="buttons"
                >
                  <label class="btn secWidth-opt1 active">
                    <input
                      type="radio"
                      name="options"
                      id="option1"
                      @click=${this.secWidth1}
                      autocomplete="off"
                      checked
                    />
                    S
                  </label>
                  <label class="btn secWidth-opt2">
                    <input
                      type="radio"
                      name="options"
                      id="option2"
                      @click=${this.secWidth2}
                      autocomplete="off"
                    />
                    M
                  </label>
                  <label class="btn secWidth-opt3">
                    <input
                      type="radio"
                      name="options"
                      id="option3"
                      @click=${this.secWidth3}
                      autocomplete="off"
                    />
                    L
                  </label>
                </div>

                <div class="">
                  <input class="form-control" value="50" type="range" />
                </div>

                <hr />
              </div>
            </div>
            <div class="tab-pane fade" id="contact2" role="tabpanel">
              <div class="pd-20">
                <form>
                  <div class="">
                    <label class="">Background Color</label>
                    <div class="secColor">
                      <input
                        class="form-control secBgC"
                        @change=${this.secBgC}
                        value="#0000"
                        type="color"
                      />
                    </div>
                  </div>
                  <br />

                  <div class="">
                    <label class="">Text Color</label>
                    <div class="secColor">
                      <input
                        class="form-control secBgtxt"
                        @change=${this.secBgtxt}
                        value="#0000"
                        type="color"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      
    `;
  }
}
