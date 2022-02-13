import {FC, useEffect, useState} from "react";

import {Movie, Pagination, SearchForm, StatusCheck} from "../../components";
import {useCustomDispatch, useCustomSelector, useMyDispatch} from "../../hooks";
import {clearMovies, getMoviesByQuery} from "../../store";
import css from "../Movies/Movies.module.css";

const Search: FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [query, setQuery] = useState<string>('');
    const {movies, status, error} = useCustomSelector(state => state['movieReducer'])
    const dispatch = useCustomDispatch();
    const voidDispatch = useMyDispatch();

    const updateQuery = (query: string): void => {
        setQuery(query);
    }

    useEffect(() => {
        if (query) {
            dispatch(getMoviesByQuery({query, currentPage}));
            window.scrollTo(0, 0);
        }
        return voidDispatch(clearMovies([]));
    }, [currentPage, query])

    const changePage = (value: number): void => {
        if (currentPage !== 1 || value !== -1) {
            setCurrentPage(currentPage + value);
        }
    }

    return (
        <div className={css.movies_page}>
            <SearchForm updateQuery={updateQuery}/>
            <StatusCheck status={status} error={error}/>
            <div className={css.movies_catalogue}>
                {movies && movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            {movies?.length ? <Pagination changePage={changePage} currentPage={currentPage}/>: null}
        </div>
    );
};

export {Search};