import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceAndSkills from "@/components/ExperienceAndSkills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Research from "@/components/Research";

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <ExperienceAndSkills/>
            <Education/>
            <Projects/>
            <Research/>
        </main>
    );
}