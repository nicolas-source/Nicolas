import {projectsData} from '@/data/projectsData';
import ProjectSingle from "@/app/projects/Test/ProjectSingle";

export default function Projects() {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-5">
                {
                    projectsData.map((project, index) => (
                            <ProjectSingle key={index} {...project} />
                        )
                    )
                }
            </div>
        </section>
    )
}
