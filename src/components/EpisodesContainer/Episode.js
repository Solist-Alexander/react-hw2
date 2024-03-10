import React from 'react';

import style from './Episode.css'


const Episode = ({episode}) => {
    const {id, name, episode: chapter, characters} = episode
    return (
        <div className={'episodeDiv'}>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>Chapter:  {chapter}</p>
        </div>
    );
};

export default Episode;