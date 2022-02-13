import {axiosService} from "./axios.service";
import baseURL from "../constants/urls";
import {apiKey} from "../constants/urls";
import {AxiosResponse} from "axios";
import {IGenres} from "../interfaces";

export const genreService = {
    getAll: (): Promise<AxiosResponse<IGenres>> => axiosService.get(`${baseURL}/genre/movie/list?api_key=${apiKey}`)
}