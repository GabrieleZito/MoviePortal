import { useContext } from "react";
import { FavoriteContext } from "@/context/FavoriteProvider";

export function useFavorite() {
    const ctx = useContext(FavoriteContext);

    if (!ctx) {
        throw new Error("useFavorite deve essere usato dentro <FavoriteProvider>");
    }
    return ctx;
}
