import {FC, useEffect, useState} from "react";

import {Movie, Pagination, StatusCheck} from "../../components";
import {useCustomSelector, useCustomDispatch, useMyDispatch} from "../../hooks";
import {clearMovies, getAllMovies} from "../../store"
import css from "./Movies.module.css";


const Movies: FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const {movies, status, error} = useCustomSelector(state => state['movieReducer']);
    const dispatch = useCustomDispatch();
    const voidDispatch = useMyDispatch()

    useEffect(() => {
        dispatch(getAllMovies(currentPage));
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
            <StatusCheck status={status} error={error}/>
            <div className={css.movies_catalogue}>
                {movies && movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <Pagination changePage={changePage} currentPage={currentPage}/>
        </div>
    );
};

export {Movies};