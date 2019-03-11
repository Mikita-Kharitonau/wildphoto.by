import React, { Component } from 'react';
import './Grid.css';
import PhotoThumbnail from '../photoThumbnail/PhotoThumbnail.js';

export default class Grid extends Component {
  render() {
    return (
      <div className="row">
        {
          this.props.source.map((columnData) => {
            const column = columnData.map((item) => {
              return (
                <PhotoThumbnail 
                  title={item.title}
                  id={item.id}
                  src={item.src}
                  author={item.author}
                  rating={item.rating}
                  commentsCount={item.commentsCount}
                  likesCount={item.likesCount}
                />
              )
            })
            return (
              <div className="column">
                {column}
              </div>
            )
          })
        }
      </div>
    )
  }
}
