import { html, LitElement, property, customElement } from 'lit-element';

@customElement('features-sec')
class main extends LitElement {
  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    return html`
      <div class="features" 
      >


       <div class="col-sm-10 sec-draggables"
       draggable="true"
      sectiontag="custom-body">

       <img 
       src="https://firebasestorage.googleapis.com/v0/b/gdmaintest.appspot.com/o/teee.png?alt=media&token=b7783ab6-434e-41b6-8421-4640a14c05cc" 
       height="500px"
       width="300px"
       />

       </div>
       <br>
       <!-- <hr> -->

       <div class="col-sm-10 ">

       <img 
       src="https://firebasestorage.googleapis.com/v0/b/gdmaintest.appspot.com/o/teee.png?alt=media&token=b7783ab6-434e-41b6-8421-4640a14c05cc" 
       height="500px"
       width="300px"
       />

       </div>

       <br>
       <!-- <hr> -->

       <div class="col-sm-10">

       <img 
       src="https://firebasestorage.googleapis.com/v0/b/gdmaintest.appspot.com/o/teee.png?alt=media&token=b7783ab6-434e-41b6-8421-4640a14c05cc" 
       height="500px"
       width="300px"
       />

       </div>

       <br>
       <!-- <hr> -->

       <div class="col-sm-10">

       <img 
       src="https://firebasestorage.googleapis.com/v0/b/gdmaintest.appspot.com/o/teee.png?alt=media&token=b7783ab6-434e-41b6-8421-4640a14c05cc" 
       height="500px"
       width="300px"
       />

       </div>

       <br>
       <!-- <hr> -->

       <div class="col-sm-10">

       <img 
       src="https://firebasestorage.googleapis.com/v0/b/gdmaintest.appspot.com/o/teee.png?alt=media&token=b7783ab6-434e-41b6-8421-4640a14c05cc" 
       height="500px"
       width="300px"
       />

       </div>

      </div>

      <style>
        .features {
          display: none;
          height: 500px;
          width: 350px;
          position: fixed;
          z-index: 1;
          top: 25%;
          left: 17%;
          border-radius: 25px;
          background-color: white;
          overflow-x: hidden;
          /* overflow-y: scroll; */
          transition: 0.5s;
          padding-top: 30px;
          box-shadow: 1px 5px #f1f1f1;
          border: 1px solid #f1f1f1;
         
        }
      </style>
    `;
  }
}
