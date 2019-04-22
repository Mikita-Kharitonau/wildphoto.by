import React, { Component } from "react";
import "./Header.css";
import HeaderDropdown from "../HeaderDropdown/HeaderDropdown.js";
import { FaBars, FaSignInAlt } from "react-icons/fa";

export default class Header extends Component {
  handleToggleClick() {
    const navs = document.querySelectorAll(".navbar__items");
    navs.forEach(nav => nav.classList.toggle("navbar__toggleShow"));
  }

  constructor() {
    super();
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.renderUsersDropdown = this.renderUsersDropdown.bind(this);
  }

  renderLogin() {
    return (
      <a className="navbar__link" onClick={this.props.onLoginClick}>
        <p>Войти</p>
        <FaSignInAlt className="navbar__link_icon" />
      </a>
    );
  }

  renderUsersDropdown() {
    const menuItems = [
      {
        href: "/users/" + this.props.currentUser.id,
        text: "Профиль"
      },
      {
        href: "",
        text: "Выйти",
        onClick: () => {
          this.props.onLogout();
        }
      }
    ];
    return (
      <HeaderDropdown
        headerAvatarSrc={this.props.currentUser.avatarSrc}
        headerText={this.props.currentUser.name}
        menuItems={menuItems}
      />
    );
  }

  render() {
    const userArea = this.props.isAuthenticated
      ? this.renderUsersDropdown()
      : this.renderLogin();

    return (
      <div className="navbar">
        <a className="logo_wrapper" href="/">
          <div className="logo">
            <img
              className="logo_img"
              src="/wildphoto_logo.png"
              alt=""
            />
            <p className="logo_text">Wildphoto</p>
          </div>
        </a>
        <div className="navbar__toggle">
          <FaBars onClick={this.handleToggleClick} />
        </div>
        <nav className="navbar__items">
          <ul className="navbar__items_links">
            {this.props.navbarItems.map((value, index) => {
              return (
                <HeaderDropdown
                  key={index}
                  headerText={value.headerText}
                  menuItems={value.menuItems}
                />
              );
            })}
          </ul>
        </nav>
        <nav className="navbar__items navbar__items_right">
          <div className="userArea">{userArea}</div>
        </nav>
      </div>
    );
  }
}
