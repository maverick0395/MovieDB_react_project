import {FC, useEffect, useState} from "react";

import {Movie, Pagination} from "../../components";
import {useCustomDispatch, useCustomSelector, useMyDispatch, useCustomLocation} from "../../hooks";
import {clearMovies, getMoviesWithActor} from "../../store"
import css from "../Movies/Movies.module.css";


const MoviesWithActor:FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const {movies, status, error} = useCustomSelector(state => state['movieReducer']);
    const dispatch = useCustomDispatch();
    const voidDispatch = useMyDispatch();
    const {state: {id: actorId, name}} = useCustomLocation();

    useEffect(() => {
        dispatch(getMoviesWithActor({actorId, currentPage}));
        window.scrollTo(0, 0);

        return voidDispatch(clearMovies([]));
    }, [currentPage])

    const changePage = (value: number): void => {
        if (currentPage !== 1 || value !== -1) {
            setCurrentPage(currentPage + value);
        }
    }

    return (
        <div className={css.movies_page}>
            <h1 className={css.page_header}>{name}'s movies</h1>
            {status === 'pending' && <h1>Loading</h1>}
            {status === 'rejected' && <h1>{error}</h1>}
            <div className={css.movies_catalogue}>
                {movies && movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <Pagination changePage={changePage} currentPage={currentPage}/>
        </div>
    );
};

export {MoviesWithActor};