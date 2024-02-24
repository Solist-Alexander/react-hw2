import React from 'react';
import PostComment from "./PostComment";

const PostComments = ({comments}) => {
    return (
        <div>
            {comments.map(comment =><PostComment comment={comment} key={comment.id}/>)}
        </div>
    );
};

export default PostComments;