import React, {useEffect, useState} from 'react';
import {commentServices} from "../../services/commentServices";
import Comments from "./Comments";

const CommentsContainer = () => {
    const [comments, setComments] = useState([])

   useEffect(()=>{
       commentServices.getAll().then(({data})=> setComments(data))
   })

    return (
        <div style={{border:'2px solid grey', width:'500px'}}>
            <Comments comments={comments}/>
        </div>
    );
};

export default CommentsContainer;