import { html, LitElement, property, customElement } from 'lit-element';
// import './'

@customElement('custom-body')
class main extends LitElement {
  // createRenderRoot() {
  //   return this;
  // }

  //   connectedCallback() {
  //     super.connectedCallback();
  //   }
  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
      />

      <div class="sections">
        <iframe
          class="mysec"
          style="display:none"
          src=""
          autoplay
          style="pointer-events: none;"
          poster="https://firebasestorage.googleapis.com/v0/b/gdmaintest.appspot.com/o/teee.png?alt=media&token=b7783ab6-434e-41b6-8421-4640a14c05cc"
        >
        </iframe>
        <!-- ADD SECTION BUTTON -->

        <!-- ADD SECTION BUTTON -->

        <div class="droppables">

        ddddd
          <!-- <div class="box" style="background-color:red;">A</div>
          <div class="box" style="background-color:lightblue;">B</div>
          <div class="box" style="background-color:yellow;">C</div>
          <div class="box1" style="background-color:brown;">D</div>
          <div class="box1" style="background-color:lightgreen;">E</div> -->
        </div>


      </div>

      <style>
        .sections {
          top: 0;
          width: 100%;
          height: 100%;

          position: relative;
          overflow-x: hidden;

          /* display:flex; */
        }

        .droppables {
          display: flex;
          /* flex-basis: 120px; */
          width: 100%;

        }

        .box {
          flex-shrink: 1;
        }

        .box1 {
          flex-shrink: 2;
        }

        .mysec {
          position: absolute;
          left: 0px;
          top: 0px;
          height: auto;
          width: auto;
          background-size: 100% 100%;
          /* The following will size the video to fit the full container. Not necessary, just nice.*/
          min-width: 100%;
          min-height: 100%;
          /* -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%); */
          /* transform: translate(-50%,-50%); */
          z-index: 0;
          object-fit: cover;
        }

        div {
          position: relative;
          z-index: 1;
        }
      </style>
    `;
  }
}
