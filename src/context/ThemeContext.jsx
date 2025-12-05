import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const isLight = theme === "light";
    const value = {
        theme,
        toggleTheme,
        isLight,
        colors: {
            background: isLight ? "#ffffff" : "#1a1a1a",
            text: isLight ? "#000000" : "#ffffff",
            primary: isLight ? "#007bff" : "#0d6efd",
            secondary: isLight ? "#6c757d" : "#adb5bd",
            card: isLight ? "#f8f9fa" : "#2d2d2d",
        },
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
