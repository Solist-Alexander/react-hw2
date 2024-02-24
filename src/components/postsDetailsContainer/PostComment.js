import React from 'react';

const PostComment = ({comment}) => {
    const {postId, id, name, email, body} = comment
    return (
        <div>
            <br/>
            <h2>postId: {postId}, id: {id}</h2>
            <h2>name: {name}</h2>
            <h2>email: {email}</h2>
            <h3>body: {body}</h3>
            <hr/>
        </div>
    );
};

export default PostComment;