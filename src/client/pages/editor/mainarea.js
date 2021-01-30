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
import './components/Layouts/g-custom-spacer';
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
import './components/editor-header/header';
import './components/nav/settings/nav-editBtn';
import './components/editor-header/settings/index';
import './components/nav/settings/pageNav-toolbar';
import './components/sidebar/sections/features.js';
import './components/sidebar/sections/features-sec/first';
import './components/nav/navbarTwo';
import './components/nav/navbarThree';
import './components/nav/navbarFour';
import './components/nav/navbarFive';
import './components/nav/navbarSix';
import './components/nav/index';

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


      document.querySelector('.droppables').shadowRoot.querySelector('section').removeChild(event.detail.host)
      // alert('zxdfcgvhbjn')
    })

    window.addEventListener('removeBtn', (event) =>{


      document.querySelector('.droppables').removeChild(event.detail.host)
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
    this.mouseover();
  }

  specialEvents() {
    const textNav = document.querySelector('.main-nav');

    const butonHeader = document.querySelector('.header-edit-btn');
    

    // const addDiv = document.querySelector('.div-editbtn');
    // const divs = document.querySelectorAll('.divarea');

    

 
    const droppables = document.querySelectorAll('.droppables');

    const secdroppables = document.querySelectorAll('.sec-droppables');

    

    



    textNav.addEventListener('mouseover', (_) => {

      butonHeader.style.display = 'block'
     
    });

    butonHeader.addEventListener('mouseover', (_) =>{
      butonHeader.style.display = 'block'
    })

    textNav.addEventListener('mouseleave', (_) => {
      butonHeader.style.display = 'none'
    });

    butonHeader.addEventListener('mouseleave', (_) =>{
      butonHeader.style.display = 'none'
    })





     // Sections Droppables
     Array.from(secdroppables).map((secdroppable) => {
      secdroppable.addEventListener('dragover', (event) => {
        event.preventDefault();
        event.stopPropagation();
       

        if (event.target.classList.contains('sec-droppables')) {
          event.target.style.border = '2px solid blue';
        }
      });

      secdroppable.addEventListener('drop', (event) => {
        // alert('woking')
        event.stopPropagation();
        const tag = event.dataTransfer.getData('Text');
        
        // var nodeCopy = document.getElementById(data).cloneNode(true);

    
        const dropTag = event.currentTarget;

        const slot = event.currentTarget?.shadowRoot?.querySelector('slot')
        // 
// this.specialEvents()
        // alert(tag)
     
        const elem = document.createElement(tag);

        if(tag === 'custom-body'){
          elem.classList.add('sections')
          elem.classList.add('droppables')
        setTimeout(() => {
          this.specialEvents()
        }, 0);

        }
        dropTag.style.border = 'none';

       
        dropTag.appendChild(elem);
        this.mouseover()
      });

    });









    console.log(droppables)
   

    // Layouts Droppables
    Array.from(droppables).map((droppable) => {
      droppable.addEventListener('dragover', (event) => {
        // alert(',,,,,,,')
        event.preventDefault();
        event.stopPropagation();

      
       

        if (event.target.classList.contains('droppables')) {
          event.target.style.border = '2px dotted blue';
        }
      });

      droppable.addEventListener('drop', (event) => {
        event.stopPropagation();
        const tag = event.dataTransfer.getData('Text');
        // var nodeCopy = document.getElementById(data).cloneNode(true);

    
        const dropTag = event.currentTarget;

        const slot = event.currentTarget?.shadowRoot?.querySelector('slot')
        // alert(event.currentTarget.nodeName)
        // alert(tag)

        // console.log(dropTag)
     
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

       
        dropTag.shadowRoot.querySelector('.droppables').appendChild(elem);
      });
    });

    

   

    $(document).ready(function () {
      $('[data-toggle="esec"]').tooltip();
      $('[data-toggle="duplicateSec"]').tooltip();
      $('[data-toggle="moveSecDown"]').tooltip();
      $('[data-toggle="moveSecUp"]').tooltip();
      $('[data-toggle="deleteSec"]').tooltip();
    });

    // SECTION HEIGHT SLIDER START

    // const p = document.getElementById('hslider');
    // // res = document.getElementById(`${this.currentId}`);

    // p.addEventListener(
    //   'input',
    //   function () {
    //     document.getElementById(
    //       `${this.currentId}`,
    //     ).style.height = `${p.value}`;
    //     // res.innerHTML = "$" + p.value;
    //   },
    //   false,
    // );

    // SECTION HEIGHT SLIDER ENDS
  }


  mouseover(){
    const editButton = document.querySelector('.edit-btn');

    const editSection = document.querySelector('.editSection');
    const sections = document.querySelectorAll('.sections');


    editSection.addEventListener('mouseover', (event) => {
      editSection.classList.add('editsec');
      editButton.classList.add('edit-sec');
    });
    editButton.addEventListener('mouseover', (event) => {
      editButton.classList.add('edit-sec');
    });

    // addDiv.addEventListener('mouseover', (event) => {
    //   addDiv.classList.add('divbtn');
    // });

    let currentIndex = null;
    // let currentDivIndex = null;

    Array.from(sections).forEach((sec, index) => {
      
      sec.setAttribute('id', index);

      // addDiv.addEventListener('mouseover', (event) => {
      //   addDiv.classList.add('divbtn');
      // });

      sec.addEventListener('mouseover', (event) => {
        
        const rect = event.target.getBoundingClientRect();
        const bodyRect = document.body.getBoundingClientRect();

        const ind = sec.getAttribute('id');
        this.currentId = ind;


        const sectionsevent = new CustomEvent('sections', {
          detail:{value: ind},
          bubbles: true,
          composed: true
        })
    
        window.dispatchEvent(sectionsevent)



        editButton.classList.add('edit-sec');
        editSection.classList.add('editsec');
        // addDiv.classList.remove('divbtn');

        

        // if (ind === '0') {
        //   editButton.style.top = `${154}px`;
        //   editSection.style.top = `${160}px`;
        //   // addDiv.style.top = `${170}px`;
        //   currentIndex = ind;
        //   return;
        // }
        if (ind !== currentIndex) {
          editButton.style.top = `${rect.top - bodyRect.top}px`;
          editSection.style.top = `${rect.top + 6 - bodyRect.top}px`;
          // addDiv.style.top = `${rect.top + 16 - bodyRect.top}px`;
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
        // addDiv.classList.remove('divbtn');
      });

      // sec.addEventListener('mouseleave', (_) => {

      // });
    });
  }
 
  


  

  disconnectedCallback() {
    // this.subs.unsubscribe();
    super.disconnectedCallback();
  }

  render() {
    return html`
      <div class="main-page" id="editor-body">
       <editor-header></editor-header>

        <side-tool-bar></side-tool-bar>
        <br> <br>

        <!-- EDITOR STARTS -->
        <div class="editor-main" id="main">
          <br />

          <div class="body">
            <!-- Nav AREA -->
            <navbar-main class="main-nav"></navbar-main>
             <!-- Nav AREA Ends -->

            <!-- Sections AREA -->
            <div class="secarea secarea-full sec-droppables"></div>
            <!-- Sections AREA Ends-->

          </div>
        </div>
        <!-- EDITOR ENDS -->
              <style-manager-btn class="edit-btn"></style-manager-btn>
              <toolbar-manager class="editSection"></toolbar-manager>
              <sec-manager class="secSettings"></sec-manager>
              <nav-btn class="header-edit-btn"></nav-btn>
              <navheader-btn></navheader-btn>

             
              <pageConfig-modal></pageConfig-modal>
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


              <features-sec></features-sec>
              <!-- <custom-body></custom-body> -->
              
              

         
      </div>

      <!-- <groovy-spacer></groovy-spacer> -->


      <!-- <groovy-flex-grid class="droppables">

   
      </groovy-flex-grid> -->
    `;
  }
}

customElements.define('main-page', main);
