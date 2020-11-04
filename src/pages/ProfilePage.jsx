import React, { Component } from "react";
import Posts from "../components/Post/Posts";
import PostModel from "../models/PostModel";

import { Spinner } from "react-bootstrap";

class ProfilePage extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    if (localStorage.getItem("uid")) {
      PostModel.all().then((json) => {
        this.setState({
          posts: json.post,
        });
        console.log(json.post);
      });
    }
  }

  render() {
    console.log(this.state.posts, "profilePage");
    return this.state.posts ? (
      <Posts data={this.state.posts} />
    ) : (
      <Spinner animation="grow" variant="warning" />
    );
  }
}

export default ProfilePage;
