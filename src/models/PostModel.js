const URL = "http://localhost:3001/api/v1/post";

class PostModel {
    static all = () => {
        return fetch(URL).then((response) => response.json());
    };

    static show = (postId) => {
        return fetch(`${URL}/${postId}`).then((response) => response.json());
    };

    static create = (postData) =>{
        return fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        }).then((response) => response.json());
    }

    static update = (postId, postData) => {
        return fetch(`${URL}/${postId}`, {
            method: "PUT",
            header: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        }).then((response) => response.json());
    };
}


export default PostModel;
