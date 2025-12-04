import { useState } from "react";
import "./NavBar.css";

export default function NavBar() {
const [showGenres, setShowGenres] = useState(false);
const [darkMode, setDarkMode] = useState(false);

const genres = [
"Crime", "Horror", "Fantascienza", "Comici",
"Animazione", "Drammatici", "Fantasy",
"Azione", "Thriller", "Sport", "Anime"
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
<li>Home</li>
<li>Film</li>
<li>Serie TV</li>
<li>Preferiti</li>
<li>Contatti</li>
<li>Account</li>
<li>Esci</li>
</ul>

{/* GENERI + DARK MODE */}
<div className="navbar-right">

<div
className="genres"
onMouseEnter={() => setShowGenres(true)}
onMouseLeave={() => setShowGenres(false)}
>
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
<input
type="checkbox"
onChange={() => setDarkMode(!darkMode)}
/>
<span className="slider"></span>
</label>

</div>
</nav>
);
}