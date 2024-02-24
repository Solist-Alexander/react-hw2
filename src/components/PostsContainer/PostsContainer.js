import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Posts from "./Posts";
import {userServices} from "../../services/userServices";

const PostsContainer = () => {
    const [posts, setPosts] = useState([])
    const {id} = useParams()

    useEffect(() => {
        userServices.getPostsById(id).then(({data}) => setPosts(data))
    }, [])


    return (
        <div>
            <Posts posts={posts} />

        </div>
    );
};

export default PostsContainer;