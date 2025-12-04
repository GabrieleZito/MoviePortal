import "./Card.css";
export function Card({ film }) {
  const fallback = "https://via.placeholder.com/400x600?text=No+Image";

  return (
    <div className="cardContainer">
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
        <h2 className="filmTitle">{film.title}</h2>

        <p className="releaseDate">
          {film.release_date ? film.release_date.slice(0, 4) : "N/A"}
        </p>

        <p className="filmOverview">
          {film.overview || "Nessuna descrizione disponibile."}
        </p>

        <p className="filmVote">
          ⭐ {film.vote_average ? film.vote_average.toFixed(1) : "N/A"}
        </p>
      </div>
    </div>
  );
}
