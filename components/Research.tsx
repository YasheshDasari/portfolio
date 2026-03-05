"use client";

import { useState } from "react";

const publications = [
    {
        type: "Graduate Thesis",
        title: "Deep Learning-Enabled Cerebrovascular Reactivity Processing Software",
        authors: "Yashesh Dasari",
        journal: "University of Waterloo",
        year: "2022",
        url: "https://uwspace.uwaterloo.ca/items/b4583970-e918-4c1e-9d1e-54cd05d8669d",
        pdf: "/Thesis.pdf",
        abstract: "A next-generation CVR processing and visualization software application that processes raw BOLD-MRI files and generates CVR maps using open-source tools, deployed as a stand-alone application on a virtual machine. Convolutional neural networks are designed to facilitate SOD patient screening, automating the clinical workflow by 75% and providing a one-stop software solution for data-driven decisions.",
        tags: ["Deep Learning", "MRI", "CNN", "CVR", "Software Development"],
    },
    {
        type: "Journal Publication",
        title: "Convolutional Neural Networks to Assess Steno-Occlusive Disease Using Cerebrovascular Reactivity",
        authors: "Yashesh Dasari",
        journal: "MDPI Healthcare",
        year: "2023",
        url: "https://doi.org/10.3390/healthcare11162231",
        pdf: "/Publication.pdf",
        abstract: "This study develops a CNN-based clinical decision support system to facilitate screening of SOD patients by discriminating between healthy and unhealthy CVR maps. Networks were trained on a CVR dataset of 68 healthy controls and 163 SOD patients. Results indicate that a customized CNN with a double-stacked convolution layer architecture produces the best results, consistent with expert clinical readings.",
        tags: ["CNN", "Cerebrovascular Reactivity", "Steno-Occlusive Disease", "Transfer Learning", "BOLD-MRI"],
    },
];

function PublicationCard({ pub }: { pub: typeof publications[0] }) {
    const [expanded, setExpanded] = useState(false);
    const [pdfOpen, setPdfOpen] = useState(false);

    return (
        <div className="flex flex-col rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 overflow-hidden hover:shadow-lg transition-shadow duration-300">

            <div
                className="relative group cursor-pointer overflow-hidden"
                style={{ height: pdfOpen ? "500px" : "200px" }}
                onClick={() => setPdfOpen(!pdfOpen)}
            >
                <iframe
                    src={pub.pdf + "#toolbar=0&navpanes=0&scrollbar=0"}
                    className="w-full h-full pointer-events-none"
                    title={pub.title}
                />
                {!pdfOpen && (
                    <div className="absolute inset-0 bg-slate-900/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-sm font-semibold">Click to expand PDF</span>
                        <span className="text-slate-300 text-xs mt-1">Scroll to read</span>
                    </div>
                )}
                {pdfOpen && (
                    <button
                        className="absolute top-3 right-3 bg-slate-900/80 text-white text-xs px-3 py-1.5 rounded-full hover:bg-slate-900 transition"
                        onClick={(e) => { e.stopPropagation(); setPdfOpen(false); }}
                    >
                        Collapse
                    </button>
                )}
            </div>

            <div className="p-6 flex flex-col gap-4 flex-1">
                <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                        {pub.type}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1 leading-snug">
                        {pub.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {pub.authors} · {pub.journal} · {pub.year}
                    </p>
                </div>

                <div>
                    <p className={`text-sm text-slate-600 dark:text-slate-400 leading-relaxed ${expanded ? "" : "line-clamp-3"}`}>
                        {pub.abstract}
                    </p>
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="text-xs text-slate-400 hover:text-slate-900 dark:hover:text-white mt-1 transition-colors"
                    >
                        {expanded ? "Show less" : "Read more"}
                    </button>
                </div>

                <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-3 mt-auto pt-2">
                    <a href={pub.url} target="_blank" rel="noopener noreferrer"
                       className="text-xs font-semibold px-4 py-2 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-black hover:scale-105 transition">
                        View Publication
                    </a>
                    <a href={pub.pdf} target="_blank" rel="noopener noreferrer"
                       className="text-xs font-semibold px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition">
                        Download PDF
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function Research() {
    return (
        <section id="research" className="py-24 px-8 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Research & Publications</h2>
            <p className="text-slate-500 dark:text-slate-400 text-center mb-16 max-w-xl mx-auto text-sm">
                Peer-reviewed research at the intersection of deep learning, medical imaging, and clinical decision support.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
                {publications.map((pub) => (
                    <PublicationCard key={pub.title} pub={pub} />
                ))}
            </div>
        </section>
    );
}