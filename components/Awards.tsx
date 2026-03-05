"use client";

import { useEffect, useRef, useState } from "react";
import { Trophy, Star, Lightbulb, Megaphone, Users, DollarSign } from "lucide-react";

const awards = [
    {
        icon: "dollar",
        category: "Graduate Funding",
        title: "$62,000+ in Competitive Graduate Funding",
        org: "NSERC & University of Waterloo",
        detail: "Awarded based on academic excellence, prior contributions, and research achievements across the MASc program.",
        highlight: "$62,000+",
        highlightLabel: "Total Funding",
        color: "green",
    },
    {
        icon: "star",
        category: "Academic Merit",
        title: "Multiple-Time Graduate Scholarship Recipient",
        org: "University of Waterloo · Faculty of Engineering",
        detail: "Merit-based University of Waterloo Graduate Scholarship and Faculty of Engineering Graduate Scholarship for pioneering software project and novel research.",
        highlight: "2×+",
        highlightLabel: "Recipient",
        color: "blue",
    },
    {
        icon: "dollar",
        category: "Industry Impact",
        title: "University of Waterloo / Toyota Spotlight",
        org: "University of Waterloo · Toyota",
        detail: "Recognized for realizing a cost benefit of $500,000 per year using SolidWorks and Ansys Fluent simulation tooling.",
        highlight: "$500K/yr",
        highlightLabel: "Cost Benefit",
        color: "emerald",
    },
    {
        icon: "trophy",
        category: "Competition",
        title: "2nd Place: International Design Competition",
        org: "500+ Participants",
        detail: "Designed and developed a COVID vaccination device that improved vaccination rates by 25%, placing 2nd among 500+ participants.",
        highlight: "Top 0.4%",
        highlightLabel: "500+ Participants",
        color: "amber",
    },
    {
        icon: "users",
        category: "Representation",
        title: "Formula SAE International Design Presentations",
        org: "UW Formula Motorsports · Aerodynamics Team",
        detail: "Represented the University of Waterloo Formula Motorsports Aerodynamics Team at the Formula SAE International Design Presentations, 2021.",
        highlight: "2021",
        highlightLabel: "International",
        color: "purple",
    },
    {
        icon: "megaphone",
        category: "Leadership",
        title: "Guest Speaker: CAE Seminar",
        org: "Ansys Mechanical",
        detail: "Led a 1-hour live CAE seminar using Ansys Mechanical to educate high school students on simulation and engineering tools.",
        highlight: "60 min",
        highlightLabel: "Live Seminar",
        color: "slate",
    },
];

const colorMap: Record<string, { card: string; badge: string; icon: string; highlight: string }> = {
    green:   { card: "hover:border-green-300 dark:hover:border-green-700",   badge: "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800",   icon: "bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400",   highlight: "text-green-600 dark:text-green-400" },
    blue:    { card: "hover:border-blue-300 dark:hover:border-blue-700",     badge: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",     icon: "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400",     highlight: "text-blue-600 dark:text-blue-400" },
    emerald: { card: "hover:border-emerald-300 dark:hover:border-emerald-700", badge: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800", icon: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400", highlight: "text-emerald-600 dark:text-emerald-400" },
    amber:   { card: "hover:border-amber-300 dark:hover:border-amber-700",   badge: "bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800",   icon: "bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400",   highlight: "text-amber-600 dark:text-amber-400" },
    purple:  { card: "hover:border-purple-300 dark:hover:border-purple-700", badge: "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800", icon: "bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400", highlight: "text-purple-600 dark:text-purple-400" },
    slate:   { card: "hover:border-slate-400 dark:hover:border-slate-500",   badge: "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600",   icon: "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300",   highlight: "text-slate-700 dark:text-slate-300" },
};

function getIcon(type: string, size = 18) {
    switch (type) {
        case "trophy":   return <Trophy size={size} />;
        case "star":     return <Star size={size} />;
        case "lightbulb": return <Lightbulb size={size} />;
        case "megaphone": return <Megaphone size={size} />;
        case "users":    return <Users size={size} />;
        case "dollar":   return <DollarSign size={size} />;
        default:         return <Star size={size} />;
    }
}

function AwardCard({ award, index }: { award: typeof awards[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const [flipped, setFlipped] = useState(false);
    const colors = colorMap[award.color];

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
            style={{ transitionDelay: `${index * 100}ms`, perspective: "1000px" }}
        >
            {/* Flip container */}
            <div
                className="relative cursor-pointer"
                style={{ height: "200px", transformStyle: "preserve-3d", transition: "transform 0.6s ease", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
                onClick={() => setFlipped(!flipped)}
            >
                {/* Front */}
                <div
                    className={`absolute inset-0 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-6 flex flex-col justify-between ${colors.card} transition-colors duration-300`}
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <div className="flex items-start justify-between gap-3">
                        <div className={`p-2.5 rounded-xl ${colors.icon}`}>
                            {getIcon(award.icon)}
                        </div>
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${colors.badge}`}>
                            {award.category}
                        </span>
                    </div>

                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-sm leading-snug mb-1">
                            {award.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            {award.org}
                        </p>
                    </div>

                    <div className="flex items-end justify-between">
                        <div>
                            <p className={`text-2xl font-bold ${colors.highlight}`}>{award.highlight}</p>
                            <p className="text-xs text-slate-400 dark:text-slate-500">{award.highlightLabel}</p>
                        </div>
                        <span className="text-xs text-slate-400 dark:text-slate-500 italic">
                            Tap to read more →
                        </span>
                    </div>
                </div>

                {/* Back */}
                <div
                    className={`absolute inset-0 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-6 flex flex-col justify-between ${colors.card} transition-colors duration-300`}
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="flex items-center gap-2 mb-3">
                        <div className={`p-2 rounded-lg ${colors.icon}`}>
                            {getIcon(award.icon, 14)}
                        </div>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${colors.badge}`}>
                            {award.category}
                        </span>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1">
                        {award.detail}
                    </p>

                    <span className="text-xs text-slate-400 dark:text-slate-500 italic mt-3">
                        ← Tap to flip back
                    </span>
                </div>
            </div>
        </div>
    );
}

export default function Awards() {
    return (
        <section id="awards" className="py-24 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Awards & Recognition</h2>
            <p className="text-slate-500 dark:text-slate-400 text-center mb-16 max-w-xl mx-auto text-sm">
                Tap any card to read more.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {awards.map((award, i) => (
                    <AwardCard key={award.title} award={award} index={i} />
                ))}
            </div>
        </section>
    );
}