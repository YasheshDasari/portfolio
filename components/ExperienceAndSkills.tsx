"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const experiences = [
    {
        company: "Thornhill Medical",
        role: "Software Developer",
        dates: "Jan 2023 – Mar 2026",
        logo: "/TM.png",
        url: "https://www.thornhillmedical.com",
        bullets: [
            "Built and maintained regulated backend libraries, APIs, and data processing pipelines for a biomedical imaging platform; achieving 90%+ automated test coverage under TDD and Continuous Delivery practices.",
            "Executed full SDLC activities aligned to IEC 62304, ISO 14971, and ISO 13485, enabling traceable, audit-ready delivery and controlled change management.",
            "Developed core algorithms and cross-platform UIs to visualize complex 2D/3D imaging pipelines in production environments.",
        ],
    },
    {
        company: "Thornhill Medical & University of Waterloo",
        role: "Graduate Research Assistant (Software Development & AI)",
        dates: "Jan 2021 – Dec 2022",
        logos: ["/TM.png", "/UW.png"],
        urls: ["https://www.thornhillmedical.com", "https://uwaterloo.ca"],
        bullets: [
            "Led design and development of a modular Python-based medical imaging platform combining deep learning and classical algorithms to analyze large-scale BOLD-MRI datasets; published in MDPI Healthcare.",
            "Architected a CNN-based classification system achieving 95% validation accuracy; containerized and deployed at Mayo Clinic, automating data pipelines by 75% and replacing legacy workflows.",
            "Built RESTful backend services (Node.js/Express) with asynchronous processing, automated unit test suites, and interactive UIs for data visualization and validation of time-series imaging data.",
        ],
    },
    {
        company: "Synopsys (previously Ansys)",
        role: "Software Development Support Co-op",
        dates: "May 2020 – Aug 2020",
        logo: "/Ansys.jpg",
        url: "https://www.ansys.com",
        bullets: [
            "Supported development and validation of large-scale engineering simulation software (FSI), building Python data processing and visualization modules to analyze high-volume computational outputs.",
            "Improved computational accuracy and system stability by 20% through structured validation, sensitivity analysis, and defect investigation.",
            "Designed automated C# regression test suites (integration, backward compatibility, functional) and collaborated with international teams to troubleshoot complex computational workflows.",
        ],
    },
    {
        company: "Indian Institute of Technology, Bombay",
        role: "Undergraduate Research Assistant",
        dates: "Dec 2018 – Apr 2019",
        logo: "/IITB.png",
        url: "https://www.iitb.ac.in",
        bullets: [
            "Engineered and validated a C/C++ computational solver for Fluid-Solid Interaction models, with a focus on algorithm efficiency, memory management, and numerical stability.",
        ],
    },
];

const skillGroups = [
    {
        category: "Languages & Frameworks",
        skills: [
            { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", url: "https://dotnet.microsoft.com/en-us/languages/csharp" },
            { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg", url: "https://dotnet.microsoft.com" },
            { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", url: "https://www.java.com" },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", url: "https://www.python.org" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", url: "https://nodejs.org" },
            { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg", url: "https://nestjs.com" },
            { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", url: "https://angular.io" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        ],
    },
    {
        category: "Databases",
        skills: [
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", url: "https://www.mysql.com" },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", url: "https://www.postgresql.org" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", url: "https://www.mongodb.com" },
        ],
    },
    {
        category: "Cloud & Infrastructure",
        skills: [
            { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", url: "https://aws.amazon.com" },
            { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", url: "https://azure.microsoft.com" },
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", url: "https://www.docker.com" },
            { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", url: "https://www.linux.org" },
        ],
    },
    {
        category: "DevOps & Tools",
        skills: [
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com" },
            { name: "Azure DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg", url: "https://azure.microsoft.com/en-us/products/devops" },
            { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", url: "https://gitlab.com" },
            { name: "Bitbucket", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg", url: "https://bitbucket.org" },
            { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg", url: "https://www.atlassian.com/software/jira" },
            { name: "VS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg", url: "https://visualstudio.microsoft.com" },
        ],
    },
    {
        category: "AI & Data Science",
        skills: [
            { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", url: "https://www.tensorflow.org" },
            { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg", url: "https://keras.io" },
            { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", url: "https://pytorch.org" },
            { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg", url: "https://scikit-learn.org" },
            { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", url: "https://numpy.org" },
            { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", url: "https://pandas.pydata.org" },
            { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg", url: "https://matplotlib.org" },
        ],
    },
];

function SkillIcon({ name, icon, url }: { name: string; icon: string; url: string }) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer"
           className="group flex flex-col items-center gap-1.5 w-14">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center
                bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700
                group-hover:scale-110 group-hover:shadow-md group-hover:border-slate-400
                dark:group-hover:border-slate-500 transition-all duration-200">
                <img src={icon} alt={name} className="w-6 h-6" />
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400 text-center leading-tight
                group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-200">
                {name}
            </span>
        </a>
    );
}

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
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

    const hasMultipleLogos = "logos" in exp;

    return (
        <div ref={ref}
             className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
             style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="flex gap-4 mb-6">
                {/* Logo(s) */}
                <div className="relative shrink-0 flex">
                    {hasMultipleLogos ? (
                        <div className="relative w-14 h-10">
                            {"urls" in exp && Array.isArray(exp.urls) && (exp.urls as string[]).map((url: string, i: number) => (
                                <a key={i} href={url} target="_blank" rel="noopener noreferrer"
                                   className="absolute hover:scale-110 transition-transform duration-200"
                                   style={{ left: `${i * 20}px`, zIndex: i }}>
                                    <Image src={(exp as any).logos[i]} alt={exp.company} width={36} height={36}
                                           className="rounded-full border-2 border-white dark:border-slate-900 object-cover bg-white" />
                                </a>
                            ))}
                        </div>
                    ) : (
                        <a href={"url" in exp ? exp.url as string : "#"} target="_blank" rel="noopener noreferrer"
                           className="hover:scale-110 transition-transform duration-200">
                            <Image src={"logo" in exp ? exp.logo as string : ""} alt={exp.company} width={40} height={40}
                                   className="rounded-full border border-slate-200 dark:border-slate-700 object-cover bg-white" />
                        </a>
                    )}
                </div>

                {/* Role info */}
                <div className={hasMultipleLogos ? "ml-8" : ""}>
                    <h3 className="font-semibold text-slate-900 dark:text-white text-sm">{exp.company}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{exp.role}</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{exp.dates}</p>
                </div>
            </div>

            {/* Bullets */}
            <ul className="space-y-2 pl-2 border-l-2 border-slate-200 dark:border-slate-700 ml-2">
                {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-3">
                        {bullet}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function ExperienceAndSkills() {
    return (
        <section id="experienceandskills" className="py-24 px-8 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">Experience & Skills</h2>

            <div className="grid md:grid-cols-2 gap-16">
                {/* Left — Experience */}
                <div>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-8">
                        Work Experience
                    </h3>
                    <div className="space-y-10">
                        {experiences.map((exp, i) => (
                            <ExperienceCard key={i} exp={exp} index={i} />
                        ))}
                    </div>
                </div>

                {/* Right — Skills */}
                <div>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-8">
                        Technical Skills
                    </h3>
                    <div className="space-y-8 sticky top-24">
                        {skillGroups.map((group) => (
                            <div key={group.category}>
                                <p className="text-xs font-medium text-slate-400 dark:text-slate-500 mb-3 uppercase tracking-wider">
                                    {group.category}
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {group.skills.map((skill) => (
                                        <SkillIcon key={skill.name} {...skill} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}