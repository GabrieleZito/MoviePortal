import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
    const [favorites, setStoredValue, addFavorite, removeFavorite, isFavorite] = useLocalStorage("favorites", []);

    const value = {
        favorites,
        setStoredValue,
        addFavorite,
        removeFavorite,
        isFavorite,
    };

    return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>;
}
