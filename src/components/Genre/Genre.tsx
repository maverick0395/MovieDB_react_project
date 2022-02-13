import {FC} from "react";
import {NavLink} from "react-router-dom";

import {IGenre} from "../../interfaces";
import css from "./Genre.module.css";

interface IProps{
    genre: IGenre
}

const Genre:FC<IProps> = ({genre}) => {
    return (
        <div className={css.genre_link}>
            <NavLink to={`/genres/${genre.id}`} state={genre}><h1>{genre.name}</h1></NavLink>
        </div>
    );
};

export {Genre};