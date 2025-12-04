import { useState } from "react";
import "./GenreSelector.css";

export default function GenreSelector({ genres, onSelect }) {
    const [showGenres, setShowGenres] = useState(false);
    const [selectedGenre, setSelectedGenre] = useState(null);

    const handleSelect = (genre) => {
        setSelectedGenre(genre);
        setShowGenres(false);
        if (onSelect) onSelect(genre);
    };

    return (
        <div className="genres" onMouseEnter={() => setShowGenres(true)} onMouseLeave={() => setShowGenres(false)}>
            {selectedGenre ? selectedGenre.name : "Generi"} ▾
            {showGenres && (
                <div className="genres-menu two-columns">
                    {genres.map((g) => (
                        <div
                            key={g.id}
                            className={`genre-item ${selectedGenre?.id === g.id ? "selected" : ""}`}
                            onClick={() => handleSelect(g)}
                        >
                            {g.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
