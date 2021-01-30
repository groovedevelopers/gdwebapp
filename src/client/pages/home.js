import { html, LitElement, property } from 'lit-element';
import { routerSubject$ } from '../../settings/util/page-router';
import '../components/footer';
import '../components/header';
// import { gethome } from '../util/firebase.config';
// import { switchMap, tap, map, filter } from 'rxjs/operators';
// import { BehaviorSubject, combineLatest } from 'rxjs';

// import 'elix/define/SlidingPages.js';
class home extends LitElement {
  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    routerSubject$.next(false);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  render() {
	return html`
	
	<header-component></header-component>

      <!-- <div class="mobile-menu-overlay"></div> -->
    `;
  }
}

customElements.define('home-page', home);
