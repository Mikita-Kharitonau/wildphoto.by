import React, { Component } from "react";
import "./Photo.css";
import {
  FaRegHeart,
  FaHeart,
  FaTimes,
  FaThumbsDown,
  FaRegThumbsDown,
  FaPlus
} from "react-icons/fa";
import { FulfillingSquareSpinner } from "react-epic-spinners";
import Comment from "../comment/Comment.js";
import { convertDateTime } from "../utils";
import { ACTIONS_RESTRICTION } from "../constants";

export default class Photo extends Component {
  constructor() {
    super();
    this.state = {
      isLiked: false,
      isDisliked: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.likeClick = this.likeClick.bind(this);
    this.dislikeClick = this.dislikeClick.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleCommentSubmit() {
    console.log("submitted");
  }

  handleClose() {
    this.props.onClose();
  }

  likeClick() {
    this.setState({
      isLiked: !this.state.isLiked
    });
  }

  dislikeClick() {
    this.setState({
      isDisliked: !this.state.isDisliked
    });
  }

  renderThumbsDown() {
    return (
      <FaThumbsDown className="action__icon" onClick={this.dislikeClick} />
    );
  }

  renderRegThumbsDown() {
    return (
      <FaRegThumbsDown className="action__icon" onClick={this.dislikeClick} />
    );
  }

  renderHeart() {
    return (
      <FaHeart
        className="action__icon actions__icon_crimson"
        onClick={this.likeClick}
      />
    );
  }

  renderRegHeart() {
    return <FaRegHeart className="action__icon" onClick={this.likeClick} />;
  }

  renderComments(comments) {
    return comments.map(comment => {
      return (
        <Comment
          author={comment.author}
          text={comment.text}
          date={comment.date}
          key={comment.id}
        />
      );
    });
  }

  renderEmptyComments() {
    return (
      <p className="comments__emptyCaption">Ваш комментарий будет первым</p>
    );
  }

  render() {
    var like = this.state.isLiked ? this.renderHeart() : this.renderRegHeart();
    var dislike = this.state.isDisliked
      ? this.renderThumbsDown()
      : this.renderRegThumbsDown();
    var comments = this.props.comments.length
      ? this.renderComments(this.props.comments)
      : this.renderEmptyComments();

    if (this.props.isLoading) {
      return (
        <div className="photo__spinnerArea">
          <FulfillingSquareSpinner
            size={30}
            color="#808080"
            animationDuration={2000}
          />
        </div>
      );
    }

    if (this.props.isError) {
      return (
        <div className="photo__errorArea">
          <p>{this.props.errorMsg}</p>
        </div>
      );
    }

    return (
      <div className="photo">
        <div className="photo__header">
          <div>
            <p>
              {this.props.title + " "}
              <span className="photo__header_date">
                {convertDateTime(this.props.date)}
              </span>
            </p>
          </div>
          <div>
            <FaTimes className="photo__btn_close" onClick={this.handleClose} />
          </div>
        </div>
        <div className="imageWrapper">
          <img className="photo__img" src={this.props.src} alt={"Photo by " + this.props.author} />
        </div>
        <div className="comments">{comments}</div>
        <div className="actions">
          <div className="action">
            {like}
            <span>{this.props.likes.length}</span>
          </div>
          <div className="action">
            {dislike}
            <span>{this.props.dislikes.length}</span>
          </div>
        </div>
        <div className="addComment">
          <div className="addComment__input">
            <input type="text" placeholder="Добавьте комментарий..." />
          </div>
          <div className="addComment__submit">
            <button onClick={this.handleCommentSubmit}>
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
