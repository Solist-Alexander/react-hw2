import React from 'react';

const Todo = ({todo}) => {
    const {userId, id, title} = todo
    return (
        <div>
            <h1>userId: {userId} id: {id}</h1>
            <h2>title:</h2>
            <h3>{title}</h3>
            <hr/>
        </div>
    );
};

export default Todo;