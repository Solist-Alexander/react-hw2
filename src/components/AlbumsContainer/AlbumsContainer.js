import React, {useEffect, useState} from 'react';
import {albumServices} from "../../services/albumServices";
import Albums from "./Albums";

const AlbumsContainer = () => {
    const [albums, setAlbums] = useState([])

    useEffect(()=>{
        albumServices.getAll().then(({data})=> setAlbums(data))
    },)


    return (
        <div>
            <Albums albums={albums}/>
        </div>
    );
};

export default AlbumsContainer;