import React from 'react';
import PostCard from "../Post/PostCard";
import { Container } from "react-bootstrap"

const ProfileCard = (props) => {
    
    // function generatePosts(posts) {
    //     console.log(posts, "from posts.js")
    //     return posts.map(post => {
    //         return <PostCard key={post.id} post={post} />
    //     })
    // }

    return (
        <div>
            {props.data && props.data.post.map(post=>{
                return <PostCard key={post.id} post={post} />
            })}
        </div>
    )
}
        // <Container>
        //     {generatePosts(props.data)}
        // </Container>
// delete={props.delete}

export default ProfileCard;