import { useState } from "react";
import "./NavBar.css";
import { useTheme } from "@/hooks/useTheme";

export function Navbar({ changePage }) {
    const [search, setSearch] = useState("");
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className={`navbar ${theme}`}>
            {/* LOGO */}
            <div className="navbar-left">
                <div className="logo">ZAP Channel</div>

                {/* SEARCH */}
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="cosa vuoi cercare..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
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
                {/* SWITCH */}
                <label className="switch">
                    <input type="checkbox" onChange={toggleTheme} />
                    <span className="slider"></span>
                </label>
            </div>
        </nav>
    );
}
