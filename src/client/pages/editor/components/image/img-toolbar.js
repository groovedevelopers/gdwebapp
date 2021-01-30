import { html, LitElement, property, customElement } from 'lit-element';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

@customElement('img-toolbar')
class main extends LitElement {
    createRenderRoot() {
        return this;
      }


      firstUpdated(){

        // const imgid = sec.getAttribute('id');
        // this.currentImgId = ind;

        
      }

      @property()
      noImg = true
       

      uploadImage(event){


        const file = event.target.files[0]
        
        const newEvent  =  new CustomEvent('image-uploaded', {

            detail: {file},
            composed: true,
            bubbles: true
        })

        this.dispatchEvent(newEvent)

      }



  customImgtools() {

    document.querySelector('.customImgToolbar').style.display = 'block';
    
  }


  closeCustomimgtools() {
    document.querySelector('.customImgToolbar').style.display = 'none';
  }

  closeimge() {
    document.querySelector('.editImage').style.display = 'none'
  }




  brightness(event) {
    //   alert('ttttttttt')

    const  brightnessevent = new CustomEvent('brightnessChange', {
        detail: {value:event},
        composed: true,
        bubbles: true
    })

    window.dispatchEvent(brightnessevent)
  }
  

  contrast(event) {
    //   alert('ttttttttt')

    const  contrastevent = new CustomEvent('contrastChange', {
        detail: {value:event},
        composed: true,
        bubbles: true
    })

    window.dispatchEvent(contrastevent)
  }



  saturate(event) {
    //   alert('ttttttttt')

    const  saturateevent = new CustomEvent('saturateChange', {
        detail: {value:event},
        composed: true,
        bubbles: true
    })

    window.dispatchEvent(saturateevent)
  }

  blur(event) {
    //   alert('ttttttttt')

    const  blurevent = new CustomEvent('blurChange', {
        detail: {value:event},
        composed: true,
        bubbles: true
    })

    window.dispatchEvent(blurevent)
  }

    
    
  


  connectedCallback(){
    super.connectedCallback()
    window.addEventListener('open-image-toolbar', (event) => {

    this.customImgtools()
    

    event.stopPropagation()
    })

    

    window.addEventListener('newImg', (event) => {
        this.noImg = !event.detail.state
        document.querySelector('.testttt').style.display = 'block'
    
    })

    window.addEventListener('image-settings', (event) => {
        document.querySelector('.editImage').style.display = 'block'


    })
  }



  render() {
    return html`
      



      <div class="customImgToolbar toolbar" style="display:none">
        <i class="close fa fa-close" @click=${this.closeCustomimgtools}></i>
        
        <div class="tab">
          <ul class="nav nav-tabs customtab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                data-toggle="tab"
                href="#Content"
                role="tab"
                aria-selected="true"
                >Content</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="tab"
                href="#Design"
                role="tab"
                aria-selected="false"
                >Animations </a
              >
            </li>

            <li class="nav-item">
              <a
                class="nav-link testttt"
                data-toggle="tab"
                href="#editor"
                role="tab"
                aria-selected="false"
                >  Editor </a
              >
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade show active" id="Content" role="tabpanel">
              <div class="pd-20 ">
                <div class="bgsw">
                 

                  <div class="secsw1">
                      <input type="file"  @change=${this.uploadImage} class="secImg-main img-file" name="file" />
                      <i class="fa fa-upload" style="font-size: 30px;"></i>
                      <p>Upload Image</p>
                      
                      
                  </div>
                  <br><br>
                    
                        <input type="text" placeholder="Image Name">
                        
                    
                  <br><br>

                  <div class="search-img text-center">
                        
                  <!-- <button @click=${()=>{this.noImg=!this.noImg}}>ffdfdfvd</button> -->

                            ${this.noImg? html `<a href="">Search Image <i class="fa fa-search"></i></a>` : html `<a data-toggle="tab"
                href="#editor"
                role="tab"
                aria-selected="false" >Image Editor <i class="fa fa-image"></i></a>` }
                       
                  </div>
                  <div class="edit-img-area text-center">
                        
                            
                       
                  </div>

                </div>

                

              </div>

            </div>
            <div class="tab-pane fade" id="Design" role="tabpanel">
              <div class="pd-20">
                <div class="container" style="width:300px">
                    <div class="row">

                    <div class="col-sm-3 styleicons">
                        inline
                    </div>
                    <div class="col-sm-3 styleicons">
                        overlay
                    </div>
                    <div class="col-sm-3 styleicons">
                        card
                    </div>
                    <div class="col-sm-3 styleicons">
                        collage
                    </div>
                    <div class="col-sm-3 styleicons">
                        inline
                    </div>

                    </div>

                </div>
              </div>
            </div>

            <div class="tab-pane fade" id="editor" role="tabpanel" >
              <div class="pd-20"  >
                <div class="container">
                    <div class="row">

                    <div class="col-sm-15 styleicons" style="width: 100%; overflow-y: scroll;">

                    <input type="range" min="0" @input=${(event) => {this.brightness(event.target.value)}}  max="200"   id="myRange">
                    <p>Brightness</p>

                    <input type="range" min="0" max="100" @input=${(event) => {this.contrast(event.target.value)}}   id="myRange">
                    <p>Contrast</p>

                    <input type="range" min="0" max="100" @input=${(event) => {this.saturate(event.target.value)}}   id="myRange">
                    <p>Saturation</p>

                    <input type="range" min="0" max="100" value="50"  id="myRange">
                    <p>Sharpness</p>

                    <input type="range" min="0" max="100" @input=${(event) => {this.blur(event.target.value)}} id="myRange">
                    <p>Blur</p>

                    <input type="range" min="0" max="100" value="50"  id="myRange">
                    <p>Highlights</p>

                    <input type="range" min="0" max="100" value="50"  id="myRange">
                    <p>Shadows</p>

                    </div>



                    </div>

                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>












      <div class="editImage hoverSetBlock" style="display:none">
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
              </div>

   
    `;
  }
}
