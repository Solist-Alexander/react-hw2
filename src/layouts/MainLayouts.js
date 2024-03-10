import React from 'react';
import Header from "../components/Header/Header";
import {Outlet} from "react-router-dom";

const MainLayouts = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default MainLayouts;