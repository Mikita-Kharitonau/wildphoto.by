import React, { Component } from 'react';
import './Grid.css';
import PhotoThumbnail from '../photoThumbnail/PhotoThumbnail.js';
import { SelfBuildingSquareSpinner } from 'react-epic-spinners';

export default class Grid extends Component {

  constructor() {
    super();
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(id) {
    this.props.onItemClick(id);
  }

  render() {

    if (this.props.isLoading) {
      return (
        <div className="grid__spinnerArea">
          <SelfBuildingSquareSpinner
            size={30}
            color="#808080"
            animationDuration={2000} />
        </div>
      )
    }

    return (
      <div className="grid">
        {
          this.props.source.map((item) => {
            return (
              <div className="grid__item" key={item.id}>
                <PhotoThumbnail
                  data={item}
                  onClick={this.handleItemClick} />
              </div>
            )
          })
        }
      </div>
    )
  }
}
