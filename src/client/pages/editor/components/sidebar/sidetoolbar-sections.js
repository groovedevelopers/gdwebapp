import { html, LitElement, property, customElement } from 'lit-element';
import './sections/accordions';
import './sections/blank';
import './sections/blogs';
import './sections/contactus';
import './sections/features';
import './sections/pricing';
import './sections/projects';
import './sections/teams';
import './sections/testimonials';




@customElement('side-sections')
class main extends LitElement {
  createRenderRoot() {
    return this;
  }

  firstUpdated(){

    const secdragabbles = document.querySelectorAll('.sec-draggables');

    Array.from(secdragabbles).map((dragabble, index) => {
        dragabble.setAttribute('id', `dg${index}`);
        dragabble.addEventListener('dragstart', (event) => {
            // alert('i am dragged')
          const sectiontag = event.currentTarget.getAttribute('sectiontag');
          event.dataTransfer.setData('Text', sectiontag);
          // alert(sectiontag)
        });
  
        
       
      });

      
    
 
    const featuresSec = document.querySelector('.featuresSec');
    const allFeaturesSec = document.querySelector('.features');


    featuresSec.addEventListener('mouseover', (_) => {
      // alert('ddddddd')
            allFeaturesSec.style.display = 'block'
           
          });

          allFeaturesSec.addEventListener('mouseover', (_) => {
            // alert('ddddddd')
                  allFeaturesSec.style.display = 'block'
                 
                });
      
          featuresSec.addEventListener('mouseleave', (_) => {
            allFeaturesSec.style.display = 'none'
          });
          allFeaturesSec.addEventListener('mouseleave', (_) => {
            allFeaturesSec.style.display = 'none'
          });
  }

  
  closeStyleManager() {
    document.getElementById('styleManager').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
  }

  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    return html`
     

     <div id="styleManager" class="styleManager">
         
     <a
          href="javascript:void(0)"
          class="closebtn"
          @click=${this.closeStyleManager}
          >&times;</a
        >
        <div class="container">
          <p class="text-center">Sections</p>
          <hr />
          <div class="row ">
            <div class="col-sm-10 styleicons text-center featuresSec">
              <i class="fa fa-font" style="font-size:20px"></i>
              <p>Features</p>
            </div>
            <div class="col-sm-10 styleicons" draggable="true">
              <img
                src="assets/images/img.svg"
                style="height:30px; width:30px;"
              />
              <p>Blogs</p>
            </div>
            <div class="col-sm-10 styleicons" draggable="true">
              <img
                src="assets/images/video.svg"
                style="height:30px; width:30px;"
              />
              <p>Teams</p>
            </div>
            <div class="col-sm-10 styleicons" draggable="true">
              <span> &mdash; </span>
              <p>Projects</p>
            </div>
            <div class="col-sm-10 styleicons" draggable="true">
              <button class="btn btn-outline-dark btn-xs" disabled>B</button>
              <p>Pricing</p>
            </div>
            <div class="col-sm-10 styleicons" draggable="true">
              <img
                src="assets/images/link.svg"
                style="height:30px; width:30px;"
              />
              <p>Testimonials</p>
            </div>
            <div class="col-sm-10 styleicons" draggable="true">
              <img
                src="assets/images/audio.svg"
                style="height:30px; width:30px;"
              />
              <p>Contact Us</p>
            </div>
            <div class="col-sm-10 styleicons" draggable="true">
              <img
                src="assets/images/audio.svg"
                style="height:30px; width:30px;"
              />
              <p>Accordions</p>
            </div>
            <div class="col-sm-10 styleicons" draggable="true">
              <img
                src="assets/images/audio.svg"
                style="height:30px; width:30px;"
              />
              <p>Blank</p>
            </div>
          </div>
        </div>
      </div>


      <features-sec></features-sec>
    `;
  }
}
