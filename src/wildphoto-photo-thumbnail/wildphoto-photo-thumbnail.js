import  {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/communication-icons.js';

class WildphotoPhotoThumbnail extends PolymerElement {

    static get template() {
        return html`
            <style>
              .photo_thumbnail {
                position: relative;
                margin-top: 12px;
                box-shadow: 4px 4px 7px 0px rgba(0,0,0,0.4);
              }

              .overlay {
                position: absolute;
                top: 0;
                display: none;
                width: 100%;
                height: 100%;
                background-color: #00000070;
              }

              .photo_thumbnail:hover .overlay {
                display: block;
              }

              .overlay__author {
                margin: 0;
                padding: 3px 0 0 3px;
                color: white;
              }

              .overlay__metrics {
                position: absolute;
                top: 40%;
                width: 100%;
                display: flex;
                justify-content: center;
              }


              .overlay__metric {
                margin-right: 10px;
                color: white;
                font-size: 0.8rem;
              }

              .overlay__metrics_icon {
                height: 20px;
              }

              img {
                width: 100%;
                display: block;
              }
            </style>

            <div class="photo_thumbnail">
              <a href="/photo/[[photo.id]]">
                <img src=[[photo.src]]>
                <div class="overlay">
                  <p class="overlay__author">[[photo.author]]</p>
                  <div class="overlay__metrics">
                    <div class="overlay__metric">
                      <iron-icon class="overlay__metrics_icon" icon="icons:star"></iron-icon>
                      <span>[[photo.rating]]</span>
                    </div>
                    <div class="overlay__metric">
                      <iron-icon class="overlay__metrics_icon" icon="communication:chat-bubble"></iron-icon>
                      <span>[[photo.comments]]</span>
                    </div>
                    <div class="overlay__metric">
                      <iron-icon class="overlay__metrics_icon" icon="icons:favorite"></iron-icon>
                      <span>[[photo.likes]]</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          `
    }

    static get properties() {
        return {
            photo: {
                type: Object
            }
        }
    }



}

window.customElements.define('wildphoto-photo-thumbnail', WildphotoPhotoThumbnail);