import React from 'react';
import PostCard from "../Post/PostCard";
import { Container, Row} from "react-bootstrap"

const ProfileCard = (props) => {
    
    console.log("from profilepage", props)
    return (
        
        <Container>
            {props.data && (props.data.map(post=>{
                return <Row><PostCard key={post.id} post={post} delete={props.delete}/></Row>
            }))}
        </Container>
        
    )
}
export default ProfileCard;