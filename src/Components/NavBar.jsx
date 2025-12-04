import { useState } from "react";
import "./NavBar.css";

export default function NavBar({ changePage }) {
    const [showGenres, setShowGenres] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const genres = [
        "Crime",
        "Horror",
        "Fantascienza",
        "Comici",
        "Animazione",
        "Drammatici",
        "Fantasy",
        "Azione",
        "Thriller",
        "Sport",
        "Anime",
    ];

    return (
        <nav className={`navbar ${darkMode ? "dark" : ""}`}>
            {/* LOGO */}
            <div className="navbar-left">
                <div className="logo">ZAP Channel</div>

                {/* SEARCH */}
                <div className="search-box">
                    <input type="text" placeholder="cosa vuoi cercare..." />
                    <button>Cerca</button>
                </div>
            </div>

            {/* LINKS */}
            <ul className="navbar-links">
                <li onClick={() => changePage(1)}>Film</li>
                <li onClick={() => changePage(2)}>Serie TV</li>
                <li onClick={() => changePage(3)}>Preferiti</li>
                <li onClick={() => changePage(4)}>Contatti</li>
                <li onClick={() => changePage(5)}>Account</li>
                <li>Esci</li>
            </ul>

            {/* GENERI + DARK MODE */}
            <div className="navbar-right">
                <div className="genres" onMouseEnter={() => setShowGenres(true)} onMouseLeave={() => setShowGenres(false)}>
                    Generi ▾
                    {showGenres && (
                        <div className="genres-menu">
                            {genres.map((g) => (
                                <div key={g}>{g}</div>
                            ))}
                        </div>
                    )}
                </div>

                {/* SWITCH */}
                <label className="switch">
                    <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                    <span className="slider"></span>
                </label>
            </div>
        </nav>
    );
}
