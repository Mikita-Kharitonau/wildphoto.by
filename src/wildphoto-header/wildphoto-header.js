import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../wildphoto-header-dropdown/wildphoto-header-dropdown.js'

class WildphotoHeader extends PolymerElement {
    static get template() {
        return html`
        <style>
          .navbar {
              background-color: #fff;
              display: flex;
          }

          .navbar__link,
          .navbar__logo {
              padding-left: 8px;
              padding-right: 8px;
              color: rgb(33, 33, 33);
              display: flex;
              align-items: center;
          }

          .navbar__logo {
              justify-content: center;
          }

          .navbar__logo_img {
              width: 35px;
              height: 35px;
          }

          .navbar__logo_text {
              margin-top: auto;
              margin-bottom: auto;
              margin-left: 5px;
              font-size: 1.25rem;
          }

          .navbar__link:hover,
          .selected  
          {
              color: black;
              background-color: #efefef;
              cursor: pointer;
          }

          .selected,
          .navbar__link:hover.selected
          {
              background-color: #cacaca;
          }

          .navbar__logo:hover {
              cursor: pointer;
          }

          .navbar__items {
              display: flex;
          }

          .navbar__items--right {
              margin-left: auto;
          }

          .navbar__toggle {
              display: none;
          }

          @media only screen and (max-width: 800px) {
              .navbar__items,
              .navbar {
                  flex-direction: column;
              }

              .navbar__items {
                  display: none;
              }

              .navbar__items--right {
                  margin-left: 0;
              }

              .navbar__toggleShow {
                  display: flex;
              }

              .navbar__toggle {
                  align-self: flex-end;
                  display: initial;
                  position: absolute;
                  cursor: pointer;
                  margin-top: 5px;
              }
              
              .navbar__items_links {
                  flex-direction: column;
              }
          }

          /* Dropdown styles */
          .navbar__items_links {
            display: flex;
            margin: 0;
            padding-left: 0;
            list-style-type: none;
          }

          @media only screen and (min-width: 800px) {
              .navbar__items_links {
                align-items: center;
              }
          }

          .nodecor {
              text-decoration: none;
          }
          
        </style>

        <div class="navbar">
          <a class="nodecor" href="/home">
            <div class="navbar__logo">
              <img class="navbar__logo_img" src="img/wildphoto_logo.png" alt="">
              <p class="navbar__logo_text">Wildphoto</p>
            </div>
          </a>
          <div class="navbar__toggle">
            <iron-icon icon="icons:menu"></iron-icon>
          </div>
          <nav class="navbar__items">
            <ul class="navbar__items_links">
              <wildphoto-header-dropdown header-text=[[photoDropdown.headerText]] menu-items=[[photoDropdown.menuItems]]>
              </wildphoto-header-dropdown>
              <wildphoto-header-dropdown header-text=[[videoDropdown.headerText]] menu-items=[[videoDropdown.menuItems]]>
              </wildphoto-header-dropdown>
              <wildphoto-header-dropdown header-text=[[storiesDropdown.headerText]] menu-items=[[storiesDropdown.menuItems]]>
              </wildphoto-header-dropdown>
              <wildphoto-header-dropdown header-text=[[authorsDropdown.headerText]] menu-items=[[authorsDropdown.menuItems]]>
              </wildphoto-header-dropdown>
            </ul>
          </nav>
          <nav class="navbar__items navbar__items--right">
            <a class="navbar__link">
                Login
            </a>
            <a class="navbar__link" on-click="changeS">
                Logout
            </a>
          </nav>
        </div>
      `
    }

    static get properties() {
        return {
            photoDropdown: {
                type: Object,
                value: {
                    headerText: "Фото",
                    menuItems: [
                        {
                            href: "/photo",
                            text: "Все"
                        },
                        {
                            href: "#/photo/genres",
                            text: "Жанры"
                        },
                        {
                            href: "#/photo/popular",
                            text: "Популярные"
                        },
                        {
                            href: "#/photo/new",
                            text: "Новые"
                        }
                    ]
                }
            },
            videoDropdown: {
                type: Object,
                value: {
                    headerText: "Видео",
                    menuItems: [
                        {
                            href: "#/video/genres",
                            text: "Жанры"
                        },
                        {
                            href: "#/video/popular",
                            text: "Популярные"
                        },
                        {
                            href: "#/video/new",
                            text: "Новые"
                        }
                    ]
                }
            },
            storiesDropdown: {
                type: Object,
                value: {
                    headerText: "Рассказы",
                    menuItems: [
                        {
                            href: "#/stories/genres",
                            text: "Жанры"
                        },
                        {
                            href: "#/stories/popular",
                            text: "Популярные"
                        },
                        {
                            href: "#/stories/new",
                            text: "Новые"
                        }
                    ]
                }
            },
            authorsDropdown: {
                type: Object,
                value: {
                    headerText: "Авторы",
                    menuItems: [
                        {
                            href: "#/authors/rating",
                            text: "Рейтинг авторов"
                        }
                    ]
                }
            }
        }
    }

    constructor() {
        super();
        this.addEventListener('is-photo-changed', e => console.log(e));
    }

    ready() {
        super.ready();
        this.shadowRoot.querySelector('.navbar__toggle')
            .addEventListener('click', this.classToggle.bind(this));
    }

    classToggle() {
        const navs = this.shadowRoot.querySelectorAll('.navbar__items');
        navs.forEach(nav => nav.classList.toggle('navbar__toggleShow'));
    }
}

window.customElements.define('wildphoto-header', WildphotoHeader);