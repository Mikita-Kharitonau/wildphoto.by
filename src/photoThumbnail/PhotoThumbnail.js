import React, { Component } from 'react'
import './PhotoThumbnail.css'
import {FaStar, FaComment, FaHeart, FaThumbsDown} from 'react-icons/fa';

export default class PhotoThumbnail extends Component {

  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.data.id);
  }

  render() {
    return (
      <div className="photoThumbnail" onClick={this.handleClick}> 
        <img 
          className="photoThumbnail__img" 
          src={this.props.data.src} 
          alt={this.props.data.title + ", автор: " + this.props.data.author} />
        <div className="overlay">
          <p className="overlay__author">{this.props.data.author}</p>
          <div className="overlay__metrics">
            <div className="overlay__metric">
              <FaComment className="overlay__metric_icon"/>
              <span>{this.props.data.commentsCount}</span>
            </div>
            <div className="overlay__metric">
              <FaHeart className="overlay__metric_icon" />
              <span>{this.props.data.likesCount}</span>
            </div>
            <div className="overlay__metric">
              <FaThumbsDown className="overlay__metric_icon" />
              <span>{this.props.data.dislikesCount}</span>
            </div>
          </div>
          <div className="overlay__title">
            <p>{this.props.data.title}</p>
          </div>
        </div>
      </div>
    )
  }
}
