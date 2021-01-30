import { html, LitElement, property, customElement } from 'lit-element';


@customElement('groovy-custom-video')
class main extends LitElement {

    @property()
    src = 'https://www.youtube.com/embed/l6QMJniQWxQ?list=RDOdkPvFE2wac'

    @property()
    allowfullscreen = true

    @property()
    frameborder="0" 

     @property()
     width="806"

     @property()
     height="473"

     @property()
     poster=""

     @property()
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 

    @property()
    setSrc(src){
     this.src = src
    }

    @property()
    setAllowfullscreen(allowfullscreen){
     this.allowfullscreen = allowfullscreen
    }

    @property()
    setFrameborder(frameborder){
     this.frameborder = frameborder
    }

    @property()
    setWidth(width){
     this.width = width
    }

    @property()
    setHeight(height){
     this.height = height
    }

    @property()
    setAllow(allow){
     this.allow = allow
    }

    firstUpdated(){
        const iframe = document.querySelectorAll('.iframe');

        Array.from(iframe).forEach(frame =>{
            
            frame.currentTarget.addEventListener('mouseover', (event) => {
                event.stopPropagation()
                iframe.classList.add('editFrame');
                
              });

        })
        
      
    }

    // connectedCallback(){
    //   super.connectedCallback()
    // }
  render() {
    return html`
        

<iframe 
width=${this.width} 
height=${this.height}
src=${this.src}
frameborder=${this.frameborder} 
allow=${this.allow}
allowfullscreen=${this.allowfullscreen}
poster=${this.poster}
>
</iframe>
<div class="iframe">
    testnavtest
</div>


<style>
    .iframe {
        display: none;
    }

    .editFrame {
	display: block;
	left: 65%;
	position: absolute;
	border-radius: 25px;
	background-color: #ffff;
	border:  1px solid #ffff;
	width: auto;
	color:#000;
	top: 160px;
	padding: 10px;
	  box-shadow: 1px 5px #f1f1f1;
	  z-index: 10;
	  
	  
	
	
}
</style>
        `;
  }
}
