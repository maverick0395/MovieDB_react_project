import {IMovie} from "./movie.interface";

export interface IMovieState{
    "movies": IMovie[] | undefined,
    "status": string | null,
    "error": string | null | undefined
}
