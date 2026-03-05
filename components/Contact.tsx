"use client";

import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const links = [
    {
        label: "Email",
        value: "yasheshdasari@gmail.com",
        href: "mailto:yasheshdasari@gmail.com",
        icon: <Mail size={20} />,
        color: "hover:border-red-300 dark:hover:border-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400",
    },
    {
        label: "GitHub",
        value: "YasheshDasari",
        href: "https://github.com/YasheshDasari",
        icon: <Github size={20} />,
        color: "hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white",
    },
    {
        label: "LinkedIn",
        value: "in/yasheshdasari",
        href: "https://www.linkedin.com/in/yasheshdasari/",
        icon: <Linkedin size={20} />,
        color: "hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400",
    },
];

export default function Contact() {
    return (
        <footer id="contact" className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 mt-24">
            <div className="max-w-7xl mx-auto px-4 py-20">

                <div className="text-center mb-14">
                    <h2 className="text-3xl font-bold mb-3">Get In Touch</h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
                        Open to new opportunities, collaborations, and conversations. Feel free to reach out through any of the channels below.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {links.map((link) => (
                        <a key={link.label} href={link.href} target={link.href.startsWith("mailto") ? "_self" : "_blank"} rel="noopener noreferrer" className={`flex items-center gap-3 px-6 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800/50 transition-all duration-200 hover:scale-105 hover:shadow-md ${link.color}`}>
                            {link.icon}
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest opacity-60">{link.label}</p>
                                <p className="text-sm font-medium">{link.value}</p>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
                        <MapPin size={12} />
                        Toronto, Canada
                    </div>

                    <p className="text-xs text-slate-400 dark:text-slate-500">
                        © {new Date().getFullYear()} Yashesh Dasari · Built with Next.js & Tailwind CSS
                    </p>

                    <div className="flex items-center gap-3">
                        {links.map((link) => (
                            <a key={link.label} href={link.href} target={link.href.startsWith("mailto") ? "_self" : "_blank"} rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200" aria-label={link.label}>
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
}