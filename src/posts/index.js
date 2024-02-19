import "../../style.scss";
import {
  createAlert,
  createCards,
  createPreloader,
  deleteLoader,
} from "./post-elements";

const API_PATH = {
  posts: "https://jsonplaceholder.typicode.com/posts",
  commentsById: function (id) {
    return `https://jsonplaceholder.typicode.com/posts/${id}/comments/`;
  },
};

function requestData(url, errorMessage = "url not found") {
  createPreloader();
  return fetch(url, { method: "GET" }).then(function (res) {
    if (!res.ok) {
      throw new Error(errorMessage);
    }
    return res.json();
  });
}

requestData(API_PATH.posts, "Post not Found")
  .then(function (data) {
    createCards(data);
    deleteLoader();
  })
  .catch(function (error) {
    deleteLoader();
    createAlert(error);
  });
