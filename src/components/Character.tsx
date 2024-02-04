import React from 'react';

interface ICharacterProps {
    name: string;
    surname: string;
    age: number;
    info: string;
    photo: string;
}

const Character: React.FC<ICharacterProps> = ({name, surname, age, info, photo}) => {

    return (
        <div>
            <h1> name:{name} surname: {surname}</h1>
            <h2>age: {age}</h2>
            <p>{info}</p>
            <img src={photo} alt=""/>
            <hr/>
        </div>
    );
};

export default Character;