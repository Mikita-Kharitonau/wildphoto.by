import React, { Component } from 'react'
import './Header.css'
import HeaderDropdown from '../HeaderDropdown/HeaderDropdown.js';
import { FaBars } from 'react-icons/fa';

export default class Header extends Component {

  handleToggleClick() {
    const navs = document.querySelectorAll('.navbar__items');
    navs.forEach(nav => nav.classList.toggle('navbar__toggleShow'));
  }

  constructor() {
    super();
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  render() {
    return (
      <div className="navbar">
        <a className="nodecor" href="/home">
          <div className="navbar__logo">
            <img className="navbar__logo_img" src="/wildphoto_logo.png" alt="" />
            <p className="navbar__logo_text">Wildphoto</p>
          </div>
        </a>
        <div className="navbar__toggle">
          <FaBars onClick={this.handleToggleClick}/>
        </div>
        <nav className="navbar__items">
          <ul className="navbar__items_links">
            {this.props.navbarItems.map((value, index) => {
              return <HeaderDropdown 
                        key={index}
                        headerText={value.headerText} 
                        menuItems={value.menuItems} 
                      />
            })}
          </ul>
        </nav>
        <nav className="navbar__items navbar__items_right">
          <a className="navbar__link" href="/">
            Login
          </a>
          <a className="navbar__link" href="/">
            Logout
          </a>
        </nav>
      </div>
    )
  }
}
