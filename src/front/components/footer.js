import { html, LitElement } from 'lit-element';

class footer extends LitElement {
  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    return html`

<!-- Footer Start -->
		
  <!-- ================ start footer Area ================= -->
  <section class="footer-area">
        <div class="container">
            <div class="row">
            <div class="col-lg-3 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
                        <a class="mysitename" href="#"> <img src="https://firebasestorage.googleapis.com/v0/b/gdmaintest.appspot.com/o/white_logo_transparent_background.png?alt=media&token=5861bdc6-7720-4f27-b5df-cf0e18745baf" width="100px" height="30px" style="object-fit: cover;" />  </a>


                        
                        <div class="form-group" style="padding:10px;">
                            <!-- <label for="sel1">Select list:</label> -->
                            <select class="form-control" id="sel1">
                                <option>English</option>
                                <option value="$1">Polski</option>
                                <option value="$1">Español</option>
                                <option value="">Deutsch</option>
                                <option value="">Italiano</option>
                                <option value="">Português</option>
                                <option value="">Français</option>
                            </select>
                        </div>
            <!-- <div class="input-group-prepend" > -->
            <div class="form-group" style="padding:10px;">
                            <!-- <label for="sel1">Select list:</label> -->
                            <select class="form-control" id="sel1">
                                <option value="$1">USD</option>
                                <option value="$1">EUR</option>
                                <option value="$1">PLN</option>
                                <option value="">NGN</option>
                            </select>
                        </div>
           
          
                        
                </div>

                <div class="col-lg-3 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
                    <h4>Products</h4>
                    <ul>
                        <li class="footer-links"><a href="domain-search">Domains</a></li>
                        <li class="footer-links"><a href="templates">Website Templates</a></li>
                        <li class="footer-links"><a href="online-store">Online Stores</a></li>
                        <li class="footer-links"><a href="point-of-sale">Point Of Sales</a></li>
                        <li class="footer-links"><a href="marketing-tools">Marketing Tools</a></li>
                        <li class="footer-links"><a href="email-marketing">Email Marketing</a></li>
                        <li class="footer-links"><a href="professional-email">Professional Email</a></li>
                        <li class="footer-links"><a href="cloud-storage">Cloud Storage</a></li>
                        <li class="footer-links"><a href="scheduling">Scheduling</a></li>
                    </ul>
                </div>

                <div class="col-lg-3 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
                    <h4>Company</h4>
                    <ul>
                        <li class="footer-links"><a href="#">About</a></li>
                        <li class="footer-links"><a href="#">Privacy Policy</a></li>
                        <li class="footer-links"><a href="#">Press &amp; Media</a></li>
                        <li class="footer-links"><a href="#">Careers</a></li>
                        <li class="footer-links"><a href="#">Affliates</a></li>
                        <li class="footer-links"><a href="#">Cookies</a></li>
                    </ul>   
                </div>

                <div class="col-lg-3 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
                    <h4>Community</h4>
                    <ul>
                        <li class="footer-links"><a href="#">Hire an expert</a></li>
                        <li class="footer-links"><a href="#">Forum</a></li>
                        <li class="footer-links"><a href="#">Webinars</a></li>
                        <li class="footer-links"><a href="#">Help &amp; Support</a></li>
                        <li class="footer-links"><a href="#">Privacy &amp; Policy</a></li>
                        <li class="footer-links"><a href="#">GD News Stand</a></li>
                    </ul>
                </div>

                <!-- <div class="col-lg-3 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
                    <h4>Follow Us</h4>
                    <ul>
                        <li class="footer-links"><a href="#">GD News Stand</a></li>
                        <li class="footer-links"><a href="#">Instagram</a></li>
                        <li class="footer-links"><a href="#">Facebook</a></li>
                        <li class="footer-links"><a href="#">Youtube</a></li>
                        <li class="footer-links"><a href="#">Linkedin</a></li>
                        <li class="footer-links"><a href="#">Twitter</a></li>
                        <li class="footer-links"><a href="#">Blog</a></li>
                    </ul>
                </div> -->

            </div>
        </div>
        <div class="footer-bottom text-center">
            <p class="footer-text">
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved Groove Developers Inc</p>
            <div class="social">
                <!-- <a href="${this.settings?.facebook}" target="_blank"><i class="ti-facebook"></i></a> -->
                <a href="" class="social-links " target="_blank"><i class="fa fa-facebook"></i></a>
                <a href="" class="social-links " target="_blank"><i class="fa fa-twitter"></i></a>
                <a href="" class="social-links " target="_blank"><i class="fa fa-instagram"></i></a>
                <a href="" class="social-links " target="_blank"><i class="fa fa-linkedin"></i></a>
            </div>
        </div>
    </div>
  </section>
<!-- ================ End footer Area ================= -->

    `;
  }
}

customElements.define('footer-component', footer);
