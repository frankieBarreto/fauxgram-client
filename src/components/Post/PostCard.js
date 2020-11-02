import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Button } from "react-bootstrap";
import PostModel from "../../models/PostModel";
import axios from 'axios'

const PostCard = (props) => {
  const { caption, image, user, comments, likes, _id, created_at } = props.post;

  // console.log(`caption:`, caption);
  // console.log(`image:`, image);
  // console.log(`user:`, user);
  // console.log(`likes:`, likes);
  // console.log(`_id:`, _id);
  // console.log(`comments:`, comments);
  // console.log(`@@@@@@@@@@@@@@@@@@@@@@@@@@@@`);


  const deletePost = (e) => {
    // PostModel.delete(_id)
    axios.delete(`http://localhost:3001/api/v1/post/${_id}`)
    console.log('deleted')
}

  return (
    <>
      <Container>
        <Card>
          <Link to={`/post/${_id}`}>
            <Card.Img variant="top" src={image} />
          </Link>
          <Card.Body>
            <Card.Text>
              <h5>@username:&nbsp;{caption}</h5>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>

      <Link to={`/post/${_id}`}>
        <div className="post-card">
          <div className="image-wrapper"></div>
        </div>
      </Link>
      <Link to={`/post/${_id}/edit`} style={{ color: "black" }}>
        Edit
      </Link>
      <Button variant="danger" onClick={deletePost}>Delete</Button>

    </>
  );
};

export default PostCard;
