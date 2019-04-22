import React, { Component } from "react";
import "./Gallery.css";
import Grid from "../grid/Grid.js";
import ReactModal from "react-modal";
import Photo from "../photo/Photo";
import wildphotoApi from "../api.js";
import { getCurrentScreenWidth } from "../utils";

ReactModal.setAppElement("#root");

export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      isModalWindowOpen: false,
      selectedItem: {
        comments: []
      },
      gridSource: []
    };
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
    ];
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleClosePhoto = this.handleClosePhoto.bind(this);
  }

  componentDidMount() {
    this.setState({
      isGridDataLoading: true
    });
    wildphotoApi.getAllPhotos().then(result => {
      this.setState({
        isGridDataLoading: false,
        gridSource: result
      });
    });
  }

  handleItemClick(id) {
    const isModalWindowOpen = getCurrentScreenWidth() > 800 ? true : false;
    this.setState({
      isPhotoLoading: true,
      isModalWindowOpen: isModalWindowOpen,
      shouldPhotoRender: !isModalWindowOpen
    });
    wildphotoApi.getPhotoById(id).then(result => {
      this.setState({
        isPhotoHasError: false,
        photoErrorMsg: undefined,
        isPhotoLoading: false,
        selectedItem: result
      });
    }).catch(err => {
      this.setState({
        isPhotoLoading: false,
        isPhotoHasError: true,
        photoErrorMsg: err
      })
    });
  }

  handleClosePhoto() {
    this.setState({
      shouldPhotoRender: false,
      isModalWindowOpen: false
    });
  }

  render() {
    const photo = (
      <Photo
        src={this.state.selectedItem.fullsizeSrc}
        title={this.state.selectedItem.title}
        date={this.state.selectedItem.date}
        author={this.state.selectedItem.author}
        comments={this.state.selectedItem.comments}
        likes={this.state.selectedItem.likes}
        dislikes={this.state.selectedItem.dislikes}
        onClose={this.handleClosePhoto}
        isLoading={this.state.isPhotoLoading}
        isError={this.state.isPhotoHasError}
        errorMsg={this.state.photoErrorMsg}
        isAuthenticated={this.props.isAuthenticated}
      />
    );

    return (
      <div className="gallery" id="wildphotoGallery">
        <ReactModal
          isOpen={this.state.isModalWindowOpen}
          parentSelector={() => document.getElementById("wildphotoGallery")}
          className="appModal__content photoModal__content"
          overlayClassName="appModal__overlay"
          shouldFocusAfterRender={false}
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.handleClosePhoto}
        >
          {photo}
        </ReactModal>

        {this.state.shouldPhotoRender && 
          <div>{ photo }</div>}

        {!this.state.shouldPhotoRender && (
          <Grid
            source={this.state.gridSource}
            onItemClick={this.handleItemClick}
            isLoading={this.state.isGridDataLoading}
          />
        )}
      </div>
    );
  }
}
