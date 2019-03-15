import React, { Component } from 'react';
import './Photo.css';
import { FaRegHeart, FaHeart, FaTimes, FaThumbsDown, FaRegThumbsDown, FaPlus } from 'react-icons/fa';
import { SelfBuildingSquareSpinner } from 'react-epic-spinners';
import Comment from '../comment/Comment.js';

export default class Photo extends Component {

  constructor() {
    super();
    this.state = {
      isLiked: false,
      isDisliked: false
    }
    this.handleClose = this.handleClose.bind(this);
    this.likeClick = this.likeClick.bind(this);
    this.dislikeClick = this.dislikeClick.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleCommentSubmit() {
    console.log('submitted');
  }

  handleClose() {
    this.props.onClose();
  }

  likeClick() {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  dislikeClick() {
    this.setState({
      isDisliked: !this.state.isDisliked
    })
  }

  renderThumbsDown() {
    return <FaThumbsDown className="action__icon" onClick={this.dislikeClick} />
  }

  renderRegThumbsDown() {
    return <FaRegThumbsDown className="action__icon" onClick={this.dislikeClick} />
  }

  renderHeart() {
    return <FaHeart className="action__icon actions__icon_crimson" onClick={this.likeClick} />
  }

  renderRegHeart() {
    return <FaRegHeart className="action__icon" onClick={this.likeClick} />
  }

  render() {

    var like = this.state.isLiked ? this.renderHeart() : this.renderRegHeart();
    var dislike = this.state.isDisliked ? this.renderThumbsDown() : this.renderRegThumbsDown();

    if (this.props.isLoading) {
      return (
        <div className="spinnerArea">
          <SelfBuildingSquareSpinner
            size={30}
            color="#808080"
            animationDuration={2000} />
        </div>
      )
    }

    return (
      <div className="photo">
        <div className="photo__header">
          <div>
            <p>
              {this.props.title}
            </p>
          </div>
          <div>
            <FaTimes className="photo__btn_close" onClick={this.handleClose} />
          </div>
        </div>
        <div className="imageWrapper">
          <img className="photo__img" src={this.props.src} />
        </div>
        <div className="comments">
          {this.props.comments.map((comment) => {
            return <Comment
              author={comment.author}
              text={comment.text}
              date={comment.date} />
          })}
        </div>
        <div className="pleaseLogin">
          <p>Для того, чтобы комментировать и выполнять другие действия войдите или зарегистрируйтесь</p>
        </div>
        <div className="actions">
          <div className="action">
            {like}
            <span>{this.props.likesCount}</span>
          </div>
          <div className="action">
            {dislike}
            <span>{this.props.dislikesCount}</span>
          </div>
        </div>
        <div className="addComment">
          <div className="addComment__input">
            <input type="text" placeholder="Добавьте комментарий..."></input>
          </div>
          <div className="addComment__submit">
            <button onClick={this.handleCommentSubmit}>
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
