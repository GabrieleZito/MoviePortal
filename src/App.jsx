import { useState } from "react";
import SearchPage from "./Components/SearchPage/SearchPage";
import FilmPage from "./Components/FilmPage/FilmPage";
import TVPage from "./Components/TVPage/TVPage";
import FavoritePage from "./components/FavoritePage/FavoritePage";
import ContactsPage from "./components/ContactsPage/ContactsPage";
import AccountPage from "./components/AccountPage/AccountPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useFavorite } from "./hooks/useFavorite";
import "./App.css";
import { useTheme } from "./hooks/useTheme";

function App() {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const { favorites } = useFavorite();
    const { theme } = useTheme();

    let renderPage = <div> BOH </div>;
    if (page == 0) {
        renderPage = <SearchPage search={search} />;
    } else if (page == 1) {
        renderPage = <FilmPage />;
    } else if (page == 2) {
        renderPage = <TVPage />;
    } else if (page == 3) {
        renderPage = <FavoritePage favorites={favorites} />;
    } else if (page == 4) {
        renderPage = <ContactsPage />;
    } else if (page == 5) {
        renderPage = <AccountPage />;
    }

    const changePage = (page) => {
        setPage(page);
    };

    return (
        <>
            <div className={`pagina ${theme}`}>
                <Navbar changePage={changePage} setSearch={setSearch} />
                {renderPage}
                <Footer />
            </div>
        </>
    );
}

export default App;
