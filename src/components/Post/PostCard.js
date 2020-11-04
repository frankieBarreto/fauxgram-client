import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Button, ButtonGroup } from "react-bootstrap";
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil/atoms";

const PostCard = (props) => {
  const { caption, image, user, comments, likes, _id, created_at } = props.post;
  // const userId = useRecoilValue(userState)
  

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
            <ButtonGroup aria-label="Basic example">
              <Button variant="warning">
                <Link to={`/post/${_id}/edit`} style={{ color: "white" }}>
                  Edit
                </Link>
              </Button>
              <Button variant="info"><Link to={`/comment/${_id}/new`} style={{ color: "white" }}>
                  Comment
                </Link></Button>
              <Button variant="danger" onClick={(e)=>props.delete(e, _id)}>
                Delete
              </Button>
            </ButtonGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default PostCard;
