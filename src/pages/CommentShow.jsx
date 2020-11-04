import React, { Component } from "react";
import CommentCard from "../components/Comment/CommentCard"
import CommentModel from "../models/CommentModel";
import {Spinner} from "react-bootstrap"

class CommentShow extends Component {
    state = {
        comment: null,
    }

    componentDidMount() {
        this.fetchComment();
    }

    fetchComment = () => {
        CommentModel.show(this.props.match.params.id)
          .then(json =>{
              this.setState({
                  comment:json.comment
              })
          })
    }

    
    render() {
        return (
            this.state.comment ?
            <CommentCard data={this.state.comment} /> :
            <Spinner animation="grow" variant="warning" />
        )
    }
}

export default CommentShow;