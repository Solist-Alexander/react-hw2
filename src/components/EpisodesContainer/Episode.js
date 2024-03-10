import React from 'react';

import style from './Episode.css'
import {useNavigate} from "react-router-dom";


const Episode = ({episode}) => {
    const {id, name, episode: chapter, characters} = episode

    const navigate = useNavigate()

    return (
        <div className={'episodeDiv'}>
            <button onClick={() => navigate(`/characters/${id}`, {state: {characters}})}>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>Chapter:  {chapter}</p>
            </button>
        </div>
    );
};

export default Episode;