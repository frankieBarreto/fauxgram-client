import React from "react";
import { Link } from "react-router-dom";



const PostCard = (props) => {
  const { caption, image, user, comments, likes, _id, created_at } = props.post;
  console.log(`caption:`, caption);
  console.log(`image:`, image);
  console.log(`user:`, user);
  console.log(`likes:`, likes);
  console.log(`_id:`,_id);
  console.log(`@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`);
  return (
    <>
      
      <Link to={`/post/${_id}`}>
        <div className="post-card">
          {/* <div>{user.username}</div> */}
          <div className="image-wrapper">
            <img src={image} alt="" />
          </div>
        </div>
      </Link>
      <Link to={`/post/${_id}/edit`} style={{color: 'black'}}>Edit</Link>
      <h4>{caption}</h4>
      <h4>{likes}</h4>
      <h4>{created_at}</h4>
      <h4>{comments}</h4>
    </>
  );
};

export default PostCard;
