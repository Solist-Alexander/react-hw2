import React from 'react';
import CommentsContainer from "../components/CommentsContainer/CommentsContainer";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div style={{display: 'flex'}}>
            <CommentsContainer/>
            <Outlet/>
        </div>
    );
};

export default CommentsPage;