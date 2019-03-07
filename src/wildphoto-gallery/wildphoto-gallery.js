import  {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '../wildphoto-photo-thumbnail/wildphoto-photo-thumbnail.js';

class WildphotoGallery extends PolymerElement {

    static get template() {
        return html`
          <style>
            * {
              box-sizing: border-box;
            }

            .row {
              display: -ms-flexbox; /* IE10 */
              display: flex;
              -ms-flex-wrap: wrap; /* IE10 */
              flex-wrap: wrap;
              padding: 10px 40px;
            }

            /* Create four equal columns that sits next to each other */
            .column {
              -ms-flex: 25%; /* IE10 */
              flex: 25%;
              max-width: 25%;
              padding: 0 6px;
            }

            /* Responsive layout - makes a two column-layout instead of four columns */
            @media screen and (max-width: 800px) {
              .row {
                padding: 0 20px;
              }

              .column {
                -ms-flex: 50%;
                flex: 50%;
                max-width: 50%;
              }
            }

            /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
            @media screen and (max-width: 600px) {
              .row {
                padding: 0;
              }

              .column {
                -ms-flex: 100%;
                flex: 100%;
                max-width: 100%;
              }
            }
          </style>

          <!-- Photo Grid -->
          <div class="row"> 
            <div class="column">
              <dom-repeat items=[[source1]]>
                <template>
                  <wildphoto-photo-thumbnail photo=[[item]]></wildphoto-photo-thumbnail>
                </template>
              </dom-repeat>
            </div>
            <div class="column">
              <dom-repeat items=[[source2]]>
                <template>
                  <wildphoto-photo-thumbnail photo=[[item]]></wildphoto-photo-thumbnail>
                </template>
              </dom-repeat>
            </div>  
            <div class="column">
              <dom-repeat items=[[source3]]>
                <template>
                  <wildphoto-photo-thumbnail photo=[[item]]></wildphoto-photo-thumbnail>
                </template>
              </dom-repeat>
            </div>
            <div class="column">
              <dom-repeat items=[[source4]]>
                <template>
                  <wildphoto-photo-thumbnail photo=[[item]]></wildphoto-photo-thumbnail>
                </template>
              </dom-repeat>
            </div>
          </div>
        `
    }

    static get properties() {
        return {
            source: {
                type: Number,
                notify: true
            },
            source1: {
                type: Array,
                value: [
                    {
                      src: "photos/thumbnails/Черный аист.jpg",
                      author: "Nikita Kharitonov",
                      rating: 3.4,
                      comments: 2,
                      likes: 80,
                      id: 3
                    },
                    {
                      src: "photos/thumbnails/DSC_0099.jpg",
                      author: "Nikita Kharitonov",
                      rating: 3.4,
                      comments: 2,
                      likes: 80,
                      id: 3
                    },
                    {
                      src: "photos/thumbnails/косуля2.jpg",
                      author: "Nikita Kharitonov",
                      rating: 3.4,
                      comments: 2,
                      likes: 80,
                      id: 3
                    }
                ]
            },
            source2: {
                type: Array,
                value: [
                    {
                      src: "photos/thumbnails/DSC_1522к.jpg",
                      author: "Nikita Kharitonov",
                      rating: 3.4,
                      comments: 2,
                      likes: 80,
                      id: 3
                    },
                    {
                      src: "photos/thumbnails/DSC_0835.jpg",
                      author: "Nikita Kharitonov",
                      rating: 3.4,
                      comments: 2,
                      likes: 80,
                      id: 3
                    },
                    {
                      src: "photos/thumbnails/DSC_1586л.jpg",
                      author: "Nikita Kharitonov",
                      rating: 3.4,
                      comments: 2,
                      likes: 80,
                      id: 3
                    }
                ]
            },
            source3: {
                type: Array,
                value: [
                  {
                    src: "photos/thumbnails/палатка 261ц.jpg",
                    author: "Nikita Kharitonov",
                    rating: 3.4,
                    comments: 2,
                    likes: 80,
                    id: 3
                  },
                  {
                    src: "photos/thumbnails/DSC_0525а1.jpg",
                    author: "Nikita Kharitonov",
                    rating: 3.4,
                    comments: 2,
                    likes: 80,
                    id: 3
                  },
                  {
                    src: "photos/thumbnails/косуля1.jpg",
                    author: "Nikita Kharitonov",
                    rating: 3.4,
                    comments: 2,
                    likes: 80,
                    id: 3
                  }
                ]
            },
            source4: {
                type: Array,
                value: [
                  {
                    src: "photos/thumbnails/DSC_0253.jpg",
                    author: "Nikita Kharitonov",
                    rating: 3.4,
                    comments: 2,
                    likes: 80,
                    id: 3
                  },
                  {
                    src: "photos/thumbnails/черный аист(2).jpg",
                    author: "Nikita Kharitonov",
                    rating: 3.4,
                    comments: 2,
                    likes: 80,
                    id: 3
                  },
                  {
                    src: "photos/thumbnails/палатка 044.jpg",
                    author: "Nikita Kharitonov",
                    rating: 3.4,
                    comments: 2,
                    likes: 80,
                    id: 3
                  }
                ]
            }
        }
    }

    constructor() {
        super();
        this.addEventListener('source-changed', e => {
            // for(let i = 0; i < this.source.length;) {
            //     source1.push(this.source[i]);
            //     i += 4;
            // }
            console.log(e);
        })
    }

    // ready() {
    //   super.ready();
    //   console.log("read");
    //   this.shadowRoot.getElementById('btn').addEventListener('click', e => {
    //     this.source += 1;
    //   })
    // }

}

window.customElements.define('wildphoto-gallery', WildphotoGallery);