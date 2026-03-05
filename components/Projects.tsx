"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Construction } from "lucide-react";

const projects = [
    {
        title: "Clinical Treatment Planning API",
        status: "wip",
        description: "Secure, Dockerized backend REST API for managing clinical treatment plans with JWT authentication, Role-Based Access Control (RBAC), and a full Test-Driven Development workflow. Follows a structured Requirements → Architecture → Implementation → Verification development model with full traceability documentation.",
        stack: ["NestJS", "TypeScript", "PostgreSQL", "Docker", "JWT", "Jest"],
        github: "https://github.com/YasheshDasari/clinical-treatment-planning-api",
        live: null,
        highlights: ["JWT + RBAC security", "TDD workflow", "Dockerized", "Requirement traceability"],
    },
    {
        title: "Image-to-Image Translation: SSIM Quality Map",
        status: "completed",
        description: "Empirical evaluation of deep learning models for image-to-image translation, mapping distorted images to their SSIM quality maps. Evaluated DenseNet, U-Net, FCN, and GAN architectures on the Waterloo Exploration I dataset (10,000 training pairs across 4 distortion types). U-Net and DenseNet-UNet achieved the best performance, outperforming FCN across distortion categories.",
        stack: ["Python", "PyTorch", "TensorFlow", "NumPy", "Matplotlib", "Scikit-learn", "SSIM", "U-Net", "DenseNet"],
        github: null,
        live: null,
        highlights: ["10,000 training pairs", "4 model architectures compared", "U-Net best performer", "Waterloo Exploration I dataset"],
    },
    {
        title: "Personal Portfolio Website",
        status: "wip",
        description: "This portfolio — built from scratch with Next.js 15, Tailwind CSS v4, and next-themes. Features dark/light mode, scroll-triggered animations, sticky navigation, interactive skills section with Devicon SVG icons, scrollable PDF publications viewer, and full responsive design. Deployed on Vercel with CI/CD on every push.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "next-themes", "Lucide Icons", "Vercel"],
        github: "https://github.com/YasheshDasari",
        live: null,
        highlights: ["Dark/light mode", "Scroll animations", "PDF viewer", "Vercel CI/CD"],
    },
];

const stackColors: Record<string, string> = {
    "NestJS": "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800",
    "TypeScript": "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
    "PostgreSQL": "bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-800",
    "Docker": "bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800",
    "Python": "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800",
    "PyTorch": "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800",
    "Next.js": "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600",
    "default": "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700",
};

function getStackColor(tech: string) {
    return stackColors[tech] || stackColors["default"];
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
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
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <div className="h-full flex flex-col rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                {/* Header */}
                <div className="p-6 pb-4 border-b border-slate-100 dark:border-slate-700">
                    <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                            {project.title}
                        </h3>
                        {project.status === "wip" && (
                            <span className="shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                                <Construction size={10} />
                                WIP
                            </span>
                        )}
                        {project.status === "completed" && (
                            <span className="shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800">
                                Completed
                            </span>
                        )}
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-1.5">
                        {project.highlights.map((h) => (
                            <span key={h} className="text-xs text-slate-500 dark:text-slate-400">
                                · {h}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col gap-4 flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {project.description}
                    </p>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.stack.map((tech) => (
                            <span key={tech} className={`px-2.5 py-1 text-xs font-medium rounded-full border ${getStackColor(tech)}`}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Footer links */}
                <div className="px-6 pb-6 flex gap-3">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                           className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-black hover:scale-105 transition">
                            <Github size={13} />
                            GitHub
                        </a>
                    )}
                    {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                           className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition">
                            <ExternalLink size={13} />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
            <p className="text-slate-500 dark:text-slate-400 text-center mb-16 max-w-xl mx-auto text-sm">
                A selection of engineering and research projects spanning backend systems, AI, and full-stack development.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
                {projects.map((project, i) => (
                    <ProjectCard key={project.title} project={project} index={i} />
                ))}
            </div>
        </section>
    );
}