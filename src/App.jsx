import { useEffect, useState } from "react";
import "./App.css";
import tmdbAPI from "./api/movieDB";

function App() {
    useEffect(() => {
        const fetchAPI = async () => {
            const data = await tmdbAPI.getTVSeriesgenres();
            console.log(data);
        };
        fetchAPI();
    }, []);
    return <></>;
}

export default App;
