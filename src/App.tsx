import {Route, Routes} from "react-router-dom";
import {FC} from "react";

import {Header} from "./components";
import {Movies, Genres, MovieDetailed, MoviesByGenre, MoviesWithActor, Search} from "./pages";
import css from "./App.module.css";



const App: FC = () => {

    return (
        <div className={css.app}>
            <Routes>
                <Route path={'/'} element={<Header/>}>
                    <Route path={'/movies'} element={<Movies/>}/>
                    <Route path={'/movies/:id'} element={<MovieDetailed/>}/>
                    <Route path={'/movies/actor/:actorId'} element={<MoviesWithActor/>}/>
                    <Route path={'/genres'} element={<Genres/>}/>
                    <Route path={'/genres/:genreId'} element={<MoviesByGenre/>}/>
                    <Route path={'/search'} element={<Search/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;