import React, {useEffect, useState} from 'react';
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import {commentService} from "../../services/commentService";

const CommentsContainer = () => {
    const [comments, setComments] = useState([])
    const [trigger, setTrigger] = useState(null)

    useEffect(() =>{
        commentService.getAll().then(({data}) => setComments(data))
    },[trigger])
    console.log(comments)
    return (
        <div>
            <CommentForm setTrigger={setTrigger}/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export default CommentsContainer;