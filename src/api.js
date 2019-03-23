import { apiBasePath } from './constants/index.js';

const wildphotoApi = {

  getAllPhotos: (q) => {
    return fetch(apiBasePath + "/photos")
      .then(res => res.json())
  },

  getPhotoById: (id) => {
    return fetch(apiBasePath + "/photo/" + id)
      .then(res => res.json())
  }
}

export default wildphotoApi;