import { useState } from "react";

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch {
            return initialValue;
        }
    });

    const isFavorite = (id) => {
        return value.find((v) => v.id == id);
    };

    const addFavorite = (newItem) => {
        setStoredValue([...value, newItem]);
    };

    const removeFavorite = (id) => {
        setStoredValue(value.filter((v) => v.id != id));
    };

    const setStoredValue = (value) => {
        setValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    };

    return [value, setStoredValue, addFavorite, removeFavorite, isFavorite];
}
