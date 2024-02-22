import React from 'react';

const Album = ({album}) => {
    const {userId, id, title} = album
    return (
        <div>
            <h1>userId: {userId} id: {id}</h1>
            <h2>title:</h2>
            <h3>{title}</h3>
            <hr/>
        </div>
    );
};

export default Album;