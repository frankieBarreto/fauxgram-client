import React from 'react';
import PostCard from './PostCard';
import { Container } from "react-bootstrap"
const Posts = (props) => {
    console.log(props, "from posts.js")
    function generatePosts(posts) {
        console.log(posts, "from posts.js")
        return posts.map(post => {
            return <PostCard key={post.id} post={post} />
        })
    }

    return (
        <Container>
            {generatePosts(props.data)}
        </Container>

    )
}

export default Posts;