import { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import tmdbAPI from "../../api/movieDB";

function SearchPage({ search }) {
    console.log(search);
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState([]);

    useEffect(() => {
        const getSearch = async () => {
            try {
                setIsLoading(true);
                const movies = await tmdbAPI.searchMovie(search, "it-IT");
                const series = await tmdbAPI.searchTVSeries(search, "it-IT");
                setResult([...movies.results, ...series.results]);
                setIsLoading(false);
            } catch (error) {
                console.error("Errore durante la ricerca: ", error);
            }
        };
        getSearch();
    }, [search]);

    return (
        <div>
            {isLoading ? (
                "Loading"
            ) : result.length > 0 ? (
                <Carousel movies={result} />
            ) : (
                "Nessun risultato corrispndente alla ricerca"
            )}
        </div>
    );
}

export default SearchPage;
