import React from "react";
import PostCard from "../components/Post/PostCard";
import usePosts from "../hooks/usePost";

//FIXME code not showing all post in post page

function PostList(props) {
  const [posts, fetchPosts] = usePosts();
  console.log(`posts=>`,posts)
  return (
    <div>
      <h1>Posts</h1>
      <button onClick={fetchPosts}>Refresh</button>
      {posts.length ? <PostCard data={posts} /> : <h1>Loading...</h1>}
    </div>
  );
}

export default PostList;
