import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import Character from "./Character";
import {useDispatch, useSelector} from "react-redux";
import {characterActions} from "../../store/slices/charactersSlice";

const Characters = () => {
    const {characters} = useSelector(state => state.characters)
    const dispatch = useDispatch()


    // const [charactersArr, setCharactersArr] = useState([])
    const {state} = useLocation()
    const charactersArr = state.characters

    useEffect(()=>{
        const ids = charactersArr.map(characterUrl => {
            const lastSlashIndex = characterUrl.lastIndexOf('/');
            return characterUrl.substring(lastSlashIndex + 1);
        });

        dispatch(characterActions.getAllById({ids}))
    }, [])
    return (
        <div>
            {characters.map(character => <Character character={character} key={character.id}/>)}
        </div>
    );
};

export default Characters;