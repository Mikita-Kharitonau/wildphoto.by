import React, { Component } from "react";
import "./Comment.css";
import { convertDateTime } from "../utils";

export default class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <div className="comment__avatar">
          <img src={this.props.author.avatarSrc} alt="Author avatar"/>
        </div>
        <div className="comment__author">
          <a href={"/author/" + this.props.author.id}>
            {this.props.author.name}
          </a>
        </div>
        <div className="comment__text">
          <p>{this.props.text}</p>
        </div>
        <div className="comment__date">
          <p>{convertDateTime(this.props.date)}</p>
        </div>
      </div>
    );
  }
}
