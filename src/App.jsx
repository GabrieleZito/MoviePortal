import { useState } from "react";
import NavBar from "./Components/NavBar.jsx";
import FilmPage from "./components/FilmPage/FilmPage";
import TVPage from "./components/TVPage/TVPage.jsx";
import FavoritePage from "./components/FavoritePage/FavoritePage.jsx";
import { useLocalStorage } from "./hooks/useLocalStorage";
import AccountPage from "./components/AccountPage/AccountPage.jsx";
import ContactsPage from "./components/ContactsPage/ContactsPage.jsx";
import Footer from "./components/Footer/Footer.jsx";

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
            <NavBar changePage={changePage} />
            {renderPage}
            <Footer />
        </>
    );
}

export default App;
