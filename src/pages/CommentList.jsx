import React, { Component } from "react";
import Comments from '../components/Comment/Comments'
import CommentModel from '../models/CommentModel'

import { Spinner } from "react-bootstrap";

//FIXME code not showing all post in post page

class CommentList extends Component {
  state = {
    comments: [],
    
  }
  

  componentDidMount() {
    this.fetchComments()
  }

  fetchComments() {
  
    CommentModel.all()
    .then(json=>{
      this.setState({
        comments: json.comment
      })
      console.log(json.comment)
    })
  }

  render() {
    console.log(this.state.comments, "CommentList")
    return(
      <Comments data={this.state.comments} /> 
      //  <Spinner animation="grow" variant="warning" />
    )
  }
}

export default CommentList;
