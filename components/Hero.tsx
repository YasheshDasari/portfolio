export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 pt-20">

            <span className="mb-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                Open to opportunities (starting March 9, 2026)
            </span>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                Yashesh Dasari
            </h1>

            <p className="text-xl text-slate-500 dark:text-slate-400 mt-2">
                Software Engineer
            </p>

            <p className="text-sm text-slate-400 dark:text-slate-500 mt-1 mb-10">
                Regulated Backend Systems · REST APIs · AI Engineering · Medical Devices · Data Analysis
            </p>

            <div className="flex gap-4 flex-wrap justify-center">

                <a href="https://github.com/YasheshDasari/" target="_blank" className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-xl font-semibold hover:scale-105 transition">
                    GitHub
                </a>

                <a href="https://www.linkedin.com/in/yasheshdasari/" target="_blank" className="px-6 py-3 border border-slate-300 dark:border-slate-600 rounded-xl font-semibold hover:scale-105 transition">
                    LinkedIn
                </a>

                {/*<a href="#contact" className="px-6 py-3 border border-slate-300 dark:border-slate-600 rounded-xl font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition">*/}
                {/*    Contact Me*/}
                {/*</a>*/}

            </div>
        </section>
    );
}