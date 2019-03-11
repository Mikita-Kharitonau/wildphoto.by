import React, { Component } from 'react';
import Header from '../header/Header.js';
import Gallery from '../gallery/Gallery.js';

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
  }

  render() {
    return (
      <div className="App">
        <Header navbarItems={this.headerData.navbarItems}></Header>
        <Gallery />
      </div>
    );
  }
}

export default App;
