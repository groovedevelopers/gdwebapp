import { html, LitElement, property, customElement } from 'lit-element';


@customElement('navbar-one')
class main extends LitElement {

    @property()
    sitename = 'Groovy'
 lastcolor = ''

    @property()
    logo = ''

    @property()
    mobilelogo = ''

    @property()
    navbtnname = 'Get Started'

    @property()
    navbtnurl = ''

    @property()
    cartSize = '15'

    @property()
    navColor = ''


    @property()
    navPosition = ''

    @property()
    userLogin = ''

    @property()
    userRegister = ''


    @property()
    setsitename(sitename){
     this.sitename = sitename
    }

    @property()
    setlogo(logo){
     this.logo = logo
    }

    @property()
    setmobilelogo(mobilelogo){
     this.mobilelogo = mobilelogo
    }

    @property()
    setnavbtnname(navbtnname){
     this.navbtnname = navbtnname
    }

    @property()
    setnavbtnurl(navbtnurl){
     this.navbtnurl = navbtnurl
    }

    @property()
    setnavPosition(navPosition){
     this.navPosition = navPosition
    }

    @property()
    setuserLogin(userLogin){
     this.userLogin = userLogin
    }

    @property()
    setuserRegister(userRegister){
     this.userRegister = userRegister
    }



   

    


    

    connectedCallback(){
      super.connectedCallback()

      window.addEventListener('navbtnChange', (event) =>{
        // alert('zxdfcgvhbjn')
        this.shadowRoot.querySelector('.navbtn').style.display = 'block'
       
      })

      window.addEventListener('navBtnRemove', (event) =>{
        // alert('zxdfcgvhbjn')
        this.shadowRoot.querySelector('.navbtn').style.display = 'none'
       
      })

      window.addEventListener('cartbtnChange', (event) =>{
        // alert('zxdfcgvhbjn')
        this.shadowRoot.querySelector('.cartbtn').style.display = 'block'
       
      })

      window.addEventListener('cartBtnRemove', (event) =>{
        // alert('zxdfcgvhbjn')
        this.shadowRoot.querySelector('.cartbtn').style.display = 'none'
       
      })


      window.addEventListener('userLoginChange', (event) =>{
        // alert('zxdfcgvhbjn')
        this.shadowRoot.querySelector('.userLogin').style.display = 'block'
        this.shadowRoot.querySelector('.userRegister').style.display = 'block'
       
      })

      window.addEventListener('userLoginRemove', (event) =>{
        // alert('zxdfcgvhbjn')
        this.shadowRoot.querySelector('.userLogin').style.display = 'none'
        this.shadowRoot.querySelector('.userRegister').style.display = 'none'
       
      })



      window.addEventListener('bgChange', (event) =>{
        // alert('zxdfcgvhbjn')
      
        
       const el = this.shadowRoot.querySelector('.main-nav')
       this.lastcolor = el.style.background
       el.style.background = 'transparent'
       
      })

      window.addEventListener('bgRemove', (event) =>{
        // alert('zxdfcgvhbjn')
        this.shadowRoot.querySelector('.main-nav').style.background = this.lastcolor
       
      })


      window.addEventListener('navpositionChange', (event) =>{
        // alert('zxdfcgvhbjn')
        this.shadowRoot.querySelector('.main-nav').style.position = 'fixed'
        this.shadowRoot.querySelector('.main-nav').style.width = '100%'
        this.shadowRoot.querySelector('.main-nav').style.top = '0'
        this.shadowRoot.querySelector('.main-nav').style.overflow = 'hidden'
       
      })

      window.addEventListener('navpositionRemove', (event) =>{
        // alert('zxdfcgvhbjn')
        this.shadowRoot.querySelector('.main-nav').style.position = 'relative'
       
      })

    }
  render() {
    return html`
    

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script> -->

  <nav class=" navbar-inverse main-nav" style="background:${this.navColor};">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand mysitename" href="#"> ${this.logo?  html `<img src=${this.logo} width="100px" height="30px" style="object-fit: cover;" />`: this.sitename }  </a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav" >
        <li class="active"><a href="#">Home</a></li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Page 1-1</a></li>
            <li><a href="#">Page 1-2</a></li>
            <li><a href="#">Page 1-3</a></li>
          </ul>
        </li>
        <li><a href="#">Page 2</a></li>
        <li><a href="#">Page 3</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right" >
        <li><a href="" class="userRegister" style="display:none;"><span  ></span> Sign Up</a></li>
        <li><a href="#" class="userLogin" style="display:none;"><span  ></span> Login</a></li>
        <li>
        <a href=${this.navbtnurl} style="text-decoration:none;">
      <button class="navbtn btn btn-outline-dark" style="display:none; text-decoration:none;">${this.navbtnname}</button>
    </a>
        </li>
        <li>
        <a href="">
      <span class="cartbtn fa fa-shopping-cart " style="display:none; ">
      <img src="https://img.icons8.com/emoji/${this.cartSize}/000000/shopping-cart-emoji.png"/>
      </span>
    </a>
        </li>
      </ul>

      
    </div>

    

    

   
  </div>
</nav>
      `;
  }
}
