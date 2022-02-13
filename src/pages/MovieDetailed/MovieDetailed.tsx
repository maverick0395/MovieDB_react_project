import {FC, useEffect} from "react";
import {NavLink, useParams} from "react-router-dom";
import StarRatings from "react-star-ratings";

import {Actor, StatusCheck} from "../../components";
import {useCustomDispatch, useCustomSelector, useMyDispatch} from "../../hooks";
import {clearMovieDetails, getCast, getMovieDetails} from "../../store";
import {bigImageBaseURL} from "../../constants/image.base.url";
import css from "./MovieDetailed.module.css";


const MovieDetailed: FC = () => {
    const {movieDetails, cast, status, error} = useCustomSelector(state => state['movieDetailsReducer']);
    const dispatch = useCustomDispatch();
    const voidDispatch = useMyDispatch();
    const {id: movieId} = useParams<{id: string}>();

    useEffect(() => {
        dispatch(getMovieDetails(movieId));
        dispatch(getCast(movieId));
        window.scrollTo(0, 0);

        return voidDispatch(clearMovieDetails(null));
    }, [])

    return (
        <div>
            <StatusCheck status={status} error={error}/>
            {movieDetails &&
            <div className={css.details_wrapper}>
                {movieDetails.poster_path && <img src={`${bigImageBaseURL}${movieDetails.poster_path}`} alt="Movie poster"/>}
                <h1>{movieDetails.original_title}</h1>
                <p>{movieDetails.overview}</p>
                <h3>Rating:</h3>
                <StarRatings
                    rating={movieDetails.vote_average}
                    numberOfStars={10}
                    starRatedColor="blue"
                    name="rating"
                />
                <h4>Genres:</h4>
                <div className={css.genres}>
                    {movieDetails.genres.map(genre => <NavLink to={`/genres/${genre.id}`} key={genre.id} state={genre}>
                    <p className={css.genre_badge}>{genre.name}</p></NavLink>)}
                </div>
                <p>Release date: {movieDetails.release_date}</p>
                <p>Duration: {movieDetails.runtime} min</p>
                <h4>Main cast:</h4>
                <div className={css.actor_catalogue}>
                    {cast && cast.slice(0, 15).map(actor => <Actor key={actor.id} actor={actor}/>)}
                </div>
            </div>}
        </div>
    );
};

export {MovieDetailed};