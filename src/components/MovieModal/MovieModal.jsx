import { useEffect, useState } from "react";
import "./MovieModal.css";

export function MovieModal({ film, onClose }) {
    const [isVisible, setIsVisible] = useState(false);
    const fallback = "https://via.placeholder.com/400x600?text=No+Image";

    // Trigger animazione fade-in al mount
    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300); // chiudi dopo animazione
    };

    return (
        <div className={`modalOverlay ${isVisible ? "visible" : ""}`} onClick={handleClose}>
            <div className={`modalContent ${isVisible ? "visible" : ""}`} onClick={(e) => e.stopPropagation()}>
                <button className="closeBtn" onClick={handleClose}>
                    ✖
                </button>

                <img
                    className="modalPoster"
                    src={film.poster_path ? `https://image.tmdb.org/t/p/w500${film.poster_path}` : fallback}
                    alt={film.title}
                />

                <div className="modalInfo">
                    <h2>{film.title}</h2>
                    <p>{film.release_date}</p>
                    <p>{film.overview || "Nessuna descrizione disponibile."}</p>
                    <p>⭐ {film.vote_average.toFixed(1)}</p>
                </div>
            </div>
        </div>
    );
}
