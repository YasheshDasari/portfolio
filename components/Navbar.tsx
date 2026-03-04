"use client";

import { useEffect, useState } from "react";

const navLinks: string[] = ["About", "Experience & Skills", "Research", "Projects", "Contact"];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
                <div>
                    <span className="text-lg font-bold tracking-tight">
                        Yashesh Dasari
                    </span>
                    <span className="hidden sm:inline text-sm text-slate-500 dark:text-slate-400 ml-3">
                        Software Engineer · AI · Full-stack
                    </span>
                </div>

                <nav className="flex gap-6">
                    {navLinks.map((link) => {
                        return (
                            <a key={link} href={"#" + link.toLowerCase()} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-slate-100 transition-colors">
                                {link}
                            </a>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}