import { useState } from "react";
import { MovieModal } from "../MovieModal/MovieModal";
import { useFavorite } from "../../hooks/useFavorite";
import "./Card.css";
import { useTheme } from "../../hooks/useTheme";

export default function Card({ film }) {
  const fallback = "https://via.placeholder.com/400x600?text=No+Image";
  const [showModal, setShowModal] = useState(false);
  const { theme } = useTheme();
  // Hook preferiti
  const { addFavorite, removeFavorite, isFavorite } = useFavorite();

  const favored = isFavorite(film.id);

  const handleFavoriteClick = () => {
    if (favored) {
      removeFavorite(film.id);
    } else {
      addFavorite(film);
    }
  };

  return (
    <div className={`cardContainer ${theme}`}>
      <img
        className="poster"
        src={
          film.poster_path
            ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
            : fallback
        }
        alt={film.title}
      />

      <div className="filmInfo">
        <div className="titleRow">
          <h2 className="filmTitle">{film.title}</h2>

          <button
            className="heartButton"
            onClick={handleFavoriteClick}
            aria-label="Aggiungi ai preferiti"
          >
            {favored ? "❤️" : "🤍"}
          </button>
        </div>

        <p className="releaseDate">
          {film.release_date ? film.release_date.slice(0, 4) : "N/A"}
        </p>

        <p className="filmOverview">
          {film.overview ? film.overview.slice(0, 100) + "..." : "N/A"}
        </p>

        {film.overview && film.overview.length > 100 && (
          <button
            className="toggleOverviewBtn"
            onClick={() => setShowModal(true)}
          >
            Mostra tutto
          </button>
        )}

        <p className="filmVote">
          ⭐ {film.vote_average ? film.vote_average.toFixed(1) : "N/A"}
        </p>
      </div>

      {showModal && (
        <MovieModal film={film} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}
