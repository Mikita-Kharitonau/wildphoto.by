import React, { Component } from 'react';
import {FaHeart, FaPlus} from 'react-icons/fa';
import './Photo.css';

export default class Photo extends Component {
  render() {
    return (
      <div className="photo">
        <img className="photo__img" src={this.props.data.src} />
        <div className="photo__actions">
          <div className="photo__action">
            <FaHeart className="photo__action_icon" />
            <span>{this.props.data.likesCount}</span>
          </div>
        </div>
        <p>
          {this.props.data.description}
        </p>
      </div>
    )
  }
}
