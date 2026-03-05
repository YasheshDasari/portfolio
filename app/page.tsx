import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceAndSkills from "@/components/ExperienceAndSkills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Research from "@/components/Research";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main>
            <Hero/>
            <About/>
            <ExperienceAndSkills/>
            <Education/>
            <Projects/>
            <Research/>
            <Awards/>
            <Contact/>
        </main>
    );
}