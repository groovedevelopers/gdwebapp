import { html, LitElement, property, customElement } from 'lit-element';


@customElement('social-management')
class main extends LitElement {
  createRenderRoot() {
    return this;
  }

  
  connectedCallback() {
    super.connectedCallback();
   
    
  }

  render() {
    return html`
       <div class="social-management">
       <div class="container">
          <div class="social-marketing-Head">
          <div class="social-marketing-Head1">
              <a href="" @click=${this.socialDash}> Dashboard</a>
            </div>
            <div class="social-marketing-Head1">
              <a href="" @click=${this.schedules}> Schedules</a>
            </div>
            <div class="social-marketing-Head1">
              <a href="" @click=${this.accManager}>Account Managers</a>
            </div>

            <div class="social-marketing-Head1">
              <a href="" @click=${this.fileManager}>File Managers</a>
            </div>

            <div class="social-marketing-Head1">
              <a href="" @click=${this.watermarks}>Watermark</a>
            </div>
            <div class="social-marketing-Head2">
             
            
              <a href="" class="social-marketing-icon" @click=${this.facebook}> <i class="fa fa-facebook" style="font-size:30px;"></i> </a>
          

            
              <a href="" class="social-marketing-icon" @click=${this.twitter}> <i class="fa fa-twitter" style="font-size:30px;"></i> </a>
            
              <a href="" class="social-marketing-icon" @click=${this.instagram}> <i class="fa fa-instagram" style="font-size:30px;"> </i> </a>

              <a href="" class="social-marketing-icon" @click=${this.socialNoti}> <i class="fa fa-bell" style="font-size:30px;"></i> </a>

              <button class="btn btn-outline-secondary  social-marketing-icon">Publish All</button>
            </div>

            
              <!-- <a href="" @click=${this.automations}>Publish All</a> -->
            
          </div>
        </div>

       

        </div>



    `;
  }
}
