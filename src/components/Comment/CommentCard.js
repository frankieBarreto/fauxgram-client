import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Button, Media } from "react-bootstrap";

import axios from "axios";

const CommentCard = (props) => {
  const { content, user, _id } = props.data;
  const deleteComment = (e) => {
    axios.delete(`http://localhost:3001/api/v1/comment/${_id}`);
    console.log("deleted");
  };

  return (
    <>
      <Container>

        <Card border="info" style={{ width: "18rem"}}/>
        <Card.Body style={{ background: "cornsilk" }}>

        <Media>
          <Media.Body>
            <p>{content}</p>
          </Media.Body>
        </Media>
          <Button variant="danger" onClick={deleteComment}>
            Delete
          </Button>
        </Card.Body>
        <Card />
      </Container>
      
    </>
  );
};

export default CommentCard;
