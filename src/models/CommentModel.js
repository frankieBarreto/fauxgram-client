const URL = "http://localhost:3001/api/v1/comments/";

class CommentModel {
  static all = () => {
    return fetch(URL).then((response) => response.json());
  };

  static show = (commentId) => {
    return fetch(`${URL}/${commentId}`).then((response) => response.json());
  };

  static create = (commentData) => {
    return fetch(`http://localhost:3001/api/v1/comments/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${localStorage.uid}`
      },
      body: JSON.stringify(commentData),
    }).then((response) => response.json());
  };

  static update = (commentId, commentData) => {
    return fetch(`${URL}/${commentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    }).then((response) => response.json());
  };
}

export default CommentModel;
