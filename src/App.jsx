import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Navbar } from "./Components/Navbar.jsx";
import FilmPage from "./Components/FilmPage/FilmPage.jsx";
import TVPage from "./Components/TVPage/TVPage.jsx";
import FavoritePage from "./components/FavoritePage/FavoritePage.jsx";
import AccountPage from "./Components/AccountPage/AccountPage.jsx";
import ContactsPage from "./Components/ContactsPage/ContactsPage.jsx";
import Footer from "./components/Footer/Footer";
import { useFavorite } from "./hooks/useFavorite";
import SearchPage from "./components/SearchPage/SearchPage";

function App() {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const { favorites } = useFavorite();
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
            <Navbar changePage={changePage} setSearch={setSearch} />
            {renderPage}
            <Footer />
        </>
    );
}

export default App;
