import React, { Component } from 'react';
import './Gallery.css'
import { FaTimes } from 'react-icons/fa';
import Grid from '../grid/Grid.js';
import ReactModal from 'react-modal';
import Photo from '../photo/Photo';

ReactModal.setAppElement('#root')

export default class Gallery extends Component {

  state = {
    isModalWindowOpen: false,
    selectedItem: {
      comments: []
    }
  }

  constructor() {
    super();
    this.gridSource = [
      [
        {
          title: "Черный аист",
          src: "photos/thumbnails/Черный аист.jpg",
          author: "Nikita Kharitonov",
          dislikesCount: 14,
          commentsCount: 2,
          likesCount: 80,
          id: 1
        },
        {
          title: "Черный аист",
          src: "photos/thumbnails/DSC_0099.jpg",
          author: "Nikita Kharitonov",
          dislikesCount: 14,
          commentsCount: 2,
          likesCount: 80,
          id: 2
        },
        {
          title: "Черный аист",
          src: "photos/thumbnails/косуля2.jpg",
          author: "Nikita Kharitonov",
          dislikesCount: 14,
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
          dislikesCount: 14,
          commentsCount: 2,
          likesCount: 80,
          id: 4
        },
        {
          title: "Черный аист",
          src: "photos/thumbnails/DSC_0835.jpg",
          author: "Nikita Kharitonov",
          dislikesCount: 14,
          commentsCount: 2,
          likesCount: 80,
          id: 5
        },
        {
          title: "Черный аист",
          src: "photos/thumbnails/DSC_1586л.jpg",
          author: "Nikita Kharitonov",
          dislikesCount: 14,
          commentsCount: 2,
          likesCount: 80,
          id: 6
        }
      ],
      [
        {
          title: "Черный аист",
          src: "photos/thumbnails/палатка 261ц.jpg",
          author: "Nikita Kharitonov",
          dislikesCount: 14,
          commentsCount: 2,
          likesCount: 80,
          id: 7
        },
        {
          title: "Черный аист",
          src: "photos/thumbnails/DSC_0525а1.jpg",
          author: "Nikita Kharitonov",
          dislikesCount: 14,
          commentsCount: 2,
          likesCount: 80,
          id: 8
        },
        {
          title: "Черный аист",
          src: "photos/thumbnails/косуля1.jpg",
          author: "Nikita Kharitonov",
          dislikesCount: 14,
          commentsCount: 2,
          likesCount: 80,
          id: 9
        }
      ],
      [
        {
          title: "Черный аист",
          src: "photos/thumbnails/DSC_0253.jpg",
          author: "Nikita Kharitonov",
          dislikesCount: 14,
          commentsCount: 2,
          likesCount: 80,
          id: 10
        },
        {
          title: "Черный аист",
          src: "photos/thumbnails/черный аист(2).jpg",
          author: "Nikita Kharitonov",
          dislikesCount: 14,
          commentsCount: 2,
          likesCount: 80,
          id: 11
        },
        {
          title: "Черный аист",
          src: "photos/thumbnails/палатка 044.jpg",
          author: "Nikita Kharitonov",
          dislikesCount: 14,
          commentsCount: 2,
          likesCount: 80,
          id: 12
        }
      ]
    ]
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    // Mock data: full photos
    this.photosMock = [
      {
        title: "Черный аист",
        src: "http://wildphoto.by/photos/Черный аист.jpg",
        author: "Nikita Kharitonov",
        comments: [
          {
            author: {
              avatarSrc: "photos/H20SY3wdF7Y.jpg",
              name: "Никита Харитонов",
              id: 1
            },
            text: "Отличная работа! Поздравляю! Отличная работа! Поздравляю!",
            date: "13 марта 2019 17:11"
          }
        ],
        likesCount: 80,
        dislikesCount: 14,
        id: 1
      },
      {
        title: "Черный аист",
        src: "photos/DSC_0099.jpg",
        author: "Nikita Kharitonov",
        comments: [
          {
            author: {
              avatarSrc: "photos/H20SY3wdF7Y.jpg",
              name: "Никита Харитонов",
              id: 1
            },
            text: "Отличная работа! Поздравляю! Отличная работа! Поздравляю!",
            date: "13 марта 2019 17:11"
          }
        ],
        dislikesCount: 14,
        commentsCount: 2,
        likesCount: 80,
        id: 2
      },
      {
        title: "Черный аист",
        src: "photos/косуля2.jpg",
        author: "Nikita Kharitonov",
        comments: [
          {
            author: {
              avatarSrc: "photos/H20SY3wdF7Y.jpg",
              name: "Никита Харитонов",
              id: 1
            },
            text: "Отличная работа! Поздравляю! Отличная работа! Поздравляю!",
            date: "13 марта 2019 17:11"
          }
        ],
        dislikesCount: 14,
        commentsCount: 2,
        likesCount: 80,
        id: 3
      },
      {
        title: "Черный аист",
        src: "photos/DSC_1522к.jpg",
        author: "Nikita Kharitonov",
        comments: [
          {
            author: {
              avatarSrc: "photos/H20SY3wdF7Y.jpg",
              name: "Никита Харитонов",
              id: 1
            },
            text: "Отличная работа! Поздравляю! Отличная работа! Поздравляю!",
            date: "13 марта 2019 17:11"
          }
        ],
        dislikesCount: 14,
        commentsCount: 2,
        likesCount: 80,
        id: 4
      },
      {
        title: "Черный аист",
        src: "photos/DSC_0835.jpg",
        author: "Nikita Kharitonov",
        comments: [
          {
            author: {
              avatarSrc: "photos/H20SY3wdF7Y.jpg",
              name: "Никита Харитонов",
              id: 1
            },
            text: "Отличная работа! Поздравляю! Отличная работа! Поздравляю!",
            date: "13 марта 2019 17:11"
          }
        ],
        dislikesCount: 14,
        commentsCount: 2,
        likesCount: 80,
        id: 5
      },
      {
        title: "Черный аист",
        src: "photos/DSC_1586л.jpg",
        author: "Nikita Kharitonov",
        comments: [
          {
            author: {
              avatarSrc: "photos/H20SY3wdF7Y.jpg",
              name: "Никита Харитонов",
              id: 1
            },
            text: "Отличная работа! Поздравляю! Отличная работа! Поздравляю!",
            date: "13 марта 2019 17:11"
          }
        ],
        dislikesCount: 14,
        commentsCount: 2,
        likesCount: 80,
        id: 6
      },
      {
        title: "Черный аист",
        src: "photos/палатка 261ц.jpg",
        author: "Nikita Kharitonov",
        comments: [
          {
            author: {
              avatarSrc: "photos/H20SY3wdF7Y.jpg",
              name: "Никита Харитонов",
              id: 1
            },
            text: "Отличная работа! Поздравляю! Отличная работа! Поздравляю!",
            date: "13 марта 2019 17:11"
          }
        ],
        dislikesCount: 14,
        commentsCount: 2,
        likesCount: 80,
        id: 7
      },
      {
        title: "Черный аист",
        src: "photos/DSC_0525а1.jpg",
        author: "Nikita Kharitonov",
        comments: [
          {
            author: {
              avatarSrc: "photos/H20SY3wdF7Y.jpg",
              name: "Никита Харитонов",
              id: 1
            },
            text: "Отличная работа! Поздравляю! Отличная работа! Поздравляю!",
            date: "13 марта 2019 17:11"
          }
        ],
        dislikesCount: 14,
        commentsCount: 2,
        likesCount: 80,
        id: 8
      },
      {
        title: "Черный аист",
        src: "photos/косуля1.jpg",
        author: "Nikita Kharitonov",
        comments: [
          {
            author: {
              avatarSrc: "photos/H20SY3wdF7Y.jpg",
              name: "Никита Харитонов",
              id: 1
            },
            text: "Отличная работа! Поздравляю! Отличная работа! Поздравляю!",
            date: "13 марта 2019 17:11"
          }
        ],
        dislikesCount: 14,
        commentsCount: 2,
        likesCount: 80,
        id: 9
      },
      {
        title: "Черный аист",
        src: "photos/DSC_0253.jpg",
        author: "Nikita Kharitonov",
        comments: [
          {
            author: {
              avatarSrc: "photos/H20SY3wdF7Y.jpg",
              name: "Никита Харитонов",
              id: 1
            },
            text: "Отличная работа! Поздравляю! Отличная работа! Поздравляю!",
            date: "13 марта 2019 17:11"
          }
        ],
        dislikesCount: 14,
        commentsCount: 2,
        likesCount: 80,
        id: 10
      },
      {
        title: "Черный аист",
        src: "photos/черный аист(2).jpg",
        author: "Nikita Kharitonov",
        comments: [
          {
            author: {
              avatarSrc: "photos/H20SY3wdF7Y.jpg",
              name: "Никита Харитонов",
              id: 1
            },
            text: "Отличная работа! Поздравляю! Отличная работа! Поздравляю!",
            date: "13 марта 2019 17:11"
          }
        ],
        dislikesCount: 14,
        commentsCount: 2,
        likesCount: 80,
        id: 11
      },
      {
        title: "Черный аист",
        src: "photos/палатка 044.jpg",
        author: "Nikita Kharitonov",
        comments: [
          {
            author: {
              avatarSrc: "photos/H20SY3wdF7Y.jpg",
              name: "Никита Харитонов",
              id: 1
            },
            text: "Отличная работа! Поздравляю! Отличная работа! Поздравляю!",
            date: "13 марта 2019 17:11"
          }
        ],
        dislikesCount: 14,
        commentsCount: 2,
        likesCount: 80,
        id: 12
      }
    ]
  }

  sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  handleItemClick(id) {
    this.setState({
      isPhotoLoading: true,
      isModalWindowOpen: true
    })
    this.sleep(1000).then(() => {
      const selected = this.photosMock.filter((o) => {return o.id === id})[0];
      this.setState({
        isPhotoLoading: false,
        selectedItem: selected
      })
    })
  }

  handleCloseModal() {
    this.setState({
      isModalWindowOpen: false
    })
  }

  render() {
    return (
      <div className="gallery" id="wildphotoGallery">
        <ReactModal
          isOpen={this.state.isModalWindowOpen}
          parentSelector={() => document.getElementById('wildphotoGallery')}
          className="reactModal__content"
          overlayClassName="reactModal__overlay"
          shouldFocusAfterRender={false}
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.handleCloseModal}>
          <Photo
            src={this.state.selectedItem.src}
            title={this.state.selectedItem.title}
            author={this.state.selectedItem.author}
            comments={this.state.selectedItem.comments}
            likesCount={this.state.selectedItem.likesCount}
            dislikesCount={this.state.selectedItem.dislikesCount}
            onClose={this.handleCloseModal} 
            isLoading={this.state.isPhotoLoading} />
        </ReactModal>
        <Grid
          source={this.gridSource}
          onItemClick={this.handleItemClick}
        />
      </div>
    )
  }
}
