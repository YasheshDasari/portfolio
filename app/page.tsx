import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceAndSkills from "@/components/ExperienceAndSkills";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <ExperienceAndSkills/>
            {/*<Education/>*/}
            <Projects/>
        </main>
    );
}