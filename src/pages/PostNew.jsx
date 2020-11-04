import React, { Component } from "react";
import PostModel from "../models/PostModel";
import { Card, Container } from "react-bootstrap";
class NewPost extends Component {
  state = {
    image: "",
    caption: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    PostModel.create(this.state)
      .then((json) => {
      console.log("post.create: ", this.state)
      this.props.history.push("/posts");
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <Container>
      <Card style={{ width: "30rem" }}>

        <h2>New Post</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-input">
            <label htmlFor="caption">Caption</label>
            <input
              type="text"
              name="caption"
              onChange={this.handleChange}
              value={this.state.caption}
            />
          </div>
          <div className="form-input">
            <label htmlFor="image">Image URL</label>
            <input
              type="text"
              name="image"
              onChange={this.handleChange}
              value={this.state.image}
            />
          </div>

          <input type="submit" value="Post" />
        </form>
      
      </Card>
    </Container>
    );
  }
}

export default NewPost;
