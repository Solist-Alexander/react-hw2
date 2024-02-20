import React, {useEffect, useState} from 'react';
import {userService} from "../../services/userService";
import UserForm from "./UserForm";
import Users from "./Users";

const UsersContainer = () => {
    const [users, setUsers] = useState([])
    const [trigger, setTrigger] = useState(null)

    useEffect(()=>{
        userService.getAll().then(({data})=> setUsers(data))
    }, [trigger])
    return (
        <div>
            <UserForm setTrigger={setTrigger}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export default UsersContainer;