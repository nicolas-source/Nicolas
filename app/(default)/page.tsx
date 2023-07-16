export const metadata = {
    title: 'Nicolas',
    description: 'Nicolas Portfolio',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Zigzag from '@/components/zigzag'
import ExperienceList from "@/components/ExperienceList";
import EducationList from "@/components/EducationList";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <>
            <Hero/>
            <Projects/>
            <EducationList/>
            <ExperienceList/>
            {/*<Features />*/}

            {/*<Zigzag/>*/}

        </>
    )
}
