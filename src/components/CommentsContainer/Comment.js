import React from 'react';

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment
    return (
        <div>
            <h2>postId: {postId}, id: {id}</h2>
            <h3>name: {name}</h3>
            <h3>email: {email}</h3>
            <h4>body:</h4>
            <p>{body}</p>
            <hr/>
        </div>
    );
};

export default Comment;