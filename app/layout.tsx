import "./globals.css";
import ThemeProvider from "../components/ThemeProvider";
import ThemeToggle from "../components/ThemeToggle";
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
        >
        <body className="bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100
        min-h-screen transition-colors duration-300">
        <ThemeProvider>
            <ThemeToggle />
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}