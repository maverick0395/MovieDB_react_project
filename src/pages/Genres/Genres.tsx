import {FC, useEffect} from "react";

import {getAllGenres} from "../../store";
import {Genre} from "../../components";
import {useCustomDispatch, useCustomSelector} from "../../hooks";
import css from "./Genres.module.css";
import {StatusCheck} from "../../components";

const Genres:FC = () => {
    const {genres, status, error} = useCustomSelector(state => state['genreReducer']);
    const dispatch = useCustomDispatch();

    useEffect(()=> {
        dispatch(getAllGenres());
    }, [])

    return (
        <div>
            <StatusCheck status={status} error={error}/>
            <div className={css.genre_catalogue}>
                {genres && genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
            </div>
        </div>
    );
};

export {Genres};