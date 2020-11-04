import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Button, Media } from "react-bootstrap";

import axios from "axios";

const CommentCard = (props) => {
  const { content, user, _id, } = props.post;

  console.log(`caption:`, content);

  console.log(`user:`, user);

  console.log(`_id:`, _id);

  console.log(`@@@@@@@@@@@@@@@@@@@@@@@@@@@@`);

  const deleteComment = (e) => {
    axios.delete(`http://localhost:3001/api/v1/comment/${_id}`);
    console.log("deleted");
  };

  return (
    <>
    <p>;sldjf;aslfjk;asljf;asljf</p>
    <div>
    <Media>
      <img
        width={64}
        height={64}
        className="mr-3"
        src="holder.js/64x64"
        alt="Generic placeholder"
      />
      <Media.Body>
        <h5>Media Heading</h5>
        <p>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
        </p>
      </Media.Body>
      <Button variant="danger" onClick={deleteComment}>
        Delete
      </Button>
    </Media>
    </div>
    </>
  );
};

export default CommentCard;
