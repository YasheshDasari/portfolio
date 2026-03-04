"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const stats = [
    { label: "Years of Experience", value: 5, suffix: "+" },
    { label: "Technologies in Stack", value: 20, suffix: "+" },
    { label: "Code Coverage", value: 90, suffix: "%+" },
];

function useCountUp(target: number, duration: number, start: boolean) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!start) return;
        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [start, target, duration]);
    return count;
}

function StatCard({ label, value, suffix }: { label: string; value: number; suffix: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const [started, setStarted] = useState(false);
    const count = useCountUp(value, 1500, started);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setStarted(true); },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <span className="text-4xl font-bold text-slate-900 dark:text-white">
                {count}{suffix}
            </span>
            <span className="text-sm text-slate-500 dark:text-slate-400 mt-1 text-center">{label}</span>
        </div>
    );
}

export default function About() {
    return (
        <section id="about" className="py-24 px-8 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">About Me</h2>

            <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
                <div className="shrink-0">
                    <Image
                        src="/yashesh.jpeg"
                        alt="Yashesh Dasari"
                        width={240}
                        height={240}
                        className="rounded-2xl object-cover shadow-lg"
                    />
                </div>

                <div className="text-slate-600 dark:text-slate-400 leading-8 space-y-4">
                    <p>
                        Software Engineer with 5+ years of experience designing, developing, testing, and supporting high-reliability, secure applications and AI-driven pipelines in regulated production environments.
                    </p>
                    <p>
                        I specialize in modular, distributed architectures, secure REST APIs, and Dockerized workflows-
                        implementing Agile, TDD, and Continuous Delivery across the full SDLC to deliver scalable,
                        audit-ready software that meets IEC 62304 and FDA compliance standards.
                    </p>
                    <p>
                        Versatile across full-stack environments and modern AI tooling, applying
                        rigorous engineering discipline and secure, testable code practices to solve
                        complex, multidisciplinary problems across cloud, containerized, and
                        on-premise deployments.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-16">
                {stats.map((stat) => (
                    <StatCard key={stat.label} label={stat.label} value={stat.value} suffix={stat.suffix} />
                ))}
            </div>
        </section>
    );
}