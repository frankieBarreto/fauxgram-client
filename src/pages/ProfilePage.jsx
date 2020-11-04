import React, {useEffect} from "react";
// import ProfileCarousel from "../components/Profile/ProfileCarousel"
import ProfilePost from "../components/Profile/ProfilePost"
import UserModel from "../models/UserModel"
import PostModel from "../models/PostModel"
import {useRecoilState} from "recoil";
import {userState} from "../recoil/atoms"

// FIXME MAKE USER NOT BE UNDEFINED
function ProfilePage()  {  
  const [user, setUser] = useRecoilState(userState);
  const [posts, setPosts] = useRecoilState(userState);

  useEffect(function () {
    if (localStorage.getItem("uid")) {
      UserModel.show().then((response) => {
        setUser(response.data);
      });
    }
    // this line disables syntax warnings?
    // eslint-disable-next-line 
  }, []);

  useEffect(function () {
    if (localStorage.getItem("uid")) {
      PostModel.all().then((response) => {
        setPosts(response.data);
      });
    }
    // this line disables syntax warnings?
    // eslint-disable-next-line 
  }, []);

    // console.log(user, "********profilepage")
    return (
      <>
        {/* <ProfileCarousel data={user}/> */}
        <ProfilePost data={user} posts={posts}/>
      </>
    );
  
}

export default ProfilePage;
