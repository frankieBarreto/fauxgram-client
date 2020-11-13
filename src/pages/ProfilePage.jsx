import React, { useEffect, useState } from "react";
import ProfileCard from "../components/Profile/ProfileCard";
import UserModel from "../models/UserModel";
import PostModel from "../models/PostModel";
import axios from "axios"
import { useRecoilState } from "recoil";
import { userState } from "../recoil/atoms";
import { Spinner } from "react-bootstrap";

function ProfilePage(props) {
  const [user, setUser] = useRecoilState(userState);
  const [posts, setPost] = useState([]);
  // console.log(user);

  useEffect(function () {
    if (localStorage.getItem("uid")) {
      UserModel.show().then((response) => {
        setUser(response.data);
      });
    }
    // this line disables syntax warnings?
    // eslint-disable-next-line
  }, []);

  const id = user._id;
  useEffect(() => {
    userPost(id);
  }, []);

  const userPost = (id) => {
    return fetch(
      `http://localhost:3001/api/v1/post/user/${id}`
    ).then((response) => response.json()).then(json =>{
      setPost(json)
    })

  };

  const fetchPosts = () => {
    PostModel.all().then((json) => {
      this.setState({
        posts: json.post,
      });
      
    });
  }

  const deletePost = (e, id) => {
    axios.delete(`http://localhost:3001/api/v1/post/${id}`, {
      headers: {
        authorization:`Bearer ${localStorage.uid}`,
      }
    }).then(()=> fetchPosts());
    console.log('clicked', )
  };

  console.log("State from hook", user.posts);

  return <ProfileCard user={user} data={user.posts} delete={deletePost}/>;
}

export default ProfilePage;
