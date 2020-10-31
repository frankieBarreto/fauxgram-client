import React, { useState } from "react";
import PostModel from "../models/PostModel";

function NewPost(props) {
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    PostModel.create({ image, caption}).then((data) => {
      props.history.push("/post");
    });
  }

  return (
    <div>
    <h2>New Post</h2>
    <form onSubmit={handleSubmit}>
      <div className='form-input'>
        <label htmlFor='caption'>Caption</label>
        <input
          type='text'
          name='caption'
          onChange={(e) => setCaption(e.target.value)}
          value={caption}
        />
      </div>
      <div className='form-input'>
        <label htmlFor='image'>Image URL</label>
        <input
          type='text'
          name='image'
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
      </div>

      <input type='submit' value='Save!' />
    </form>
  </div>
  )
}

export default NewPost;
