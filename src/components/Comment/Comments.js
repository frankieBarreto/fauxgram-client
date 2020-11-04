import React from 'react';

import CommentCard from "./CommentCard"

const Comments = (props) => {
    console.log("from Comments: ", props.data)
    function generateComments(comments) {
        return comments.map(comment => (
         <CommentCard data={comment} />
        ))
    }

    return (
        <div>
            {generateComments(props.data)}
        </div>
    )
}

export default Comments;