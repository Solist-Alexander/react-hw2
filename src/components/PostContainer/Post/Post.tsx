import React from 'react';
import {IPostProps} from "../../../interfaces/postInterfaces/postInterfaces";


const Post = ({post, getPostDetails}:IPostProps) => {
    const {id, title} = post

    return (
        <div>
            <div>ID: {id}</div>
            <div>Title: {title}</div>
            <button onClick={() => getPostDetails(post)}>Post Details</button>
            <hr/>
            <br/>
        </div>
    );
};

export default Post;