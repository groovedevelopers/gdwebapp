import { html, LitElement, property, customElement } from 'lit-element';

@customElement('video-toolbar')
class main extends LitElement {
  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    // document.querySelector('url')
    this.addEventListener('removeTextareanested', ()=> {
       


        const textevent = new CustomEvent('removeTextarea', {
          detail: this.shadowRoot,
          composed: true,
          bubbles:true,
      })
      window.dispatchEvent(textevent)
      
      })
  }


  addVideo(event){

    const link = event.target.value
        
    const videoEvent  =  new CustomEvent('videoAdded', {

        detail: {value},
        composed: true,
        bubbles: true
    })

    this.dispatchEvent(videoEvent)
  }

  customVideotools() {
    document.querySelector('.customVideoToolbar').style.display = 'block';
  }

  closeCustomvideotools() {
    document.querySelector('.customVideoToolbar').style.display = 'none';
  }

  //   closeimge() {
  //     document.querySelector('.editImage').style.display = 'none'
  //   }

  connectedCallback() {
    super.connectedCallback();
    // alert('i ran')
    window.addEventListener('open-video-toolbar', (event) => {
      this.customVideotools();

      event.stopPropagation();
    });

    window.addEventListener('newVideo', (event) => {
        this.noImg = !event.detail.state
        document.querySelector('.testttt').style.display = 'block'

    })

    // window.addEventListener('image-settings', (event) => {
    //     document.querySelector('.editImage').style.display = 'block'

    // })
  }

  render() {
    return html`
      <div class="customVideoToolbar toolbar" style="display:none">
        <i class="close fa fa-close" @click=${this.closeCustomvideotools}></i>

        <h4 class="text-center">Video Editor</h4>
        <hr>

        <div class="videoUrl">
          <input type="text" @change=${this.addVideo} placeholder="Video Url" />
        </div>

        <div class="customThumbnail ">
        <input type="file"  @change=${this.uploadImage} class="secImg-main img-file" name="file" />    
        <i class="fa fa-upload"></i>
            <p>Add a Custom Thumbnail</p>

        </div>
        <br>
        <div class="text-center">
        <textarea class="videoCaption" placeholder="Caption Here"></textarea>
        </div>


      </div>

      <!-- <div class="hoverSetBlock" style="display:none;">
      &nbsp;
      <i class="close fa fa-close" @click=${this.closeimge}></i>
      <br>
                &nbsp;

                

                <a
                  data-toggle="esec"
                  title="Edit Section"
                  data-placement="bottom"
                  @click=${this.customImgtools}
                  ><i
                    class="fa fa-edit"
                    style="font-size:20px; color:black;"
                  ></i></a
                >&nbsp;&nbsp;
                
                <a
                  data-toggle="deleteSec"
                  title="Delete"
                  data-placement="bottom"
                  @click=${this.removeImage}
                  ><i
                    class="fa fa-trash"
                    style="font-size:20px; color:red;"
                  ></i></a
                >&nbsp;
              </div> -->
    `;
  }
}
