import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

class WildphotoPhoto extends PolymerElement {

    static get template() {
        return html`
            <style>
              .row {
                display: flex;
                justify-content: center;
              }

              .col {
                width: 50%;
                padding-top: 20px;
              }

              img {
                width: 100%;
                box-shadow: 4px 4px 7px 0px rgba(0,0,0,0.4);
              }
            </style>
            <div class="row">
              <div class="col">
                <img src="http://wildphoto.by/photos/thumbnails/%D0%A7%D0%B5%D1%80%D0%BD%D1%8B%D0%B9%20%D0%B0%D0%B8%D1%81%D1%82.jpg">
                <p>Description</p>
                <p>В конце жаркого дня лоси нередко забираются по шею в озеро или тихую реку, где спасаются от насекомых и поедают сочную водную растительность. Лето 2015</p>
              </div>
            </div>
        `
    }

    static get properties() {
      return {
        location: {
          notify: true
        }
      }
    }

    constructor() {
      super();
      this.addEventListener('location-changed', e => {
        console.log(e);
      })
    }

    ready() {
      super.ready();
      console.log("ready");
    }

}

window.customElements.define('wildphoto-photo', WildphotoPhoto);