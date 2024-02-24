import React from 'react';
import {useNavigate} from "react-router-dom";

const UserDetails = ({usersDetails}) => {
    const {id, name, username, email, phone} = usersDetails
    const navigate = useNavigate()
    return (
        <div>
            <h2>id: {id}, name: {name}, userName: {username}</h2>
            <h3>email: {email}</h3>
            <h3>phone: {phone}</h3>
            <button onClick={()=> navigate('posts')}>post of current user</button>
            {/*<button onClick={()=> navigate(id.toString())}>User Details</button>*/}
            <hr/>
        </div>
    );
};

export default UserDetails;