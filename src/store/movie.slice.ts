import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {moviesService} from "../services";
import {IMovieState} from "../interfaces";

const initialState: IMovieState = {
    movies: [],
    status: null,
    error: null
}

export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (page: number, {rejectWithValue}) => {
        try {
            const movies = await moviesService.getAll(page);
            return movies.data.results;
        } catch (e) {
            rejectWithValue(e.message)
        }
    }
)

export const getAllMoviesByGenre = createAsyncThunk(
    'movieSlice/getAllMoviesByGenre',
    async ({id, currentPage}: {id: number, currentPage: number}, {rejectWithValue}) => {
        try {
            const movies = await moviesService.getByGenre(id, currentPage);
            return movies.data.results;
        } catch (e) {
            rejectWithValue(e.message);
        }
    }
)

export const getMoviesWithActor = createAsyncThunk(
    'movieSlice/getMoviesWithActor',
    async ({actorId, currentPage}: {actorId: number, currentPage: number}, {rejectWithValue}) => {
        try {
            const movies = await moviesService.getByActor(actorId, currentPage);
            return movies.data.results;
        } catch (e) {
            rejectWithValue(e.message);
        }
    }
)

export const getMoviesByQuery = createAsyncThunk(
    'movieSlice/getMoviesByQuery',
    async ({query, currentPage}: {query: string, currentPage: number}, {rejectWithValue}) => {
        try {
            const movies = await moviesService.getByQuery(query, currentPage);
            return movies.data.results;
        } catch (e) {
            rejectWithValue(e.message);
        }
    }
)


const movieSlice = createSlice({
    name: "movieSlice",
    initialState,
    reducers: {
        clearMovies: (state, action: PayloadAction<[]>) => {
            state.movies = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllMovies.pending, (state, action) => {
            state.status = 'pending';
            state.error = null;
        });
        builder.addCase(getAllMovies.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.movies = action.payload;
        });
        builder.addCase(getAllMovies.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        });
        builder.addCase(getAllMoviesByGenre.pending, (state, action) => {
            state.status = 'pending';
            state.error = null;
        });
        builder.addCase(getAllMoviesByGenre.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.movies = action.payload;
        });
        builder.addCase(getAllMoviesByGenre.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        });
        builder.addCase(getMoviesWithActor.pending, (state, action) => {
            state.status = 'pending';
            state.error = null;
        });
        builder.addCase(getMoviesWithActor.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.movies = action.payload;
        });
        builder.addCase(getMoviesWithActor.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        });
        builder.addCase(getMoviesByQuery.pending, (state, action) => {
            state.status = 'pending';
            state.error = null;
        });
        builder.addCase(getMoviesByQuery.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.movies = action.payload;
        });
        builder.addCase(getMoviesByQuery.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        });

    }
})

const movieReducer = movieSlice.reducer;

export const {clearMovies} = movieSlice.actions;

export default movieReducer;