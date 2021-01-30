import { html, LitElement, property, customElement } from 'lit-element';
// import '../textarea/editor'



@customElement('groovy-custom-countdown')
class main extends LitElement {
  @property()
  src = '';

  @property()
  size = 'small'

  @property()
  btnType = 'rounded'

  

  @property()
  setSrc(src) {
    this.src = src;
  }


  @property()
  setSmall(small) {
    this.small = small;
  }

  @property()
  setbtnType(btnType) {
    this.btnType = btnType;
  }

  
 


  firstUpdated(){
   

    // Set the date we're counting down to
const countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
const x = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime();
    
  // Find the distance between now and the count down date
  const distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

  
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
    
    
  }



  


  

  settings(event){
    const btnClickEvent  =  new CustomEvent('countdown-settings', {

        composed: true,
        bubbles: true
    })

    window.dispatchEvent(btnClickEvent)

  }

  clickme(){
    alert(document.querySelector('div'))
  }

  

  

  // connectedCallback(){
  //   super.connectedCallback()
  // }
  render() {
    return html`
      

      <div @click=${this.clickme} class="countdown">
          hdnmd
      </div>

      

              <!-- jhngbshjvcjvkwhchwvgv -->

      

      <style>
       p {
  text-align: center;
  font-size: 60px;
  margin-top: 0px;
}
   
       
      </style>
    `;
  }
}
