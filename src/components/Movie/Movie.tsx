import {FC} from "react";
import {NavLink} from "react-router-dom";
import StarRatings from "react-star-ratings";

import {smallImageBaseURL} from "../../constants/image.base.url";
import {IMovie} from "../../interfaces";
import css from "./Movie.module.css";

interface IProps {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    return (
        <NavLink to={`/movies/${movie.id}`}>
        <div className={css.movie_card}>
            {movie.poster_path && <img src={`${smallImageBaseURL}${movie.poster_path}`} alt='Movie poster'/>}
            <h1>{movie.original_title}</h1>
            <StarRatings
                rating={movie.vote_average}
                numberOfStars={10}
                starRatedColor="yellow"
                name="rating"
                starDimension={"30px"}
                starSpacing={"1px"}
            />
        </div>
        </NavLink>
    );
};

export {Movie};