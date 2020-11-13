import React, { Component } from "react";
import Posts from "../components/Post/Posts";
import PostModel from "../models/PostModel";
import axios from "axios";
import  "../components/Post/Post.css"
import { Spinner } from "react-bootstrap";

class PostList extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    PostModel.all().then((json) => {
      this.setState({
        posts: json.post,
      });
      
    });
  }

  deletePost = (e, id) => {
    axios.delete(`http://localhost:3001/api/v1/post/${id}`, {
      headers: {
        authorization:`Bearer ${localStorage.uid}`,
      }
    }).then(()=> this.fetchPosts());
    console.log('clicked', )
  };

  render() {
    return this.state.posts ? (
      <Posts data={this.state.posts} delete={this.deletePost}/>
    ) : (
      <Spinner animation="grow" variant="warning" />
    );
  }
}

export default PostList;
