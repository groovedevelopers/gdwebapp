import { html, LitElement, property, customElement } from 'lit-element';

@customElement('social-tool')
class main extends LitElement {
  createRenderRoot() {
    return this;
  }

  firstUpdated(){
    const dragabbles = document.querySelectorAll('.draggables');

    Array.from(dragabbles).map((dragabble, index) => {
        dragabble.setAttribute('id', `dg${index}`);
        dragabble.addEventListener('dragstart', (event) => {
            // alert('i am dragged')
          const elementTag = event.currentTarget.getAttribute('elementtag');
          event.dataTransfer.setData('Text', elementTag);
        });
  
       
      });
  }
  
  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    return html`
      

      <p class="text-center">Social Blocks</p>
          <hr />

          <div class="row">
            <div class="col-sm-3 styleicons text-center draggables" 
            draggable="true"
            elementtag="groovy-custom-twitterbtn">
              <i class="fa fa-twitter" style="font-size:20px;"></i>
              <p>Twitter</p>
            </div>
            <div 
            class="col-sm-3 styleicons draggables" 
            draggable="true"
            elementtag="groovy-custom-instagrambtn">
              <i class="fa fa-instagram" style="font-size:20px;"></i>
              <p>Instagram</p>
            </div>
            <div class="col-sm-3 styleicons draggables" 
            draggable="true"
            elementtag="groovy-custom-facebookbtn">
              <i class="fa fa-facebook" style="font-size:20px;"></i>
              <p>Facebook</p>
            </div>
            <div 
            class="col-sm-3 styleicons draggables" 
            draggable="true"
            elementtag="groovy-custom-linkedinbtn">
              <i class="fa fa-linkedin" style="font-size:20px;"></i>
              <p>Linkedin</p>

              
            </div>
            <div 
            class="col-sm-3 styleicons draggables" 
            draggable="true"
            elementtag="groovy-custom-flickrbtn">
              <i class="fa fa-flickr" style="font-size:20px;"></i>
              <p>Flickr</p>
            </div>
            <div 
            class="col-sm-3 styleicons draggables" 
            draggable="true"
            elementtag="groovy-custom-rssbtn">
              <i class="fa fa-rss-square" style="font-size:20px;"></i>
              <p>Rss</p>
            </div>
            <div 
            class="col-sm-3 styleicons draggables" 
            draggable="true"
            elementtag="groovy-custom-snapchatbtn">
              <i class="fa fa-snapchat" style="font-size:20px;"></i>
              <p>Snapchat</p>
            </div>

            <div 
            class="col-sm-3 styleicons draggables" 
            draggable="true"
            elementtag="groovy-custom-pinterestbtn">
              <i class="fa fa-pinterest" style="font-size:20px;"></i>
              <p>Pinterest</p>
            </div>
            <div 
            class="col-sm-3 styleicons draggables" 
            draggable="true"
            elementtag="groovy-custom-redditbtn">
            <i class="fa fa-reddit" style="font-size:20px;"></i>
              <p>Reddit</p>
            </div>

          </div>

          <br />
          <hr />
    `;
  }
}
