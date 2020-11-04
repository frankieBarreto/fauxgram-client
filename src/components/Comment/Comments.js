import React from 'react';

import CommentCard from "./CommentCard"

const Comments = (props) => {
    function generateComments(comments) {
        return comments.map(comment => (
         <CommentCard comment={comment} />
        ))
    }

    return (
        <div>
            {generateComments(props.data)}
        </div>
    )
}

export default Comments;