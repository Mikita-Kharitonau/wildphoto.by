
const basePath = "http://localhost:8080/api";

const galleryApi = {

  getAllPhotos: (q) => {
    return fetch(basePath + "/photo")
      .then(res => res.json())
  },

  getPhotoById: (id) => {
    return fetch(basePath + "/photo/" + id)
      .then(res => res.json())
  }
}

export default galleryApi;