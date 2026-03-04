import "./globals.css";
import ThemeProvider from "../components/ThemeProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="bg-slate-200 text-slate-950 dark:bg-slate-950 dark:text-slate-200 transition-colors duration-300">
        <body>
        <ThemeProvider>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}