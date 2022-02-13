import {FC, useEffect, useState} from "react";

import {Movie, Pagination, StatusCheck} from "../../components";
import {useCustomDispatch, useCustomSelector, useMyDispatch, useCustomLocation} from "../../hooks";
import {clearMovies, getAllMoviesByGenre} from "../../store"
import css from "../Movies/Movies.module.css";

const MoviesByGenre: FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const {movies, status, error} = useCustomSelector(state => state['movieReducer']);
    const dispatch = useCustomDispatch();
    const voidDispatch = useMyDispatch();
    const {state:{id, name}} = useCustomLocation() ;


    useEffect(() => {
        dispatch(getAllMoviesByGenre({id, currentPage}));
        window.scrollTo(0, 0);

        return voidDispatch(clearMovies([]));
    }, [currentPage])

    const changePage = (value: number): void => {
        if (currentPage !== 1 || value !== -1) {
            setCurrentPage(currentPage + value)
        }
    }

    return (
        <div className={css.movies_page}>
            <h1 className={css.page_header}>{name}</h1>
            <StatusCheck status={status} error={error}/>
            <div className={css.movies_catalogue}>
                {movies && movies.map(movie => <Movie key={movie.id} movie={movie}/>)}</div>
            <Pagination changePage={changePage} currentPage={currentPage}/>
        </div>
    );
};

export {MoviesByGenre};