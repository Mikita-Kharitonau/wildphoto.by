import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

class WildphotoHeaderDropdown extends PolymerElement {
    static get template() {
        return html`
          <style>
            :host {
              margin: 0 5px;
            }

            .dropdown__header {
              display: flex;
              flex-direction: row;
              align-items: center;
            }

            @media (min-width: 768px) {
              .dropdown__menu {
                position:absolute;
              }
            }

            .dropdown__menu {
              margin: 0;
              padding: 5px;
              display: none;
              background-color: white;
              list-style-type: none;
              box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.4);
              border: 1px #80808060 solid;
              border-radius: 3px;
              z-index: 100;
            }

            .dropdown:hover {
              cursor: pointer;
            }

            .dropdown:hover > .dropdown__menu {
              display:block;
            }

            .dropdown__header_text {
              margin: 0;
            }

            .dropdown__header_icon {
              color: gray;
              width: 20px;
            }

            .dropdown__menu a {
              text-decoration: none;
              color: black;
            }

            .dropdown__menu_item {
              padding: 5px;
              border-radius: 3px;
            }

            .dropdown__menu_item:hover {
              background-color: #efefef;
              cursor: pointer;
            }
          </style>

          <div class="dropdown">
            <div class="dropdown__header">
              <p class="dropdown__header_text">[[headerText]]</p>
              <iron-icon class="dropdown__header_icon" icon="icons:arrow-drop-down"></iron-icon>
            </div>
            <ul class="dropdown__menu">
              <dom-repeat items=[[menuItems]]>
                <template>
                  <li class="dropdown__menu_item"><a href=[[item.href]]>[[item.text]]</a></li>
                </template>
              </dom-repeat>
            </ul>
          </div>
        `
    }

    static get properties() {
      return {
          headerText: {
            type: String,
          },
          menuItems: {
            type: Array,
            value: []
          }
      }
    }
}

window.customElements.define('wildphoto-header-dropdown', WildphotoHeaderDropdown);