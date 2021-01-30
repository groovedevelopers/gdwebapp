import { html, LitElement, property, customElement } from 'lit-element';


@customElement('navbar-two')
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
        this.shadowRoot.querySelector('.navbtn').style.display = 'inline'
       
      })

      window.addEventListener('navBtnRemove', (event) =>{
        // alert('zxdfcgvhbjn')
        this.shadowRoot.querySelector('.navbtn').style.display = 'none'
       
      })

      window.addEventListener('cartbtnChange', (event) =>{
        // alert('zxdfcgvhbjn')
        this.shadowRoot.querySelector('.cartbtn').style.display = 'inline'
       
      })

      window.addEventListener('cartBtnRemove', (event) =>{
        // alert('zxdfcgvhbjn')
        this.shadowRoot.querySelector('.cartbtn').style.display = 'none'
       
      })


      window.addEventListener('userLoginChange', (event) =>{
        // alert('zxdfcgvhbjn')
        this.shadowRoot.querySelector('.userLogin').style.display = 'inline'
        this.shadowRoot.querySelector('.userRegister').style.display = 'inline'
       
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
    
<div class="header-two main-nav" style="background:${this.navColor}; ">

<!-- Menu 1 Starts -->
<div class="menu1">


<ul>

<li class="links"> <a href="" > Home</a> </li>
<li class="links"> <a href=""> Service</a> </li>
<li class="links"> <a href=""> About</a> </li>
<li class="links"> <a href=""> Contact</a> </li>

</ul>


</div>
<!-- Menu 1 Ends -->

<div class="logo">
<a class="mysitename" href="#"> ${this.logo.length>0?  html `<img src=${this.logo} width="100px" height="30px" style="object-fit: cover;" />`: this.sitename }  </a>
</div>

<div class="menu2">

<ul class="" >
        <li class="links"><a href="" class="userRegister" style="display:none;"><span  ></span> Sign Up</a></li>
        <li class="links"><a href="#" class="userLogin" style="display:none;"><span  ></span> Login</a></li>
        <li class="links">
        <a href=${this.navbtnurl} style="text-decoration:none;">
      <button class="navbtn btn btn-outline-dark" style="display:none; text-decoration:none;">${this.navbtnname} </button>
    </a>
        </li>
        <li class="links">
        <a href="">
      <span class="cartbtn fa fa-shopping-cart " style="display:none; ">
      <img src="https://img.icons8.com/emoji/${this.cartSize}/000000/shopping-cart-emoji.png"/>
      </span>
    </a>
        </li>
      </ul>



</div>

</div>


<style>
.header-two{
    display: flex;
    position: relative;
    /* border: 1px solid blue; */
    top: 0;
    /* padding: 50px; */
    
}

.menu1{
/* display: block; */
    width: 40%;
    flex: 1;
    /* float: left; */
    left:30%;
    /* padding: 20px; */
    /* border: 2px solid red; */

}

.menu2{
    width: 30%;
    /* float: left; */
    /* right: 40%; */
    flex: 1;
    /* padding: 20px; */
    /* border: 2px solid red; */
    /* height: auto */
    text-align: right;


}

.logo{
   padding: 10px;

}
.mysitename{
    text-align: center;
}


.links{
    
    display: inline;
    padding: 10px;
}

button{
display: block;
padding: 10px;
border-radius: 25px;

}

a{
    text-decoration: none;
    color: black;
}

.mobile-header{

}
.desktop-header{

}


</style>
      `;
  }
}
