import React, { Component } from 'react';
import './Gallery.css'
import { FaTimes } from 'react-icons/fa';
import Grid from '../grid/Grid.js';
import ReactModal from 'react-modal';
import Photo from '../photo/Photo';

ReactModal.setAppElement('#root')

export default class Gallery extends Component {

  constructor() {
    super();
    this.gridSource = [
      [
        {
          title: "Черный аист",
          src: "photos/thumbnails/Черный аист.jpg",
          author: "Nikita Kharitonov",
          rating: 3.4,
          commentsCount: 2,
          likesCount: 80,
          id: 1
        },
        {
          title: "Черный аист",
          src: "photos/thumbnails/DSC_0099.jpg",
          author: "Nikita Kharitonov",
          rating: 3.4,
          commentsCount: 2,
          likesCount: 80,
          id: 2
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
          id: 4
        },
        {
          title: "Черный аист",
          src: "photos/thumbnails/DSC_0835.jpg",
          author: "Nikita Kharitonov",
          rating: 3.4,
          commentsCount: 2,
          likesCount: 80,
          id: 5
        },
        {
          title: "Черный аист",
          src: "photos/thumbnails/DSC_1586л.jpg",
          author: "Nikita Kharitonov",
          rating: 3.4,
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
          rating: 3.4,
          commentsCount: 2,
          likesCount: 80,
          id: 7
        },
        {
          title: "Черный аист",
          src: "photos/thumbnails/DSC_0525а1.jpg",
          author: "Nikita Kharitonov",
          rating: 3.4,
          commentsCount: 2,
          likesCount: 80,
          id: 8
        },
        {
          title: "Черный аист",
          src: "photos/thumbnails/косуля1.jpg",
          author: "Nikita Kharitonov",
          rating: 3.4,
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
          rating: 3.4,
          commentsCount: 2,
          likesCount: 80,
          id: 10
        },
        {
          title: "Черный аист",
          src: "photos/thumbnails/черный аист(2).jpg",
          author: "Nikita Kharitonov",
          rating: 3.4,
          commentsCount: 2,
          likesCount: 80,
          id: 11
        },
        {
          title: "Черный аист",
          src: "photos/thumbnails/палатка 044.jpg",
          author: "Nikita Kharitonov",
          rating: 3.4,
          commentsCount: 2,
          likesCount: 80,
          id: 12
        }
      ]
    ]
    this.state = {
      isModalWindowOpen: true
    }
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    // Mock for selected item
    this.selectedItem = {
      title: "Черный аист",
      src: "photos/thumbnails/Черный аист.jpg",
      author: "Nikita Kharitonov",
      rating: 3.4,
      commentsCount: 2,
      likesCount: 80,
      id: 1,
      description: `
      В конце жаркого дня лоси нередко забираются по шею в озеро или тихую реку, 
      где спасаются от насекомых и поедают сочную водную растительность. Лето 2015
      `
    }
  }

  handleItemClick (id) {
    this.setState({
      isModalWindowOpen: true,
      selectedItem: id
    })
  }

  handleCloseModal () {
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
          overlayClassName="reactModal__overlay"> 
          <div className="reactModal__header">
            <p>
              {this.selectedItem.title}
            </p>
            <FaTimes className="reactModal__btn_close" onClick={this.handleCloseModal} />
          </div>
          <Photo data={this.selectedItem} />
        </ReactModal>
        <Grid 
          source={this.gridSource} 
          onItemClick={this.handleItemClick}
        />
      </div>
    )
  }
}
