import React from 'react';
import {IPostProps} from "../../../interfaces/postInterfaces/postInterfaces";


const Post = ({post, getPostDetails}:IPostProps) => {
    const {id, title, body} = post

    // const postDetails = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     ev.preventDefault()
    //     let p = document.createElement('p')
    //     p.innerText = body
    // }
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