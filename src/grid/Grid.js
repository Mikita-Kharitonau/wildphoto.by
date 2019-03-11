import React, { Component } from 'react';
import './Grid.css';
import PhotoThumbnail from '../photoThumbnail/PhotoThumbnail.js';

export default class Grid extends Component {

  constructor() {
    super();
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(id) {
    this.props.onItemClick(id);
  }

  render() {
    return (
      <div className="row">
        {
          this.props.source.map((columnData, index) => {
            const column = columnData.map((item) => {
              return (
                <PhotoThumbnail 
                  key={item.id}
                  data={item}
                  onClick={this.handleItemClick}
                />
              )
            })
            return (
              <div key={index} className="column">
                {column}
              </div>
            )
          })
        }
      </div>
    )
  }
}
