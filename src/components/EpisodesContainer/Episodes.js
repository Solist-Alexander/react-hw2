import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {episodeActions} from "../../store/slices/episodesSlice";
import Episode from "./Episode";
import style from './Episode.css'
import EpisodePagination from "../EpisodePagination/EpisodePagination";
import {useSearchParams} from "react-router-dom";

const Episodes = () => {

    const {episodes} = useSelector(state => state.episodes)
    const dispatch = useDispatch()
    const [query, setQuery] = useSearchParams({page: '1'});
    const currentPage = query.get('page')?query.get('page'):'1'

    useEffect(() => {
        dispatch(episodeActions.getAll({page: currentPage}))
    }, [currentPage])
    return (
        <div>
            <div className={'episodesDiv'}>
                {episodes.map(episode => <Episode episode={episode} key={episode.id}/>)}
            </div>
                <EpisodePagination/>
        </div>
    )
        ;
};

export default Episodes;