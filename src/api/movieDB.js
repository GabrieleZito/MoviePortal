import axios from "axios";
const axiosConf = axios.create({
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_MOVIEDB_KEY}`,
    },
    baseURL: "https://api.themoviedb.org/3",
});

const getPopularMovies = async (page = 1, language = "en-US") => {
    console.log("Getting popular movies");
    const res = await axiosConf.get(`/movie/popular?language=${language}&page=${page}`);
    return res.data;
};

const getTopRatedMovies = async (page = 1, language = "en-US") => {
    console.log("Getting top rated movies");
    const res = await axiosConf.get(`/movie/top_rated?language=${language}&page=${page}`);
    return res.data;
};

const getUpcomingMovies = async (page = 1, language = "en-US") => {
    console.log("Getting upcoming movies");
    const res = await axiosConf.get(`/movie/upcoming?language=${language}&page=${page}`);
    return res.data;
};

const getMovieDetails = async (movieId = 640146, language = "en-US") => {
    console.log("getting movie details for id: ", movieId);
    const res = await axiosConf.get(`/movie/${movieId}?language=${language}`);
    return res.data;
};

const getMovieCast = async (movieId = 640146, language = "en-US") => {
    console.log("getting movie cast for id: ", movieId);
    const res = await axiosConf.get(`/movie/${movieId}/credits?language=${language}`);
    return res.data;
};

const getMovieRelatedVideos = async (movieId = 640146, language = "en-US") => {
    console.log("getting movie related videos for id: ", movieId);
    const res = await axiosConf.get(`/movie/${movieId}/videos?language=${language}`);
    return res.data;
};

const getOnTheAirTVSeries = async (language = "en-US") => {
    console.log("getting on the air tv series");
    const res = await axiosConf.get(`/tv/on_the_air?language=${language}`);
    return res.data;
};

const getPopularTVSeries = async (page = 1, language = "en-US") => {
    console.log("Getting popular tv series");
    const res = await axiosConf.get(`/tv/popular?language=${language}&page=${page}`);
    return res.data;
};

const getTopRatedTVSeries = async (page = 1, language = "en-US") => {
    console.log("Getting top rated tv series");
    const res = await axiosConf.get(`/tv/top_rated?language=${language}&page=${page}`);
    return res.data;
};

const getTVSeriesDetails = async (seriesId = 1396, language = "en-US") => {
    console.log("getting tv series details for id: ", seriesId);
    const res = await axiosConf.get(`/tv/${seriesId}?language=${language}`);
    return res.data;
};

const getTVSeriesCast = async (seriesId = 1396, language = "en-US") => {
    console.log("getting tv series cast for id: ", seriesId);
    const res = await axiosConf.get(`/tv/${seriesId}/credits?language=${language}`);
    return res.data;
};

const getTVSeriesRelatedVideos = async (seriesId = 1396, language = "en-US") => {
    console.log("getting tv series related videos for id: ", seriesId);
    const res = await axiosConf.get(`/tv/${seriesId}/videos?language=${language}`);
    return res.data;
};

const tmdbAPI = {
    getPopularMovies,
    getTopRatedMovies,
    getUpcomingMovies,
    getMovieDetails,
    getMovieCast,
    getMovieRelatedVideos,
    getOnTheAirTVSeries,
    getPopularTVSeries,
    getTopRatedTVSeries,
    getTVSeriesDetails,
    getTVSeriesCast,
    getTVSeriesRelatedVideos,
};

export default tmdbAPI;
