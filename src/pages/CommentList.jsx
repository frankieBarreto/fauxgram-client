import React, { Component } from "react";
import Comments from "../components/Comment/Comments";
import CommentModel from "../models/CommentModel";
import axios from "axios";
import { Spinner } from "react-bootstrap";

//FIXME code not showing all post in post page

class CommentList extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    this.fetchComments();
  }

  

  fetchComments() {
    CommentModel.all().then((json) => {
      console.log("json from commentlist:", json)
      this.setState({
        comments: json.comment,
      });
      console.log(json);
    });
  }

  deletePost = (e, id) => {
    axios.delete(`http://localhost:3001/api/v1/comment/${id}`, {
      headers: {
        authorization:`Bearer ${localStorage.uid}`,
      }
    }).then(()=> this.fetchPosts());
    console.log('clicked', )
  };

  render() {
    console.log(this.state.comments, "CommentList");
    return this.state.comments ? (
      <Comments data={this.state.comments} />
    ) : (
      <Spinner animation="grow" variant="warning" />
    );
  }
}

export default CommentList;
