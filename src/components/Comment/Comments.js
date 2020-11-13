import React from 'react';

import CommentCard from "./CommentCard"

const Comments = (props) => {
    console.log("from Comments: ", props.data)
    function generateComments(comments) {
        console.log(comments)
        return comments.map(comment => {
            console.log(comment)
         return <CommentCard data={comment} />
        })
    }

    return (
        <div>
            {generateComments(props.data)}
        </div>
    )
}

export default Comments;