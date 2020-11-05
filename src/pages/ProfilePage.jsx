import React, { useEffect, useState } from "react";
import ProfileCard from "../components/Profile/ProfileCard";
import UserModel from "../models/UserModel";
import PostModel from "../models/PostModel";

import { useRecoilState } from "recoil";
import { userState } from "../recoil/atoms";
import { Spinner } from "react-bootstrap";

function ProfilePage(props) {
  const [user, setUser] = useRecoilState(userState);
  const [posts, setPost] = useState([]);
  console.log(user);

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

  console.log("State from hook", posts);

  return <ProfileCard data={posts}/>;
}

export default ProfilePage;
