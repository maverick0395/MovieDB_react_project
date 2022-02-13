import {IGenre} from "./genre.interface";

export interface IGenreState{
    "genres": IGenre[] | undefined,
    "status": string | null,
    "error": string | null | undefined
}