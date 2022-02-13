import {combineReducers, configureStore} from "@reduxjs/toolkit";

import movieReducer from "./movie.slice";
import genreReducer from "./genre.slice";
import movieDetailsReducer from "./movieDetails.slice";

const rootReducer = combineReducers({
    movieReducer,
    genreReducer,
    movieDetailsReducer
})

export const setupStore = () => configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];