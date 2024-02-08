import React, {useEffect, useState} from 'react';
import {postService} from "../../../services/postService";
import Post from "../Post/Post";
import {IPost, IPropsDetails} from "../../../interfaces/postInterfaces/postInterfaces";
import PostDetails from "../PostDetails/PostDetails";

const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    const [postDetails, setPostDetails] = useState<IPost | null>(null)
    useEffect(()=>{
        postService.getAll().then(({data}) => setPosts(data))
    }, [])

    const getPostDetails = (post: IPost) =>{
        setPostDetails(post)
    }

    return (
        <div>
            {postDetails && <PostDetails  postDetails={postDetails}/> }
            <hr/>
            {posts.map((post: IPost) => <Post key={post.id} post={post} getPostDetails={getPostDetails}/>)}
        </div>
    );
};

export default Posts;