import React from 'react';

const Post = ({post}) => {
    const {userId, id, title, body} = post
    return (
        <div>
            <h3>userId: {userId} id: {id}</h3>
            <h4>title: {title}</h4>
            <h4>body:</h4>
            <h5>{body}</h5>
        </div>
    );
};

export default Post;