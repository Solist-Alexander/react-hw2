import React from 'react';
import { IPropsDetails} from "../../../interfaces/postInterfaces/postInterfaces";

const PostDetails = ({postDetails}: IPropsDetails) => {
    if (!postDetails) return null;
    const {body, id, title} = postDetails
    return (
        <div>
            <div>ID: {id}</div>
            <div>Title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export default PostDetails;