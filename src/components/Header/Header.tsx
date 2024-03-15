import React from 'react';

import style from './Header.module.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={style.header}>
            <div>
                <h1>Cars</h1>
            </div>
            <div className={style.tools}>
                <Link to={'/login'}>Login</Link>
                <Link to={'/register'}>Register</Link>
            </div>
        </div>
    );
};

export default Header;