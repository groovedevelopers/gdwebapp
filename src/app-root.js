import {  LitElement, html, property, customElement } from 'lit-element';
import page from 'page';
import { queryString$, lazyLoad, routerSubject$ } from './settings/util/page-router';
// import { cond } from 'lodash';


@customElement('app-root')
export class AppRoot extends LitElement {

 
  createRenderRoot() {
    return this;
  }

  // 'home'|'products' |'view-product'
 
  
  @property()
  routes = '';

  connectedCallback() {
    super.connectedCallback();
    this.installRoute();
  }

  disconnectedCallback(){
    super.disconnectedCallback()
  }
 

  installRoute() {
    page.redirect('', '/home');
    page('/dashboard', (context)=> {this.changeRoute(context)});
    page('/my-dashboard', (context)=> {this.changeRoute(context)});
    page('/editor', (context)=> {this.changeRoute(context)});
    page('/register/start', (context)=> {this.changeRoute(context)});
    page('/register/templates', (context)=> {this.changeRoute(context)});
    page('/register', (context)=> {this.changeRoute(context)});
    page('/login', (context)=> {this.changeRoute(context)});
    page('/domain-search', (context)=> {this.changeRoute(context)});
    page('/online-store', (context)=> {this.changeRoute(context)});
    page('/point-of-sale', (context)=> {this.changeRoute(context)});
    page('/marketing-tools', (context)=> {this.changeRoute(context)});
    page('/email-marketing', (context)=> {this.changeRoute(context)});
    page('/professional-email', (context)=> {this.changeRoute(context)});
    page('/cloud-storage', (context)=> {this.changeRoute(context)});
    page('/scheduling', (context)=> {this.changeRoute(context)});
    page('*', (context)=> {this.changeRoute(context)});
    page()

    

  }

  changeRoute(context) {
    window.scrollTo(0,0)
    queryString$.next(context.querystring)
    routerSubject$.next(true)
    this.routes = context.pathname 
    this.requestUpdate();
    console.log(context.pathname) 

   
  }

  currentView() {
    switch (this.routes) {

      // FRONT ROUTES
      case '/home':
        
        return lazyLoad(import('./front/pages/home'),html`<front-home-page></front-home-page>`);

      case '/start':
        
        return lazyLoad(import('./front/pages/templates/start'),html`<start-page></start-page>`);

      case '/templates':
        
        return lazyLoad(import('./front/pages/templates/templates'),html`<templates-page></templates-page>`);

      case '/domain-search':
        
        return lazyLoad(import('./front/pages/domain/index'),html`<domain-name></domain-name>`);

      case '/online-store':
        
          return lazyLoad(import('./front/pages/stores/index'),html`<online-store></online-store>`);

      case '/point-of-sale':
        
          return lazyLoad(import('./front/pages/stores/pos'),html`<point-of-sale></point-of-sale>`);
      case '/marketing-tools':
        
          return lazyLoad(import('./front/pages/marketing/index'),html`<marketing-tools></marketing-tools>`);
          
      case '/email-marketing':
        
          return lazyLoad(import('./front/pages/marketing/email'),html`<email-marketing></email-marketing>`);

      case '/professional-email':
        
          return lazyLoad(import('./front/pages/marketing/profEmail'),html`<professional-email></professional-email>`);

      case '/cloud-storage':
        
            return lazyLoad(import('./front/pages/cloud/index'),html`<cloud-storage></cloud-storage>`);

      case '/scheduling':
        
          return lazyLoad(import('./front/pages/marketing/scheduling'),html`<appointment-scheduling></appointment-scheduling>`);

    // FRONT ROUTES ENDS


    // SECURE ROUTES

    case '/login':
        
        return lazyLoad(import('./secure/login'),html`<login-page></login-page>`);

    case '/register':
        
        return lazyLoad(import('./secure/register'),html`<register-page></register-page>`);

    // SECURE ROUTES ENDS


      case '/my-dashboard':
        
        return lazyLoad(import('./client/pages/home'),html`<home-page></home-page>`);
      case '/dashboard':
        
        return lazyLoad(import('./client/pages/dashboard'),html`<dashboard-page></dashboard-page>`);
      case '/editor':
        
        return lazyLoad(import('./client/pages/editor/mainarea'),html`<main-page></main-page>`);
    }
  }
  render() {
    return html`


    ${this.currentView()}

  <!-- ${this.routes !== '/dashboard' && '/home' ? html `<header-component></header-component>`: ''}
      
      
      
      ${this.routes !== '/home' ? html `<footer-component></footer-component>`: ''}




      ${this.routes !== '/dashboard' && '/dashboard/home' ? html `<front-header-component></front-header-component>`: ''}
      
      ${this.currentView()}
      
      ${this.routes !== '/dashboard' && '/dashboard/home' ? html `<front-footer-component></front-footer-component>`: ''} -->
    `
  }
}


