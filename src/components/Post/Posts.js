import React from 'react';
import PostCard from './PostCard';

const Posts = (props) => {
    console.log(props, "from posts.js")
    function generatePosts(posts) {
        console.log(posts, "from posts.js")
        return posts.map(post => {
            return <PostCard key={post.id} post={post} />
        })
    }

    return (
        <div>
            {generatePosts(props.data)}
        </div>
    )
}

export default Posts;