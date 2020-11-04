import React from "react";
import ProfileCards from "../Profile/ProfileCards";
import {Container} from "react-bootstrap"

const ProfilePost = (props) => {
  const user = props.data;
  const posts = user.posts;

  const allPosts = props.posts
  console.log(allPosts, "-------allPosts")
  // console.log(user, "---------------", posts);
  function generateUserPosts(userPosts) {
    return userPosts.map((post) => {
      return <ProfileCards key={user._id} data={user} />;
    });
  }
  return <Container>{generateUserPosts(posts)}</Container>;
};

export default ProfilePost;
