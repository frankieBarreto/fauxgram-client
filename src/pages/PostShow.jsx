import React, { Component } from "react";
import PostCard from "../components/Post/PostCard"
import PostModel from "../models/PostModel";




class PostShow extends Component {
    state = {
        post: null,
    }

    componentDidMount() {
        this.fetchPost();
    }

    fetchPost = () => {
        PostModel.show(this.props.match.params.id)
          .then(json =>{
              this.setState({
                  post:json.post
              })
          })
    }

    render() {
        return (
            this.state.post ?
            <PostCard post={this.state.post} /> :
            <h4>Waiting on post...</h4>
        )
    }
}

export default PostShow;