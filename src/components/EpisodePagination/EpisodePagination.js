import React from 'react';

import style from './EpisodePagination.css'
import {useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";

const EpisodePagination = () => {
    const {prevPage, nextPage} = useSelector(state => state.episodes)

    const [query, setQuery] = useSearchParams({page: '1'});
    const currentPage = query.get('page')?query.get('page'):'1'
    const prev = () => {
        const prevPage = +currentPage - 1;
        setQuery({ page: prevPage.toString() });
    }
    const next = () => {
        const nextPage = +currentPage + 1;
        setQuery({ page: nextPage.toString() });
    }

    return (
        <div className={'episodePagination'}>
            <button disabled={!prevPage} onClick={prev}>prev</button>
            <button disabled={!nextPage} onClick={next}>next</button>
        </div>
    );
};

export default EpisodePagination;