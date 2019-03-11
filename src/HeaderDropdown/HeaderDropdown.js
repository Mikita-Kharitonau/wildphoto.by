import React, { Component } from 'react';
import './HeaderDropdown.css';
import { FaSortDown } from 'react-icons/fa';

export default class HeaderDropdown extends Component {
  render() {
    return (
      <div className="dropdown">
        <div className="dropdown__header">
          <p className="dropdown__header_text">{this.props.headerText}</p>
          <FaSortDown className="dropdown__header_icon" />
        </div>
        <ul className="dropdown__menu">
          {
            this.props.menuItems.map((value) => {
              return <li className="dropdown__menu_item"><a href={value.href}>{value.text}</a></li>
            })
          }
        </ul >
      </div >
    )
  }
}
