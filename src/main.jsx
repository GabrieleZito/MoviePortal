import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext";
import { FavoriteProvider } from "./context/FavoriteProvider";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider>
            <FavoriteProvider>
                <App />
            </FavoriteProvider>
        </ThemeProvider>
    </StrictMode>
);
