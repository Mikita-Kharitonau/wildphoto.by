import React, { Component } from "react";
import "./Signup.css";
import Input from "../input/Input";
import { ERROR } from "../constants";
import api from "../api";

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      passwordConfirmation: "",
      isError: false
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { email, password, passwordConfirmation } = this.state;
    const signupRequest = {
      email: email,
      password: password
    };
    api
      .signup(signupRequest)
      .then(data => {
        console.log(data);
        this.props.onSignup();
      })
      .catch(error => {
          console.error(error)
        let errorMsg;
        switch (error.status) {
          case 400:
            errorMsg = "Не прошла валидация на сервер";
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
          <h3>Регистрация</h3>
          <Input
            type="email"
            iconType="emailOrLogin"
            name="email"
            placeholder="Ваш E-mail"
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
          <Input
            type="password"
            iconType="password"
            name="passwordConfirmation"
            placeholder="Подтвердите пароль"
            required={true}
            onChange={this.handleChange}
          />
          {this.state.isError && (
            <p className="wildphotoForm__errorArea">{this.state.errorMsg}</p>
          )}
          <div className="wildphotoForm__btnArea">
            <button
              className="wildphotoForm__btn"
              onClick={this.props.onCancel}
            >
              Отмена
            </button>
            <button
              className="wildphotoForm__btn wildphotoForm__btn_submit"
              type="submit"
            >
              Регистрация
            </button>
          </div>
        </form>
      </div>
    );
  }
}
