import React from 'react';

const User = ({user}) => {
    const {id, name, username} = user
    return (
        <div>
            <h2>id: {id}</h2>
            <h3>name: {name}</h3>
            <h4>Username: {username}</h4>
        </div>
    );
};

export default User;