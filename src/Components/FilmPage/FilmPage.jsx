import { useEffect, useState } from "react";
import GenreSelector from "../GenreSelector/GenreSelector";
import tmdbAPI from "../../api/movieDB";
import "./FilmPage.css";
import Carousel from "../Carousel/Carousel";

export default function FilmPage() {
    const [genres, setGenres] = useState(null);
    const [movies, setMovies] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("popular");
    const [isLoadingGenres, setisLoadingGenres] = useState(false);
    const [isLoadingMovies, setIsLoadingMovies] = useState(false);
    //console.log(selectedCategory);
    useEffect(() => {
        const getGenres = async () => {
            setisLoadingGenres(true);
            try {
                const data = await tmdbAPI.getMoviegenres("it");
                //console.log(data.genres);
                setGenres(data.genres);
                setisLoadingGenres(false);
            } catch (error) {
                console.error("ERRORE durante il caricamento dei generi");
            }
        };
        getGenres();
    }, []);

    useEffect(() => {
        const getMoviesByCategory = async () => {
            setIsLoadingMovies(true);

            try {
                let data;
                if (selectedCategory === "popular") {
                    data = await tmdbAPI.getPopularMovies(1, "it-IT");
                } else if (selectedCategory === "upcoming") {
                    data = await tmdbAPI.getUpcomingMovies(1, "it-IT");
                } else if (selectedCategory === "top_rated") {
                    data = await tmdbAPI.getTopRatedMovies(1, "it-IT");
                }
                console.log("data.results: ");
                console.log(data.results);
                setMovies(data.results);
                setIsLoadingMovies(false);
            } catch (error) {
                console.error("Errore durante il caricamento dei film: ", error);
            }
        };

        getMoviesByCategory();
    }, [selectedCategory]);

    const changeGenre = async (genre) => {
        console.log(genre);
        const data = await tmdbAPI.getMovieByGenre(genre.id);
        setMovies(data.results);
    };

    return (
        <div>
            <div className="nav">
                <div className="nav-item" onClick={() => setSelectedCategory("popular")}>
                    Popolari
                </div>
                <div className="nav-item" onClick={() => setSelectedCategory("upcoming")}>
                    Upcoming
                </div>
                <div className="nav-item" onClick={() => setSelectedCategory("top_rated")}>
                    Top Rated
                </div>
                {isLoadingGenres ? "" : <GenreSelector genres={genres} onSelect={(g) => changeGenre(g)} />}
            </div>
            <div>{isLoadingMovies ? "" : movies.length > 0 ? <Carousel movies={movies} /> : ""}</div>
        </div>
    );
}
