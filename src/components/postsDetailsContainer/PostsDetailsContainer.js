import React, {useEffect, useState} from 'react';
import {userServices} from "../../services/userServices";
import {useParams} from "react-router-dom";
import PostDetails from "./PostDetails";
import PostComments from "./PostComments";

const PostsDetailsContainer = () => {
    const {id} = useParams()
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])

    useEffect(() => {
        userServices.getPostById(id)
            .then(({data}) => setPost(data))
    }, [])

    useEffect(() => {
        userServices.getPostCommentsById(id)
            .then(({data}) => setComments(data))
    }, [])

    return (
        <div>
            <PostDetails post={post} key={post.id}/>
            <hr/>
            <PostComments comments={comments}/>
        </div>
    );
};

export default PostsDetailsContainer;