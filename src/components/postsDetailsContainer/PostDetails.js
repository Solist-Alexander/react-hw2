import React from 'react';

const PostDetails = ({post}) => {
    const {userId, id, title, body} = post
    return (
        <div>
            <h2>userId: {userId}, id: {id}</h2>
            <h2>title: {title}</h2>
            <h3>body:</h3>
            <h2>{body}:</h2>
        </div>
    );
};

export default PostDetails;