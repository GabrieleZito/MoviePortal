import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Navbar } from "./Components/Navbar.jsx";
import FilmPage from "./Components/FilmPage/FilmPage.jsx";
import TVPage from "./Components/TVPage/TVPage.jsx";
import FavoritePage from "./Components/FavoritePage/FavoritePage.jsx";
import AccountPage from "./Components/AccountPage/AccountPage.jsx";
import ContactsPage from "./Components/ContactsPage/ContactsPage.jsx";
import Footer from "./Components/Footer/Footer";

function App() {
    const [page, setPage] = useState(1);
    const [favorites, , ,] = useLocalStorage("favorites", []);
    let renderPage = <div> BOH </div>;

    if (page == 1) {
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
            <Navbar changePage={changePage} />
            {renderPage}
            <Footer />
        </>
    );
}

export default App;
