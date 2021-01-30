import { html, LitElement, property } from 'lit-element';
import { routerSubject$ } from '../../../settings/util/page-router';
import { getHeaderFromFirebase } from '../../../secure/firebase.config';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SubSink } from 'subsink';
// import './edit';

import './components/buttons/groovy-wired-button';
import './components/textarea/g-wired-textarea';
import './components/sidebar/sidetoolbar';
import './components/image/g-wired-image';
import './components/video/g-wired-video';
import './components/textarea/g-custom-textarea';
import './components/image/g-custom-img';
import './components/grids/g-flex-hor-grid';
import './components/grids/spacer';
import './components/video/g-custom-video';
import './components/image/img-toolbar';
import './components/video/video-toolbar';
import './components/line/g-custom-line';
import './components/embed/g-custom-embed';
import './components/line/line-toolbar';
import './components/buttons/g-custom-button';
import './components/buttons/btn-toolbar';
import './components/embed/embed-toolbar';
import './components/audio/g-custom-audio';
import './components/audio/audio-toolbar';
import './components/Social-btn/g-custom-facebookBtn';
import './components/Social-btn/g-custom-twitterBtn';
import './components/Social-btn/g-custom-instagramBtn';
import './components/Social-btn/g-custom-linkedinBtn';
import './components/Social-btn/g-custom-flickr';
import './components/Social-btn/g-custom-rssBtn';
import './components/Social-btn/g-custom-snapchatBtn';
import './components/Social-btn/g-custom-pinterestBtn';
import './components/Social-btn/g-custom-redditBtn';
import './components/static/g-custom-codeEditor';
import './components/static/codeEditor';
import './components/Social-btn/toolbar/facebook';
import './components/Social-btn/toolbar/flickr';
import './components/Social-btn/toolbar/instagram';
import './components/Social-btn/toolbar/linkedin';
import './components/Social-btn/toolbar/pinterest';
import './components/Social-btn/toolbar/reddit';
import './components/Social-btn/toolbar/rss';
import './components/Social-btn/toolbar/snapchat';
import './components/Social-btn/toolbar/twitter';
import './components/Layouts/g-custom-grids';
import './components/Service/g-custom-countdown';
import './components/nav/navbarOne';
import './components/sections/settings/section-editBtn';
import './components/sections/settings/section-toolbar';
import './components/nav/settings/pageNav-toolbar';

class main extends LitElement {
  createRenderRoot() {
    return this;
  }

  subs = new SubSink();
  templatesubject$ = new BehaviorSubject([]);

  header$ = getHeaderFromFirebase().pipe(
    tap((theheader) => {
      this.header = theheader;

      // setTimeout(() => {
      //   document.getElementById('stuff').innerHTML = theheader[0].h1.html
      // }, 2000);
    }),
  );

  currentId = null;
  currentDivId = null;

  @property()
  header = [];

  connectedCallback() {
    super.connectedCallback();
    routerSubject$.next(false);

  
   

    window.addEventListener('removeTextarea', (event) =>{


      document.querySelector('.droppables').removeChild(event.detail.host)
      // alert('zxdfcgvhbjn')
    })

    window.addEventListener('removeBtn', (event) =>{


      document.querySelector('.droppables').removeChild(event.detail.host)
      // alert('zxdfcgvhbjn')
    })

    window.addEventListener('sitenameChange', (event) =>{
      alert('working')
      document.querySelector('navbar-one').sitename = event.detail.value
      // alert('zxdfcgvhbjn')
    })


    window.addEventListener('facebookSrcChange', (event) =>{
      document.querySelector('groovy-custom-facebookbtn').src = event.detail.value
      // alert('zxdfcgvhbjn')
    })

    window.addEventListener('facebookBtnChange', (event) =>{
      document.querySelector('groovy-custom-facebookbtn').size = event.detail.value
      // alert('zxdfcgvhbjn')
    })

    window.addEventListener('facebookTypeChange', (event) =>{
      document.querySelector('groovy-custom-facebookbtn').btnType = event.detail.value
      // alert('zxdfcgvhbjn')
    })


    window.addEventListener('flickrSrcChange', (event) =>{
      document.querySelector('groovy-custom-flickrbtn').src = event.detail.value
      // alert('zxdfcgvhbjn')
    })

    window.addEventListener('flickrBtnChange', (event) =>{
      document.querySelector('groovy-custom-flickrbtn').size = event.detail.value
      // alert('zxdfcgvhbjn')
    })

    window.addEventListener('flickrTypeChange', (event) =>{
      document.querySelector('groovy-custom-flickrbtn').btnType = event.detail.value
      // alert('zxdfcgvhbjn')
    })


    window.addEventListener('instagramSrcChange', (event) =>{
      document.querySelector('groovy-custom-instagrambtn').src = event.detail.value
      // alert('zxdfcgvhbjn')
    })

    window.addEventListener('instagramBtnChange', (event) =>{
      document.querySelector('groovy-custom-instagrambtn').size = event.detail.value
      // alert('zxdfcgvhbjn')
    })

    window.addEventListener('instagramTypeChange', (event) =>{
      document.querySelector('groovy-custom-instagrambtn').btnType = event.detail.value
      // alert('zxdfcgvhbjn')
    })


    window.addEventListener('linkedinSrcChange', (event) =>{
      document.querySelector('groovy-custom-linkedinbtn').src = event.detail.value
      // alert('zxdfcgvhbjn')
    })

    window.addEventListener('linkedinBtnChange', (event) =>{
      document.querySelector('groovy-custom-linkedinbtn').size = event.detail.value
      // alert('zxdfcgvhbjn')
    })

    window.addEventListener('linkedinTypeChange', (event) =>{
      document.querySelector('groovy-custom-linkedinbtn').btnType = event.detail.value
      // alert('zxdfcgvhbjn')
    })


    window.addEventListener('pinterestSrcChange', (event) =>{
      document.querySelector('groovy-custom-pinterestbtn').src = event.detail.value
      // alert('zxdfcgvhbjn')
    })

    window.addEventListener('pinterestBtnChange', (event) =>{
      document.querySelector('groovy-custom-pinterestbtn').size = event.detail.value
      // alert('zxdfcgvhbjn')
    })

    window.addEventListener('pinterestTypeChange', (event) =>{
      document.querySelector('groovy-custom-pinterestbtn').btnType = event.detail.value
      // alert('zxdfcgvhbjn')
    })


    window.addEventListener('redditSrcChange', (event) =>{
      document.querySelector('groovy-custom-redditbtn').src = event.detail.value
      // alert('zxdfcgvhbjn')
    })

    window.addEventListener('redditBtnChange', (event) =>{
      document.querySelector('groovy-custom-redditbtn').size = event.detail.value
      // alert('zxdfcgvhbjn')
    })

    window.addEventListener('redditTypeChange', (event) =>{
      document.querySelector('groovy-custom-redditbtn').btnType = event.detail.value
      // alert('zxdfcgvhbjn')
    })


    window.addEventListener('rssSrcChange', (event) =>{
      document.querySelector('groovy-custom-rssbtn').src = event.detail.value
      // alert('zxdfcgvhbjn')
    })

    window.addEventListener('rssBtnChange', (event) =>{
      document.querySelector('groovy-custom-rssbtn').size = event.detail.value
      // alert('zxdfcgvhbjn')
    })

    window.addEventListener('rssTypeChange', (event) =>{
      document.querySelector('groovy-custom-rssbtn').btnType = event.detail.value
      // alert('zxdfcgvhbjn')
    })


    window.addEventListener('snapchatSrcChange', (event) =>{
      document.querySelector('groovy-custom-snapchatbtn').src = event.detail.value
      // alert('zxdfcgvhbjn')
    })

    window.addEventListener('snapchatBtnChange', (event) =>{
      document.querySelector('groovy-custom-snapchatbtn').size = event.detail.value
      // alert('zxdfcgvhbjn')
    })

    window.addEventListener('snapchatTypeChange', (event) =>{
      document.querySelector('groovy-custom-snapchatbtn').btnType = event.detail.value
      // alert('zxdfcgvhbjn')
    })


    window.addEventListener('twitterSrcChange', (event) =>{
      document.querySelector('groovy-custom-twitterbtn').src = event.detail.value
      // alert('zxdfcgvhbjn')
    })

    window.addEventListener('twitterBtnChange', (event) =>{
      document.querySelector('groovy-custom-twitterbtn').size = event.detail.value
      // alert('zxdfcgvhbjn')
    })

    window.addEventListener('twitterTypeChange', (event) =>{
      document.querySelector('groovy-custom-twitterbtn').btnType = event.detail.value
      // alert('zxdfcgvhbjn')
    })



    window.addEventListener('brightnessChange', (event) =>{
      document.querySelector('groovy-custom-image').brightness = event.detail.value
      // alert('zxdfcgvhbjn')
    })

    window.addEventListener('contrastChange', (event) =>{
      document.querySelector('groovy-custom-image').contrast = event.detail.value
      // alert('zxdfcgvhbjn')
    })

    window.addEventListener('saturateChange', (event) =>{
      document.querySelector('groovy-custom-image').saturate = event.detail.value
      // alert('zxdfcgvhbjn')
    })

    window.addEventListener('blurChange', (event) =>{
      document.querySelector('groovy-custom-image').blur = event.detail.value
      // alert('zxdfcgvhbjn')
    })




    window.addEventListener('audio-uploaded', (event) => {
    

      const src = URL.createObjectURL(event.detail.file)
      

    document.querySelector('groovy-custom-audio').setAttribute('src', src)


    const newAudioevent = new CustomEvent('newAudio', {
      detail:{state: true},
      bubbles: true,
      composed: true
    })

    window.dispatchEvent(newAudioevent)
    

    
    })



    window.addEventListener('image-uploaded', (event) => {
    

      const src = URL.createObjectURL(event.detail.file)
     

    document.querySelector('groovy-custom-image').setAttribute('src', src)


    const newImgevent = new CustomEvent('newImg', {
      detail:{state: true},
      bubbles: true,
      composed: true
    })

    window.dispatchEvent(newImgevent)
    

    
    })

    window.addEventListener('videoAdded', (event) => {
    
      const src = URL.createObjectURL(event.detail.value)

    document.querySelector('groovy-custom-image').setAttribute('src', src)


    const newVideoevent = new CustomEvent('newVideo', {
      detail:{state: true},
      bubbles: true,
      composed: true
    })

    window.dispatchEvent(newVideoevent)
    

    
    })
  }

  firstUpdated() {
    this.addEventListener('closeMain', (event) => {
      event.stopPropagation();
      document.getElementById('main').style.marginLeft = '0';
    });

    this.specialEvents();
  }

  specialEvents() {
    const textNav = document.querySelector('.testnav');

    const butonHeader = document.querySelector('.header-btn');

    const addDiv = document.querySelector('.div-editbtn');
    const divs = document.querySelectorAll('.divarea');

    const editButton = document.querySelector('.edit-btn');

    const editSection = document.querySelector('.editSection');
    const sections = document.querySelectorAll('section');

 
    const droppables = document.querySelectorAll('.droppables');

    

    textNav.addEventListener('mouseover', (_) => {
      butonHeader.classList.add('permahover');
    });

    textNav.addEventListener('mouseleave', (_) => {
      butonHeader.classList.remove('permahover');
    });

    // Draggable

    // Array.from(dragabbles).map((dragabble, index) => {
    //   dragabble.setAttribute('id', `dg${index}`);
    //   dragabble.addEventListener('dragstart', (event) => {
    //     const elementTag = event.currentTarget.getAttribute('elementtag');
    //     event.dataTransfer.setData('Text', elementTag);
    //   });

    //   dragabble.addEventListener('dragging', (event) => {
    //     document.getElementById('demo').innerHTML =
    //       'The p element is being dragged';
    //   });
    // });

    // Droppables
    Array.from(droppables).map((droppable) => {
      droppable.addEventListener('dragover', (event) => {
        event.preventDefault();
        event.stopPropagation();
       

        if (event.target.classList.contains('droppables')) {
          event.target.style.border = '2px dotted red';
        }
      });

      droppable.addEventListener('drop', (event) => {
        event.stopPropagation();
        const tag = event.dataTransfer.getData('Text');
        // var nodeCopy = document.getElementById(data).cloneNode(true);

    
        const dropTag = event.currentTarget;

        const slot = event.currentTarget?.shadowRoot?.querySelector('slot')
        // alert(tag)

        console.log(dropTag)
     
        const elem = document.createElement(tag);

        
        if(tag ==='groovy-custom-image'){
          

          const event = new CustomEvent('open-image-toolbar', {
            bubbles: true,
            composed: true
          })

          window.dispatchEvent(event)
        }

        if(tag ==='groovy-custom-video'){
         

          const event = new CustomEvent('open-video-toolbar', {
            bubbles: true,
            composed: true
          })

          window.dispatchEvent(event)
        }

        if(tag ==='groovy-custom-line'){
         

          const event = new CustomEvent('open-line-toolbar', {
            bubbles: true,
            composed: true
          })

          window.dispatchEvent(event)
        }

        if(tag ==='groovy-custom-button'){
         

          const event = new CustomEvent('open-button-toolbar', {
            bubbles: true,
            composed: true
          })

          window.dispatchEvent(event)
        }

        if(tag ==='groovy-custom-embed'){
         

          const event = new CustomEvent('open-embed-toolbar', {
            bubbles: true,
            composed: true
          })

          window.dispatchEvent(event)
        }

        if(tag ==='groovy-custom-audio'){
         

          const event = new CustomEvent('open-audio-toolbar', {
            bubbles: true,
            composed: true
          })

          window.dispatchEvent(event)
        }

        if(tag ==='groovy-custom-codeeditor'){
         

          const event = new CustomEvent('open-editor', {
            bubbles: true,
            composed: true
          })

          window.dispatchEvent(event)
        }

        if(tag ==='groovy-custom-facebookbtn'){
         

          const event = new CustomEvent('open-facebook-toolbar', {
            bubbles: true,
            composed: true
          })

          window.dispatchEvent(event)
        }

        if(tag ==='groovy-custom-flickrbtn'){
         

          const event = new CustomEvent('open-flickr-toolbar', {
            bubbles: true,
            composed: true
          })

          window.dispatchEvent(event)
        }

        if(tag ==='groovy-custom-instagrambtn'){
         

          const event = new CustomEvent('open-instagram-toolbar', {
            bubbles: true,
            composed: true
          })

          window.dispatchEvent(event)
        }

        if(tag ==='groovy-custom-linkedinbtn'){
         

          const event = new CustomEvent('open-linkedin-toolbar', {
            bubbles: true,
            composed: true
          })

          window.dispatchEvent(event)
        }

        if(tag ==='groovy-custom-pinterestbtn'){
         

          const event = new CustomEvent('open-pinterest-toolbar', {
            bubbles: true,
            composed: true
          })

          window.dispatchEvent(event)
        }

        if(tag ==='groovy-custom-redditbtn'){
         

          const event = new CustomEvent('open-reddit-toolbar', {
            bubbles: true,
            composed: true
          })

          window.dispatchEvent(event)
        }

        if(tag ==='groovy-custom-rssbtn'){
         

          const event = new CustomEvent('open-rss-toolbar', {
            bubbles: true,
            composed: true
          })

          window.dispatchEvent(event)
        }

        if(tag ==='groovy-custom-snapchatbtn'){
         

          const event = new CustomEvent('open-snapchat-toolbar', {
            bubbles: true,
            composed: true
          })

          window.dispatchEvent(event)
        }

        if(tag ==='groovy-custom-twitterbtn'){
         

          const event = new CustomEvent('open-twitter-toolbar', {
            bubbles: true,
            composed: true
          })

          window.dispatchEvent(event)
        }

        if(tag ==='groovy-custom-grids'){
          elem.classList.add('droppables')
          this.specialEvents()
          
        }

        // console.log(dropTag)

        // alert(dropTag.nodeName)
        

        // if(dropTag.)
  
        
        dropTag.style.border = 'none';

       
        dropTag.appendChild(elem);
      });
    });

    

    editSection.addEventListener('mouseover', (event) => {
      editSection.classList.add('editsec');
      editButton.classList.add('edit-sec');
    });
    editButton.addEventListener('mouseover', (event) => {
      editButton.classList.add('edit-sec');
    });

    addDiv.addEventListener('mouseover', (event) => {
      addDiv.classList.add('divbtn');
    });

    let currentIndex = null;
    let currentDivIndex = null;

    Array.from(sections).forEach((sec, index) => {
      sec.setAttribute('id', index);

      addDiv.addEventListener('mouseover', (event) => {
        addDiv.classList.add('divbtn');
      });

      sec.addEventListener('mouseover', (event) => {
        const rect = event.target.getBoundingClientRect();
        const bodyRect = document.body.getBoundingClientRect();

        const ind = sec.getAttribute('id');
        this.currentId = ind;

        editButton.classList.add('edit-sec');
        editSection.classList.add('editsec');
        addDiv.classList.remove('divbtn');

        if (ind === '0') {
          editButton.style.top = `${154}px`;
          editSection.style.top = `${160}px`;
          addDiv.style.top = `${170}px`;
          currentIndex = ind;
          return;
        }
        if (ind !== currentIndex) {
          editButton.style.top = `${rect.top - bodyRect.top}px`;
          editSection.style.top = `${rect.top + 6 - bodyRect.top}px`;
          addDiv.style.top = `${rect.top + 16 - bodyRect.top}px`;
          currentIndex = ind;
        }
      });

      // sec.addEventListener('mouseover', (_) => {
      //   editSection.classList.add('editsec');
      // });

      sec.addEventListener('mouseleave', (_) => {
        // const editButton = sec.querySelector('.edit-btn');

        editButton.classList.remove('edit-sec');
        editSection.classList.remove('editsec');
        addDiv.classList.remove('divbtn');
      });

      // sec.addEventListener('mouseleave', (_) => {

      // });
    });

    $(document).ready(function () {
      $('[data-toggle="esec"]').tooltip();
      $('[data-toggle="duplicateSec"]').tooltip();
      $('[data-toggle="moveSecDown"]').tooltip();
      $('[data-toggle="moveSecUp"]').tooltip();
      $('[data-toggle="deleteSec"]').tooltip();
    });

    // SECTION HEIGHT SLIDER START

    const p = document.getElementById('hslider');
    // res = document.getElementById(`${this.currentId}`);

    p.addEventListener(
      'input',
      function () {
        document.getElementById(
          `${this.currentId}`,
        ).style.height = `${p.value}`;
        // res.innerHTML = "$" + p.value;
      },
      false,
    );

    // SECTION HEIGHT SLIDER ENDS
  }

  // secHeight1() {
  //   document.getElementById(`${this.currentId}`).style.height = '300px';
  // }
  // secHeight2() {
  //   document.getElementById(`${this.currentId}`).style.height = '500px';
  // }
  // secHeight3() {
  //   document.getElementById(`${this.currentId}`).style.height = '700px';
  // }

  // secWidth1() {
  //   const tt = document.getElementById(`${this.currentId}`);
  //   const div = tt.querySelector('div');
  //   div.style.width = '300px';
  //   // document.getElementById(`${this.currentId}`).innerText = '' ;
  //   // document.getElementById(`${this.currentId}`).appendChild(tt)
  // }
  // secWidth2() {
  //   document.getElementById(`${this.currentId}`).style.width = '500px';
  // }
  // secWidth3() {
  //   document.getElementById(`${this.currentId}`).style.width = '700px';
  // }

  

  pasteSection() {
    const view = document.querySelector(".body").innerHTML;
   console.log(view);
  }

  fullscreen() {
    const elem = document.getElementById('editor-body');
    function openFullscreen() {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
      }
    }
  }

  openLayout() {
    document.getElementById('myLayout').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
  }

  // openStyleManager() {
  //   document.getElementById('styleManager').style.width = '250px';
  //   document.getElementById('main').style.marginLeft = '250px';
  // }

  // closeLayout() {
  //   document.getElementById('myLayout').style.width = '0';
  //   document.getElementById('main').style.marginLeft = '0';
  // }

  // closeStyleManager() {
  //   document.getElementById('styleManager').style.width = '0';
  //   document.getElementById('main').style.marginLeft = '0';
  // }

  // sectools() {
  //   // document.querySelector('section').contentEditable = true;
  //   // document.querySelector('.secSettings');

  //   const secsett = document.querySelector('.secSettings');
  //   secsett.classList.add('sec-settings');
  // }
  // closeSectools() {
  //   const secsett = document.querySelector('.secSettings');
  //   secsett.classList.remove('sec-settings');
  // }

  headtools() {
    // document.querySelector('section').contentEditable = true;
    document.querySelector('.headSettings');

    const headsett = document.querySelector('.headSettings');
    headsett.classList.add('head-settings');
  }
  closeheadtools() {
    const headsett = document.querySelector('.headSettings');
    headsett.classList.remove('head-settings');
  }



  // secsw() {
  //   // Get the checkbox
  //   const sw = document.querySelector('.bgSwitch');
  //   // console.log(document.querySelector("bgSwitch"))
  //   // Get the output text
  //   const sec1 = document.querySelector('.secsw1');
  //   const sec2 = document.querySelector('.secsw2');

  //   // If the checkbox is checked, display the output text
  //   if (sw.checked === true) {
  //     sec1.style.display = 'none';
  //     sec2.style.display = 'block';
  //   } else {
  //     sec1.style.display = 'block';
  //     sec2.style.display = 'none';
  //   }
  // }

  // bgwsw() {
  //   const tt = document.getElementById(`${this.currentId}`);
  //   const sw = document.querySelector('.bgwsw');

  //   if (sw.checked === true) {
  //     document
  //       .getElementById(`${this.currentId}`)
  //       .classList.remove('container');
  //   } else {
  //     document.getElementById(`${this.currentId}`).classList.add('container');
  //   }
  // }

  // secBgtxt(event) {
  //   const sw = document.querySelector('p');

  //   if (sw) {
  //     document.getElementById(`${this.currentId}`).style.color =
  //       event.target.value;
  //   }
  // }

  // secBgC(event) {
  //   const sw = document.querySelector('.secBgC');

  //   if (sw) {
  //     document.getElementById(`${this.currentId}`).style.backgroundColor =
  //       event.target.value;
  //   }
  // }

  // duplicateSection(event) {
  //   // alert(this.currentId);
  //   const secClone = document.getElementById(`${this.currentId}`);

  //   const cln = this.cloneNodeWithAdditionalProperties(secClone);

  //   document.querySelector('.secarea').appendChild(cln);

  //   this.specialEvents();
  // }

  cloneNodeWithAdditionalProperties(node) {
    const clone = node.cloneNode(true);

    Object.keys(node).forEach((property) => (clone[property] = n[property]));

    // returning the clone to the calling context:
    return clone;
  }

  removeChild() {
    const removesec = document.getElementById(`${this.currentId}`);
    // if(this.currentId !== '0'){

    document.querySelector('.secarea').removeChild(removesec);
    // }
    // console.log(document.querySelector('.secarea'));
  }

  disconnectedCallback() {
    // this.subs.unsubscribe();
    super.disconnectedCallback();
  }

  render() {
    return html`
      <div class="main-page" id="editor-body">
        <div class="editor-header">
          <div class="editor-header-left">
            <div class="container">
              <button class="btn btn-outline-primary">Done</button>
            </div>
          </div>

          <div class="editor-header-center">
            <div class="page-selector">
              <div class="dropdown">
                <a class="" href="#" role="button" data-toggle="dropdown">
                  <span style="font-size:15px;"> <b>Home Page</b></span>
                  <p style="font-size:10px;">Page - Published</p>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list"
                >
                  <a class="dropdown-item" href="profile.html"
                    ><i class="dw dw-user1"></i> Profile</a
                  >
                  <a class="dropdown-item" href="profile.html"
                    ><i class="dw dw-settings2"></i> Setting</a
                  >
                  <a class="dropdown-item" href="faq.html"
                    ><i class="dw dw-help"></i> Help</a
                  >
                  <a class="dropdown-item" href="login.html"
                    ><i class="dw dw-logout"></i> Log Out</a
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="editor-header-right">
            <div class="tools-area">
              <a href="">
                <span class="fa fa-desktop" style="font-size:20px;"></span
              ></a>

              <a href="">
                <span class="fa fa-tablet" style="font-size:20px"></span
              ></a>
              <a href="">
                <span class="fa fa-mobile" style="font-size:20px"></span
              ></a>
              <a href="">
                <span class="dw dw-settings2" style="font-size:20px;"></span
              ></a>
              <a href="" @click=${this.fullscreen}>
                <span
                  class="icon-copy ti-fullscreen"
                  style="font-size:20px;"
                ></span>
              </a>
              <!-- <i class="material-icons"> full screen</i> -->
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click=${this.openLayout}
                >
                  L
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  @click=${this.openStyleManager}
                >
                  S
                </button>
                <button type="button" class="btn btn-primary" @click=${this.pasteSection}  >T</button>
              </div>
            </div>
            <div class="github-link">
              <a href="https://github.com/dropways/deskapp" target="_blank"
                ><img src="vendors/images/github.svg" alt=""
              /></a>
            </div>
          </div>
        </div>

        <side-tool-bar></side-tool-bar>
        <br> <br>

        <!-- EDITOR STARTS -->
        <div class="editor-main" id="main">
          <br />

          <div class="body">
            <!-- Nav AREA -->
            <navbar-one></navbar-one>
            <!-- Nav AREA Ends -->

            <!-- Sections AREA -->
            <div class="secarea sec-droppables">
              
            </div>
            <!-- Sections AREA Ends-->

          </div>
        </div>
        <!-- EDITOR ENDS -->

              <style-manager-btn></style-manager-btn>
              <toolbar-manager></toolbar-manager>
              <sec-manager></sec-manager>



              <img-toolbar></img-toolbar>
              <video-toolbar></video-toolbar>
              <line-toolbar></line-toolbar>
              <btn-toolbar></btn-toolbar>
              <embed-toolbar></embed-toolbar>
              <audio-toolbar></audio-toolbar>
              <custom-codeeditor></custom-codeeditor>
              <facebook-toolbar></facebook-toolbar>
              <flickr-toolbar></flickr-toolbar>
              <instagram-toolbar></instagram-toolbar>
              <linkedin-toolbar></linkedin-toolbar>
              <pinterest-toolbar></pinterest-toolbar>
              <reddit-toolbar></reddit-toolbar>
              <rss-toolbar></rss-toolbar>
              <snapchat-toolbar></snapchat-toolbar>
              <twitter-toolbar></twitter-toolbar>
              <navheader-btn></navheader-btn>
              

         
      </div>

      <!-- <groovy-spacer></groovy-spacer> -->


      <!-- <groovy-flex-grid class="droppables">

   
      </groovy-flex-grid> -->
    `;
  }
}

customElements.define('main-page', main);
