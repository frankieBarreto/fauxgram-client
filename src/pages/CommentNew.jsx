import React, { Component } from "react";
import CommentModel from "../models/PostModel";
import { Card, Container } from "react-bootstrap";
class NewPost extends Component {
  // content user and post
  state = {
    content: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    CommentModel.create(this.state).then((json) => {
      console.log("comment.create: ", this.state);
      this.props.history.push("/comments");
    });
  };

  handleChange = (e) => {
    console.log(e)
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Container>
        <Card style={{ width: "30rem" }}>
          <h2>New Comment</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-input">
              <label htmlFor="comment">Comment: &nbsp;</label>
              <input
                type="text"
                name="content"
                onChange={this.handleChange}
                value={this.state.content}
              />
            </div>
            <input type="submit" value="Comment" />
          </form>
        </Card>
      </Container>
    );
  }
}

export default NewPost;
