import React, {useEffect, useState} from 'react';
import UserDetails from "../components/UsersContainer/UserDetails";
import {Outlet, useParams} from "react-router-dom";
import {userServices} from "../services/userServices";

const UsersDetailsPage = () => {
    const [usersDetails, setUsersDetails] = useState(null)
    const {id} = useParams()

    useEffect(()=>{
        userServices.getById(id).then(({data})=>setUsersDetails(data))
    }, [id])

    return (
        <div>

            {usersDetails && <UserDetails usersDetails={usersDetails}/>}
            <Outlet/>
            <hr/>
        </div>
    );
};

export default UsersDetailsPage;