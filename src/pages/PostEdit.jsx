import React, { Component } from "react";
import PostModel from "../models/PostModel";

class PostEdit extends Component {
  state = {
    image: "",
    caption: "",
    likes: 0,
    comments: [],
  };

  componentDidMount() {
    this.fetchPost();
  }

  fetchPost = () => {
    PostModel.show(this.props.match.params.id)
    .then((json) => {
      this.setState({
        ...json.post,
        image: json.post.image,
      });
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    PostModel.edit(this.props.match.params.id, this.state)
    .then(json => {
      this.props.history.push(`/post/${this.props.match.params.id}`)
    });
  };

  handleChange = (e) => {
    if (e.target.type !== "text") {
      this.setState({
        image: e.target.value,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };


  render() {
    return (
      <div>
        <h2>Edit {this.state.caption}</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-input">
            <label htmlFor="image">Image URL</label>
            <input
              type="text"
              name="image"
              onChange={this.handleChange}
              value={this.state.image}
            />
          </div>
          <div className="form-input">
            <label htmlFor="caption">Caption</label>
            <input
              type="text"
              name="caption"
              onChange={this.handleChange}
              value={this.state.caption}
            />
          </div>

          <input type="submit" value="Update Post" />
        </form>
      </div>
    );
  }
}

export default PostEdit;
