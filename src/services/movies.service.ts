import {axiosService} from "./axios.service";
import {AxiosResponse} from "axios";

import baseURL from "../constants/urls";
import {apiKey} from "../constants/urls";
import {IMovieDetails, IMovieResponse, IActors} from "../interfaces";


export const moviesService = {
    getAll: (page:number): Promise<AxiosResponse<IMovieResponse>> =>
        axiosService.get(`${baseURL}/discover/movie?api_key=${apiKey}&page=${page}`),
    getByActor: (actorId: number, page: number): Promise<AxiosResponse<IMovieResponse>> =>
        axiosService.get(`${baseURL}/discover/movie?api_key=${apiKey}&with_people=${actorId}&page=${page}`),
    getByGenre: (genreId: number, page: number): Promise<AxiosResponse<IMovieResponse>> =>
        axiosService.get(`${baseURL}/discover/movie?api_key=${apiKey}&with_genres=${genreId}&page=${page}`),
    getById: (id: string | undefined): Promise<AxiosResponse<IMovieDetails>> =>
        axiosService.get(`${baseURL}/movie/${id}?api_key=${apiKey}`),
    getCast: (id: string | undefined): Promise<AxiosResponse<IActors>> =>
        axiosService.get(`${baseURL}/movie/${id}/credits?api_key=${apiKey}`),
    getByQuery:(query: string, page:number): Promise<AxiosResponse<IMovieResponse>> =>
        axiosService.get(`${baseURL}/search/movie?api_key=${apiKey}&query=${query}&page=${page}`)
}
