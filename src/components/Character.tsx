import React from 'react';

interface ICharacterProps{
    id:number,
    name: string,
    status: string,
    species: string,
    gender: string,
    image: string
}

const Character:React.FC<ICharacterProps> = ({id,name,status,species,gender,image}) => {
    return (
        <div>
            <h1>id:{id} name:{name} </h1>
            <h2>status: {status}</h2>
            <h2>gender: {gender}</h2>
            <h2>{species}</h2>
            <img src={image} alt=""/>
            <hr/>
        </div>
    );
};

export default Character;