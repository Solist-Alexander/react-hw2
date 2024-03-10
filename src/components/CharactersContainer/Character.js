import React from 'react';

const Character = ({character}) => {
    const {id, name, status, gender, image} = character;
    return (
        <div>
            <p>Id: {id}</p>
            <p>name: {name}</p>
            <p>status: {status}</p>
            <p>gender: {gender}</p>
            <img src={image} alt={name}/>
            <hr/>
        </div>
    );
};

export default Character;