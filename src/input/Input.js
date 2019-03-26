import React, { Component } from "react";
import "./Input.css";
import { FaUser, FaLock } from "react-icons/fa";

export default class Input extends Component {
  constructor() {
    super();
    this.renderIcon = this.renderIcon.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  renderIcon() {
    switch (this.props.iconType) {
      case "password":
        return <FaLock />;
      case "emailOrLogin":
        return <FaUser />;
    }
  }

  handleChange(e) {
    e.target.name = this.props.name;
    this.props.onChange(e);
  }

  render() {
    const icon = this.renderIcon();

    return (
      <div className="c-input">
        <div className="c-input__icon">{icon}</div>
        <input
          className="c-input__input"
          type={this.props.type}
          placeholder={this.props.placeholder}
          required={this.props.required}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
