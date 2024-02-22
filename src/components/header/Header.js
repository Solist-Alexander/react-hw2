import React from 'react';

import style from './header.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={'headerDiv'}>
            <NavLink to={'albums'}>Albums</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
            <NavLink to={'todos'}>Todos</NavLink>
        </div>
    );
};

export default Header;