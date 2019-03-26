import React, { Component } from "react";
import Header from "../header/Header.js";
import Gallery from "../gallery/Gallery.js";
import Login from "../login/Login";
import Signup from "../signup/Signup";
import ReactModal from "react-modal";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import api from "../api";
import { ACCESS_TOKEN_KEY } from "../constants";

class App extends Component {
  constructor() {
    super();
    this.headerData = {
      navbarItems: [
        {
          headerText: "Фото",
          menuItems: [
            {
              href: "/photo",
              text: "Все"
            },
            {
              href: "#/photo/genres",
              text: "Жанры"
            },
            {
              href: "#/photo/popular",
              text: "Популярные"
            },
            {
              href: "#/photo/new",
              text: "Новые"
            }
          ]
        },
        {
          headerText: "Видео",
          menuItems: [
            {
              href: "#/video/genres",
              text: "Жанры"
            },
            {
              href: "#/video/popular",
              text: "Популярные"
            },
            {
              href: "#/video/new",
              text: "Новые"
            }
          ]
        },
        {
          headerText: "Рассказы",
          menuItems: [
            {
              href: "#/stories/genres",
              text: "Жанры"
            },
            {
              href: "#/stories/popular",
              text: "Популярные"
            },
            {
              href: "#/stories/new",
              text: "Новые"
            }
          ]
        },
        {
          headerText: "Авторы",
          menuItems: [
            {
              href: "#/authors/rating",
              text: "Рейтинг авторов"
            }
          ]
        }
      ]
    };

    this.state = {
      isAuthenticated: false,
      isCurrentUserLoading: false,
      isLoginModalOpen: false,
      isSignupModalOpen: false
    };
    this.handleCloseLoginModal = this.handleCloseLoginModal.bind(this);
    this.handleLoginRequest = this.handleLoginRequest.bind(this);
    this.handleCloseSignupModal = this.handleCloseSignupModal.bind(this);
    this.handleSignupRequest = this.handleSignupRequest.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
  }

  handleCloseLoginModal() {
    this.setState({
      isLoginModalOpen: false
    });
  }

  handleCloseSignupModal() {
    this.setState({
      isSignupModalOpen: false
    });
  }

  handleLoginRequest() {
    this.setState({
      isLoginModalOpen: true
    });
  }

  handleSignupRequest() {
    this.setState({
      isLoginModalOpen: false,
      isSignupModalOpen: true
    });
  }

  handleLogin() {
    this.handleCloseLoginModal();
    this.loadCurrentUser();
  }

  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    this.setState({
      isAuthenticated: false
    });
  }

  loadCurrentUser() {
    this.setState({
      isCurrentUserLoading: true
    });
    api
      .getCurrentUser()
      .then(data => {
        this.setState({
          isCurrentUserLoading: false,
          isAuthenticated: true,
          currentUser: data
        });
      })
      .catch(error => {
        console.error(error);
        this.setState({
          isCurrentUserLoading: false
        });
      });
  }

  componentDidMount() {
    this.loadCurrentUser();
  }

  render() {
    return (
      <div className="App" id="wildphotoApp">
        <Header
          navbarItems={this.headerData.navbarItems}
          isAuthenticated={this.state.isAuthenticated}
          currentUser={this.state.currentUser}
          onLoginClick={this.handleLoginRequest}
          onLogout={this.handleLogout}
        />

        <ReactModal
          isOpen={this.state.isLoginModalOpen}
          parentSelector={() => document.getElementById("wildphotoApp")}
          className="appModal__content loginModal__content"
          overlayClassName="appModal__overlay"
          shouldFocusAfterRender={false}
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.handleCloseLoginModal}
        >
          <Login
            onCancel={this.handleCloseLoginModal}
            onLogin={this.handleLogin}
            onSignupRequest={this.handleSignupRequest}
          />
        </ReactModal>

        <ReactModal
          isOpen={this.state.isSignupModalOpen}
          parentSelector={() => document.getElementById("wildphotoApp")}
          className="appModal__content signupModal__content"
          overlayClassName="appModal__overlay"
          shouldFocusAfterRender={false}
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.handleCloseSignupModal}
        >
          <Signup
            onCancel={this.handleCloseSignupModal}
            onSignup={this.handleCloseSignupModal}
          />
        </ReactModal>

        <Gallery isAuthenticated={this.state.isAuthenticated} />
        {/* <div className="appWrapper">
          <Switch>
            <Route path="/photo" render={props => <Gallery />} />
          </Switch>
        </div> */}
      </div>
    );
  }
}

export default App;
