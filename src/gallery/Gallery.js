import React, { Component } from 'react';
import './Gallery.css'
import Grid from '../grid/Grid.js';
import ReactModal from 'react-modal';
import Photo from '../photo/Photo';
import galleryApi from './service';


ReactModal.setAppElement('#root')

export default class Gallery extends Component {

  constructor() {
    super();
    this.state = {
      isModalWindowOpen: false,
      selectedItem: {
        comments: []
      },
      gridSource: []
    }
    this.gridSource = [
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
      },
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
      },
      {
        title: "Черный аист",
        src: "photos/thumbnails/Косуленок.jpg",
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
      },
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
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    this.setState({
      isGridDataLoading: true
    })
    galleryApi.getAllPhotos()
      .then((result) => {
        this.setState({
          isGridDataLoading: false,
          gridSource: result
        })
      })
  }

  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  handleItemClick(id) {
    this.setState({
      isPhotoLoading: true,
      isModalWindowOpen: true
    })
    galleryApi.getPhotoById(id)
      .then(result => {
      this.setState({
        isPhotoLoading: false,
        selectedItem: result
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
            src={this.state.selectedItem.fullsizeSrc}
            title={this.state.selectedItem.title}
            date={this.state.selectedItem.date}
            author={this.state.selectedItem.author}
            comments={this.state.selectedItem.comments}
            likes={this.state.selectedItem.likes}
            dislikes={this.state.selectedItem.dislikes}
            onClose={this.handleCloseModal}
            isLoading={this.state.isPhotoLoading} />
        </ReactModal>
        <Grid
          source={this.state.gridSource}
          onItemClick={this.handleItemClick}
          isLoading={this.state.isGridDataLoading} />
      </div>
    )
  }
}
