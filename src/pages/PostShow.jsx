import React from "react";
import PostCard from "../components/Post/PostCard"
import usePost from "../hooks/usePost"



function PostShow(props) {
    const [post] = usePost(props.match.params.id);
    return post ? <PostCard post={post}/> : <h3>Loading..</h3>
}

export default PostShow;