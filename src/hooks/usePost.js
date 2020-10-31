import { useState, useEffect } from "react";
import PostModel from "../models/PostModel";

function usePosts(postId) {
  const [posts, setPosts] = useState([]);

  function fetchPosts(id) {
    if (id) {
      PostModel.show(id).then((data) => {
        setPosts(data.post);
      });
    } else {
      PostModel.all().then((data) => {
        setPosts(data.posts);
      });
    }
  }

  useEffect(
    function () {
      fetchPosts(postId);
    },
    [postId]
  );

  return [posts, fetchPosts];
}

export default usePosts;
