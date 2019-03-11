import React, { Component } from 'react'
import './PhotoThumbnail.css'
import {FaStar, FaComment, FaHeart} from 'react-icons/fa';

export default class PhotoThumbnail extends Component {
  render() {
    return (
      <div className="photoThumbnail">
        <a href={"/photo/" + this.props.id}>
          <img className="photoThumbnail__img" src={this.props.src}></img>
          <div className="overlay">
            <p className="overlay__author">{this.props.author}</p>
            <div className="overlay__metrics">
              <div className="overlay__metric">
                <FaStar className="overlay__metrics_icon" />
                <span>{this.props.rating}</span>
              </div>
              <div className="overlay__metric">
                <FaComment className="overlay__metrics_icon"/>
                <span>{this.props.commentsCount}</span>
              </div>
              <div className="overlay__metric">
                <FaHeart className="overlay__metrics_icon" />
                <span>{this.props.likesCount}</span>
              </div>
            </div>
            <div className="overlay__title">
              <p>{this.props.title}</p>
            </div>
          </div>
        </a>
      </div>
    )
  }
}
