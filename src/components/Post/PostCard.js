import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Button, } from "react-bootstrap";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil/atoms";

const PostCard = (props) => {
  const { caption, image, user, comments, likes, _id, created_at } = props.post;
  // const userId = useRecoilValue(userState)
  const deletePost = (e) => {
    axios.delete(`http://localhost:3001/api/v1/post/${_id}`);
  };

  return (
    <>
      
        <Card style={{ width: "18rem" }}>
          <Link to={`/post/${_id}`}>
            <Card.Img variant="top" src={image} />
          </Link>
          <Card.Body>
            <Card.Text>
              <container className="blockquote-footer">
                @{user ? user.username : "Undefined"}:&nbsp;
                <cite title="Source Title">{caption}</cite>
              </container>
              <Button variant="warning">
                <Link to={`/post/${_id}/edit`} style={{color: 'white'}}>Edit</Link>
              </Button>
              <Button variant="danger" onClick={deletePost}>
                Delete
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>

    </>
  );
};

export default PostCard;
