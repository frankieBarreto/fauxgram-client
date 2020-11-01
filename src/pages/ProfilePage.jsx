import React, { Component } from "react";
import ProfileCarousel from "../components/Profile/ProfileCarousel"
import ProfilePost from "../components/Profile/ProfilePost"
class ProfilePage extends Component {
  state ={
    username: "",
    email:"",
    profileImg: "",
    followers: [],
    posts:[],
  }

  render() {
    return (
      <>
        <ProfileCarousel followers={this.state.followers}/>
        <ProfilePost posts={this.state.posts} />
      </>
    );
  }
}

export default ProfilePage;
