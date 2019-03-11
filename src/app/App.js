import React, { Component } from 'react';
import Header from '../header/Header.js';
import Grid from '../grid/Grid.js';

class App extends Component {

  constructor() {
    super();
    this.headerData = {
      navbarItems: [
        {
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
        },
        {
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
        },
        {
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
        },
        {
          headerText: "Авторы",
          menuItems: [
            {
              href: "#/authors/rating",
              text: "Рейтинг авторов"
            }
          ]
        }
      ]
    }

    this.gridSource = [
        [
          {
            title: "Черный аист",
            src: "photos/thumbnails/Черный аист.jpg",
            author: "Nikita Kharitonov",
            rating: 3.4,
            commentsCount: 2,
            likesCountCount: 80,
            id: 3
          },
          {
            title: "Черный аист",
            src: "photos/thumbnails/DSC_0099.jpg",
            author: "Nikita Kharitonov",
            rating: 3.4,
            commentsCount: 2,
            likesCount: 80,
            id: 3
          },
          {
            title: "Черный аист",
            src: "photos/thumbnails/косуля2.jpg",
            author: "Nikita Kharitonov",
            rating: 3.4,
            commentsCount: 2,
            likesCount: 80,
            id: 3
          }
      ],
      [
        {
          title: "Черный аист",
          src: "photos/thumbnails/DSC_1522к.jpg",
          author: "Nikita Kharitonov",
          rating: 3.4,
          commentsCount: 2,
          likesCount: 80,
          id: 3
        },
        {
          title: "Черный аист",
          src: "photos/thumbnails/DSC_0835.jpg",
          author: "Nikita Kharitonov",
          rating: 3.4,
          commentsCount: 2,
          likesCount: 80,
          id: 3
        },
        {
          title: "Черный аист",
          src: "photos/thumbnails/DSC_1586л.jpg",
          author: "Nikita Kharitonov",
          rating: 3.4,
          commentsCount: 2,
          likesCount: 80,
          id: 3
        }
      ],
      [
        {
          title: "Черный аист",
          src: "photos/thumbnails/палатка 261ц.jpg",
          author: "Nikita Kharitonov",
          rating: 3.4,
          commentsCount: 2,
          likesCount: 80,
          id: 3
        },
        {
          title: "Черный аист",
          src: "photos/thumbnails/DSC_0525а1.jpg",
          author: "Nikita Kharitonov",
          rating: 3.4,
          commentsCount: 2,
          likesCount: 80,
          id: 3
        },
        {
          title: "Черный аист",
          src: "photos/thumbnails/косуля1.jpg",
          author: "Nikita Kharitonov",
          rating: 3.4,
          commentsCount: 2,
          likesCount: 80,
          id: 3
        }
      ],
      [
        {
          title: "Черный аист",
          src: "photos/thumbnails/DSC_0253.jpg",
          author: "Nikita Kharitonov",
          rating: 3.4,
          commentsCount: 2,
          likesCount: 80,
          id: 3
        },
        {
          title: "Черный аист",
          src: "photos/thumbnails/черный аист(2).jpg",
          author: "Nikita Kharitonov",
          rating: 3.4,
          commentsCount: 2,
          likesCount: 80,
          id: 3
        },
        {
          title: "Черный аист",
          src: "photos/thumbnails/палатка 044.jpg",
          author: "Nikita Kharitonov",
          rating: 3.4,
          commentsCount: 2,
          likesCount: 80,
          id: 3
        }
      ]
    ]
  }

  render() {
    return (
      <div className="App">
        <Header navbarItems={this.headerData.navbarItems}></Header>
        <Grid source={this.gridSource}/>
      </div>
    );
  }
}

export default App;
