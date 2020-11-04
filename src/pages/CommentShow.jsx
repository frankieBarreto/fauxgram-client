import React, { Component } from "react";
import PostCard from "../components/Post/PostCard"
import CommentModel from "../models/CommentModel";
import {Spinner} from "react-bootstrap"

class CommentShow extends Component {
    state = {
        comment: null,
    }

    componentDidMount() {
        this.fetchPost();
    }

    fetchPost = () => {
        CommentModel.show(this.props.match.params.id)
          .then(json =>{
              this.setState({
                  comment:json.comment
              })
          })
    }

    
    render() {
        return (
            // <CommentCard post={this.state.post} /> :
            <div>
            
            <Spinner animation="grow" variant="warning" />
            </div>
        )
    }
}

export default CommentShow;