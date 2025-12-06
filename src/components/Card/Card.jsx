import { useState } from "react";
import { MovieModal } from "../MovieModal/MovieModal";
import { useFavorite } from "@/hooks/useFavorite";
import "./Card.css";

export default function Card({ film }) {
  const fallback = "https://via.placeholder.com/400x600?text=No+Image";
  const [showModal, setShowModal] = useState(false);
  const { theme } = useTheme();
  const { addFavorite, removeFavorite, isFavorite } = useFavorite();

    // Hook preferiti
    const { addFavorite, removeFavorite, isFavorite } = useFavorite();

    const favored = isFavorite(film.id);

    const handleFavoriteClick = () => {
        if (favored) {
            removeFavorite(film.id);
        } else {
            addFavorite(film);
        }
        alt={film.title || film.name}
      />

      <div className="filmInfo">
        <div className="titleRow">
          <h2 className="filmTitle">{film.title || film.name}</h2>
          <button
            className="heartButton"
            onClick={handleFavoriteClick}
            aria-label="Aggiungi ai preferiti"
          >
            {favored ? "❤️" : "🤍"}
          </button>
        </div>

        <p className="releaseDate">
          {film.release_date
            ? film.release_date.slice(0, 4)
            : film.first_air_date
            ? film.first_air_date.slice(0, 4)
            : "N/A"}
        </p>

                <p className="filmOverview">{film.overview ? film.overview.slice(0, 100) + "..." : "N/A"}</p>

                {film.overview && film.overview.length > 100 && (
                    <button className="toggleOverviewBtn" onClick={() => setShowModal(true)}>
                        Mostra tutto
                    </button>
                )}

                <p className="filmVote">⭐ {film.vote_average ? film.vote_average.toFixed(1) : "N/A"}</p>
            </div>

            {showModal && <MovieModal film={film} onClose={() => setShowModal(false)} />}
        </div>
    );
}
