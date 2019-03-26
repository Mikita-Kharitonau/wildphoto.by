import { apiBasePath, ACCESS_TOKEN_KEY } from "./constants/index.js";

const wildphotoApi = {
  getAllPhotos: q => {
    return fetch(apiBasePath + "/photos").then(res => res.json());
  },

  getPhotoById: id => {
    return fetch(apiBasePath + "/photo/" + id).then(res => res.json());
  },

  login: loginRequest => {
    return fetch(apiBasePath + "/auth/login", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(loginRequest)
    }).then(response => {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    });
  },

  signup: signupRequest => {
    return fetch(apiBasePath + "/auth/signup", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(signupRequest)
    }).then(response => {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    });
  },

  getCurrentUser: () => {
    const currentAccessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    return fetch(apiBasePath + "/user/me", {
      method: "GET",
      headers: new Headers({ Authorization: "Bearer " + currentAccessToken })
    }).then(response => {
      if (!response.ok) throw response;
      return response.json();
    });
  }
};

export default wildphotoApi;
