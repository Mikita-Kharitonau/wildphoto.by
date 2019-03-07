import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {Router} from '@vaadin/router';
import '../wildphoto-home/wildphoto-home.js';
import '../wildphoto-signin/wildphoto-signin.js';
import '../wildphoto-signup/wildphoto-signup.js';
import '../wildphoto-header/wildphoto-header.js';
import '../wildphoto-gallery/wildphoto-gallery.js';
import '../wildphoto-photo/wildphoto-photo.js';

/**
 * @customElement
 * @polymer
 */
class WildphotoApp extends PolymerElement {
  static get template() {
    return html`
      <wildphoto-header></wildphoto-header>
      <div id="polymer-root"></div>
      <!-- <wildphoto-footer></wildphoto-footer> -->
    `;
  }
  static get properties() {
    return {
      galleryDataMock: {
        type: Number,
        value: 10
      }
    };
  }

  constructor() {
    super(0);
  }

  ready() {
      super.ready();
      const root = this.shadowRoot.getElementById('polymer-root');
      const router = new Router(root);
      router.setRoutes([
            {
                path: '/',
                redirect: '/home'
            },
            {
                path: '/home', 
                component: 'wildphoto-home'
            },
            {
                path: '/signin',
                component: 'wildphoto-signin'
            },
            {
                path: '/signup', 
                component: 'wildphoto-signup'
            },
            {
                path: '/photo', 
                component: 'wildphoto-gallery'
            },
            {
                path: '/photo/:id', 
                component: 'wildphoto-photo'
            },

      ])
  }
}

window.customElements.define('wildphoto-app', WildphotoApp);
