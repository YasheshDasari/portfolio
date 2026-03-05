"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Award, Users } from "lucide-react";

const education = [
    {
        degree: "Master of Applied Science",
        field: "Mechanical and Mechatronics Engineering",
        school: "University of Waterloo",
        location: "Waterloo, ON",
        dates: "Sep 2019 – Dec 2022",
        gpa: "82%",
        logo: "/UW.png",
        url: "https://uwaterloo.ca",
        thesis: {
            label: "Graduate Thesis",
            title: "Deep Learning-Enabled Cerebrovascular Reactivity Processing Software",
            url: "https://uwspace.uwaterloo.ca/items/b4583970-e918-4c1e-9d1e-54cd05d8669d",
        },
        highlights: [
            {
                icon: "award",
                text: "GPA: 82 · Published in MDPI Healthcare",
            },
            {
                icon: "users",
                text: "Deputy Board Chair, Graduate Student Association",
            },
            {
                icon: "users",
                text: "Sponsorship Representative, UNICEF at University of Waterloo",
            },
            {
                icon: "users",
                text: "Aerodynamics Team Member, UW Formula Motorsports",
            },
        ],
    },
    {
        degree: "Bachelor of Technology",
        field: "Mechanical Engineering",
        school: "Vellore Institute of Technology (VIT)",
        location: "Vellore, India",
        dates: "2015 – 2019",
        gpa: "90.3%",
        logo: "/VIT.jpg",
        url: "https://vit.ac.in",
        thesis: null,
        highlights: [
            {
                icon: "award",
                text: "GPA: 90.3",
            },
            {
                icon: "award",
                text: "Capstone (IIT Bombay CFD Lab): Engineered a C/C++ computational solver for Fluid-Solid Interaction models, focusing on algorithm efficiency, memory management, and numerical stability.",
            },
        ],
    },
];

function EducationCard({ edu, index }: { edu: typeof education[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: `${index * 200}ms` }}
        >
            <div className="h-full flex flex-col rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                {/* Header: logo + school info */}
                <div className="flex gap-5 items-start mb-6">
                    <a href={edu.url} target="_blank" rel="noopener noreferrer"
                       className="hover:scale-110 transition-transform duration-200 shrink-0">
                        <div className="w-14 h-14 rounded-full border border-slate-200 dark:border-slate-700 bg-white flex items-center justify-center overflow-hidden p-1">
                            <img src={edu.logo} alt={edu.school} className="w-10 h-10 object-contain" />
                        </div>
                    </a>

                    <div className="flex-1">
                        <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug">
                            {edu.degree}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                            {edu.field}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                            {edu.school} · {edu.location}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                                {edu.dates}
                            </span>
                            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800">
                                GPA {edu.gpa}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Thesis */}
                {edu.thesis && (
                    <a href={edu.thesis.url} target="_blank" rel="noopener noreferrer"
                       className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-400 transition-colors mb-5 group">
                        <GraduationCap size={16} className="shrink-0 mt-0.5 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-0.5">
                                {edu.thesis.label}
                            </p>
                            <p className="text-sm text-slate-700 dark:text-slate-300 leading-snug group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                {edu.thesis.title}
                            </p>
                        </div>
                    </a>
                )}

                {/* Highlights */}
                <ul className="space-y-3 mt-auto">
                    {edu.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <div className="shrink-0 mt-0.5">
                                {h.icon === "award"
                                    ? <Award size={14} className="text-slate-400" />
                                    : <Users size={14} className="text-slate-400" />
                                }
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                {h.text}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default function Education() {
    return (
        <section id="education" className="py-24 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Education</h2>
            <p className="text-slate-500 dark:text-slate-400 text-center mb-16 max-w-xl mx-auto text-sm">
                Academic foundation spanning mechanical engineering, deep learning, and software systems.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
                {education.map((edu, i) => (
                    <EducationCard key={edu.school} edu={edu} index={i} />
                ))}
            </div>
        </section>
    );
}