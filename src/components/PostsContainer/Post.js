import React from 'react';
import {useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const {userId,id,title} = post
    const navigate = useNavigate()
    return (
        <div>
            <h2>userId: {userId}, id: {id}</h2>
            <h2>title: {title}</h2>
            <button onClick={()=> navigate('/postDetails/' + id.toString())}>Post Details</button>
        </div>
    );
};

export default Post;