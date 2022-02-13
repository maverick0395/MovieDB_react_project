import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {moviesService} from "../services";
import {IMovieDetailsState} from "../interfaces";


const initialState: IMovieDetailsState = {
    movieDetails: null,
    cast: [],
    status: null,
    error: null
}


export const getMovieDetails = createAsyncThunk(
    'movieDetailsSlice/getMovieDetails',
    async (movieId: string | undefined, {rejectWithValue}) => {
        try {
            const movieDetails = await moviesService.getById(movieId);
            return movieDetails.data
        } catch (e) {
            rejectWithValue(e.message);
        }
    }
)

export const getCast = createAsyncThunk(
    'movieDetailsSlice/getCast',
    async (movieId: string | undefined, {rejectWithValue}) => {
        try {
            const cast = await moviesService.getCast(movieId);
            return cast.data.cast;
        } catch (e) {
            rejectWithValue(e.message);
        }
    }
)

const movieDetailsSlice = createSlice({
    name: "movieDetailsSlice",
    initialState,
    reducers: {
        clearMovieDetails: (state, action: PayloadAction<null>) => {
            state.movieDetails = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getMovieDetails.pending, (state,action) => {
            state.status = 'pending';
            state.error = null;
        });
        builder.addCase(getMovieDetails.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.movieDetails = action.payload;
        });
        builder.addCase(getMovieDetails.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        });
        builder.addCase(getCast.pending, (state,action) => {
            state.status = 'pending';
            state.error = null;
        });
        builder.addCase(getCast.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.cast = action.payload;
        });
        builder.addCase(getCast.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        });

    }
})

const movieDetailsReducer = movieDetailsSlice.reducer;

export const {clearMovieDetails} = movieDetailsSlice.actions;

export default movieDetailsReducer;