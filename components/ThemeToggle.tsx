"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="fixed top-6 right-6 px-4 py-2 rounded-lg border
                 bg-gray-200 text-black
                 dark:bg-gray-800 dark:text-white
                 border-gray-400 dark:border-gray-600
                 transition"
        >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
    );
}