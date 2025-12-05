import { useLocalStorage } from "@/hooks/useLocalStorage";
import { createContext, useState } from "react";

export const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
    const [favorites, setStoredValue, addFavorite, removeFavorite] = useLocalStorage("favorites", []);

    const value = {
        favorites,
        setStoredValue,
        addFavorite,
        removeFavorite,
    };

    return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>;
}
