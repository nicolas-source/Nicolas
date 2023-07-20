export const metadata = {
    title: 'Nicolas',
    description: 'Nicolas Portfolio',
}

import Hero from '@/components/hero'
import ExperienceList from "@/components/ExperienceList";
import EducationList from "@/components/EducationList";
// import Projects from "@/components/Projects";
import Projects from "@/components/Projects_static";

export default function Home() {
    return (
        <>
            <Hero/>
            <Projects/>
            <EducationList/>
            <ExperienceList/>
        </>
    )
}
