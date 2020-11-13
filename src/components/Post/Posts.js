import React from 'react';
import PostCard from './PostCard';
import { Container, Row, Col, } from "react-bootstrap"

const Posts = (props) => {
    
    function generatePosts(posts) {
        return posts.map(post => {
            return <PostCard key={post.id} post={post} delete={props.delete}/>
        })
    }

    return (

        
        <Container>
        <Row>
            {generatePosts(props.data)}
        </Row>
        </Container>
        

    )
}

export default Posts;