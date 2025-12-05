import { useTheme } from "../../hooks/useTheme";
import "./Navbar.css";

export default function Navbar({ changePage, setSearch }) {
    const { theme, toggleTheme } = useTheme();

    const search = (e) => {
        changePage(0);
        setSearch(e.target.value);
    };

    return (
        <nav className={`navbar ${theme}`}>
            <div className="navbar-left">
                <div className="logo">ZAP Channel</div>

                <div className="search-box">
                    <input type="text" placeholder="cosa vuoi cercare..." onChange={search} />
                    <button>Cerca</button>
                </div>
            </div>

            <ul className="navbar-links">
                <li onClick={() => changePage(1)}>Film</li>
                <li onClick={() => changePage(2)}>Serie TV</li>
                <li onClick={() => changePage(3)}>Preferiti</li>
                <li onClick={() => changePage(5)}>Account</li>
            </ul>

            <div className="navbar-right">
                <label className="switch">
                    <input type="checkbox" onChange={toggleTheme} />
                    <span className="slider"></span>
                </label>
            </div>
        </nav>
    );
}
