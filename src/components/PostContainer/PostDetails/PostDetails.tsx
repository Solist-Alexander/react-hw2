import React from 'react';
import {IPostProps} from "../../../interfaces/postInterfaces/postInterfaces";

const PostDetails = ({postDetails}: IPostProps) => {
    if (!postDetails) return null;
    const {body} = postDetails
    return (
        <div>
            <div>body: {body}</div>
        </div>
    );
};

export default PostDetails;