import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment
    const navigate = useNavigate()
    return (
        <div>
            <h3>postId: {postId} id: {id}</h3>
            <h4>name: {name}, email: {email}</h4>
            <h4>body:</h4>
            <h5>{body}</h5>
            <button onClick={()=> navigate('posts', {state: {postId}})}>getPosts</button>
        </div>
    );
};

export default Comment;