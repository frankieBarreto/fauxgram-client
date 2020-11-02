import React, { Component } from "react";
import PostModel from "../models/PostModel";

class NewPost extends Component {
  // TODO bring in user id
  state = {
    image: "",
    caption: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    PostModel.create(this.state)
      .then((json) => {
      console.log("post.create: ", this.state)
      this.props.history.push("/post");
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
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

          <input type="submit" value="Save!" />
        </form>
      </div>
    );
  }
}

export default NewPost;
