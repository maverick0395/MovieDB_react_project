import {IMovieDetails} from "./movie_details.inrerface";
import {IActor} from "./actors.interface";

export interface IMovieDetailsState {
    "movieDetails": IMovieDetails | null | undefined,
    "cast": IActor[] | undefined,
    "status": string | null,
    "error": string | null | undefined
}