import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Navbar } from "./components/Navbar.jsx";
import FilmPage from "./components/FilmPage/FilmPage.jsx";
import TVPage from "./components/TVPage/TVPage.jsx";
import FavoritePage from "./components/FavoritePage/FavoritePage.jsx";
import AccountPage from "./components/AccountPage/AccountPage.jsx";
import ContactsPage from "./components/ContactsPage/ContactsPage.jsx";
import Footer from "./components/Footer/Footer";
import { useFavorite } from "./hooks/useFavorite";

function App() {
  const [page, setPage] = useState(1);
  const { favorites } = useFavorite();
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
