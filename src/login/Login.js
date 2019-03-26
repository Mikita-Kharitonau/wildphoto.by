import React, { Component } from "react";
import "./Login.css";
import Input from "../input/Input";
import {
  ACCESS_TOKEN_KEY,
  BAD_CREDENTIALS,
  NOT_REGISTER_YET,
  ERROR
} from "../constants";
import api from "../api";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      emailOrLogin: "",
      password: "",
      isError: false
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { emailOrLogin, password } = this.state;
    const loginRequest = {
      usernameOrEmail: emailOrLogin,
      password: password
    };
    api
      .login(loginRequest)
      .then(data => {
        localStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken);
        this.props.onLogin();
      })
      .catch(error => {
        let errorMsg;
        switch (error.status) {
          case 401:
            errorMsg = BAD_CREDENTIALS;
            break;
          default:
            errorMsg = ERROR;
        }
        this.setState({
          isError: true,
          errorMsg: errorMsg
        });
      });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="c-login">
        <form
          className="c-login__form wildphotoForm"
          onSubmit={this.handleFormSubmit}
        >
          <h3>Войти</h3>
          <Input
            type="text"
            iconType="emailOrLogin"
            name="emailOrLogin"
            placeholder="E-mail или логин"
            required={true}
            onChange={this.handleChange}
          />
          <Input
            type="password"
            iconType="password"
            name="password"
            placeholder="Пароль"
            required={true}
            onChange={this.handleChange}
          />
          {this.state.isError && (
            <p className="wildphotoForm__errorArea">{this.state.errorMsg}</p>
          )}
          <div className="wildphotoForm__btnArea">
            <button
              type="button"
              className="wildphotoForm__btn"
              onClick={this.props.onCancel}
            >
              Отмена
            </button>
            <button className="wildphotoForm__btn wildphotoForm__btn_submit">
              Войти
            </button>
          </div>
          <p className="wildphotoForm__signup">
            {NOT_REGISTER_YET}{" "}
            <button
              type="button"
              className="button-like-link"
              onClick={this.props.onSignupRequest}
            >
              Зарегистрироваться
            </button>
          </p>
        </form>
      </div>
    );
  }
}
