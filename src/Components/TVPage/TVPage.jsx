import { useEffect, useState } from "react";
import GenreSelector from "../GenreSelector/GenreSelector";
import Carousel from "../Carousel/Carousel";
import tmdbAPI from "../../api/movieDB";
import "./TVPage.css";

export default function TVPage() {
    const [genres, setGenres] = useState(null);
    const [series, setSeries] = useState([]);
    const [isLoadingGenres, setisLoadingGenres] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("popular");
    const [isLoadingSeries, setIsLoadingSeries] = useState(false);

    useEffect(() => {
        const getGenres = async () => {
            setisLoadingGenres(true);
            try {
                const data = await tmdbAPI.getTVSeriesgenres("it");
                setGenres(data.genres);
                setisLoadingGenres(false);
            } catch (error) {
                console.error("ERRORE durante il caricamento dei generi: ", error);
            }
        };
        getGenres();
    }, []);

    useEffect(() => {
        const getMoviesByCategory = async () => {
            setIsLoadingSeries(true);

            try {
                let data;
                if (selectedCategory === "popular") {
                    data = await tmdbAPI.getPopularTVSeries(1, "it-IT");
                } else if (selectedCategory === "on_the_air") {
                    data = await tmdbAPI.getOnTheAirTVSeries(1, "it-IT");
                } else if (selectedCategory === "top_rated") {
                    data = await tmdbAPI.getTopRatedTVSeries(1, "it-IT");
                }
                console.log("data.results: ");
                console.log(data.results);
                setSeries(data.results);
                setIsLoadingSeries(false);
            } catch (error) {
                console.error("Errore durante il caricamento delle serie tv: ", error);
            }
        };

        getMoviesByCategory();
    }, [selectedCategory]);

    const changeGenre = async (genre) => {
        console.log(genre);
        const data = await tmdbAPI.getTVSeriesByGenre(genre.id);
        setSeries(data.results);
    };

    return (
        <div>
            <div className="nav">
                <div className="nav-item" onClick={() => setSelectedCategory("popular")}>
                    Popolari
                </div>
                <div className="nav-item" onClick={() => setSelectedCategory("on_the_air")}>
                    On The Air
                </div>
                <div className="nav-item" onClick={() => setSelectedCategory("top_rated")}>
                    Top Rated
                </div>
                {isLoadingGenres ? "" : <GenreSelector genres={genres} onSelect={(g) => changeGenre(g)} />}
            </div>
            <div>{isLoadingSeries ? "" : series.length > 0 ? <Carousel movies={series} /> : ""}</div>
        </div>
    );
}
