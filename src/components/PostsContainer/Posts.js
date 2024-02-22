import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {commentServices} from "../../services/commentServices";
import Post from "./Post";

const Posts = () => {
    const [post,setPost] = useState([])
    const {state: {postId}} = useLocation()

    useEffect(()=>{
        commentServices.getPostById(postId).then(({data}) => setPost(data))
    },[postId])

    return (
        <div>
            {<Post key={post.id} post={post}/>}
        </div>
    );
};

export default Posts;