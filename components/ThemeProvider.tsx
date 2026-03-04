"use client";

import React, { useEffect, useState } from "react";

type Theme = "light" | "dark";

const getInitialTheme = (): Theme => {
    if (typeof window === "undefined") return "light";

    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) return stored;

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
};

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light");
    const [mounted, setMounted] = useState(false);

    // Only run on client
    useEffect(() => {
        const initial = getInitialTheme();
        setTheme(initial);
        document.documentElement.classList.toggle("dark", initial === "dark");
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        const newTheme: Theme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    if (!mounted) return <>{children}</>;

    return (
        <>
            <button
                onClick={toggleTheme}
                className="fixed top-6 right-6 px-4 py-2 rounded-lg border
                   bg-gray-200 text-black
                   dark:bg-gray-800 dark:text-white
                   border-gray-400 dark:border-gray-600
                   transition"
            >
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
            {children}
        </>
    );
}