import { html, LitElement, property, customElement } from 'lit-element';


@customElement('navbar-three')
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



   

    openNav(){
        // alert('ddddddd')
        this.shadowRoot.querySelector('.menu1').style.display = 'block';
    }

    closeNav(){
        this.shadowRoot.querySelector('.menu1').style.display = 'none';
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
    
<div class="header-three main-nav" style="background:${this.navColor};">

<div class="slideBtn" @click=${this.openNav}>
<img src="https://img.icons8.com/android/24/000000/menu.png"/>

</div>

<!-- Menu 1 Starts -->
<div class="menu1">
<div class="closeSlide" @click=${this.closeNav}><a href="">&#10060;</a></div>
<br>

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
        <li class="components"><a href="" class="userRegister" style="display:none;"><span  ></span> Sign Up</a></li>
        <li class="components"><a href="#" class="userLogin" style="display:none;"><span  ></span> Login</a></li>
        <li class="components">
        <a href=${this.navbtnurl} class="navbtn" style="text-decoration:none; display:none;">
      ${this.navbtnname} 
    </a>
        </li>
        <li class="components">
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
.header-three{
    display: flex;
    position: relative;
    align-items: center;
    /* flex-direction: row; */
    top: 0;
    margin:auto;
    /* padding: 50px; */
}

.components{
    display: inline;
    padding: 10px;
}

.menu1{
    display: none;
    height: 70%;
    width: 300px;
    position: fixed;
    z-index: 1;
    top: 13%;
	left: 10px;
	border-radius: 25px;
    background-color: #f1f1f1;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    /* flex: 1; */
    padding:10px;
    box-shadow: 3px 3px 5px #f1f1f1;

    /* border: 2px solid red; */

}

.slideBtn{
    width: 30%;
    flex: 1;
    left:20%;
    padding: 10px;
    /* border: 2px solid red; */
}

.closeSlide{
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
    padding:10px;
}

.menu2{
    width: 30%;
    text-align:right;
    flex:1;
    height:50px;
    /* left:60%; */
    /* border: 2px solid red; */
    max-height:100%;


}

.logo{
   padding: 10px;
   /* border: 2px solid red; */

}
.mysitename{
    text-align: center;
}


.links{
    
    display: block;
    padding: 20px;
}

.navbtn{
display: block;
padding: 10px;
border-radius: 25px;
box-shadow: 3px 3px 5px #f1f1f1;

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
