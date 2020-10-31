import React from 'react';
import PostCard from './PostCard';

const Posts = (props) => {
    function generatePosts(posts) {
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