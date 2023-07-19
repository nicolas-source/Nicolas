import Image from 'next/image'
import Link from 'next/link';

import projectData from '@/data/projectData'

export default function Projects() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-8 md:py-16 border-t border-gray-800">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-8 md:pb-16" data-aos="fade-up"
                         data-aos-delay="100">
                        <h2 className="h2">Projects</h2>
                    </div>

                    {/* Projects */}
                    <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-2 lg:gap-6 items-start lg:max-w-none"
                         data-aos="fade-up" data-aos-delay="200">

                        {
                            projectData.map((project, index) => (
                                    <div key={project.id}
                                        className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
                                        <div className="flex-col">
                                            <div className="">
                                                <Image className="h-48 w-full object-cover hover:object-scale-down"
                                                       src={project.image}
                                                       width={500}
                                                       height={500}
                                                       alt="Project Image"/>
                                            </div>
                                            <div className="px-8 py-6">
                                                    {project.name}
                                                <ul className="list-disc ml-5">
                                                    {
                                                        project.description.map((item, index) => (
                                                                <li key={project.id}
                                                                    className="mt-1 text-slate-700">
                                                                    {item}
                                                                </li>
                                                            )
                                                        )
                                                    }
                                                </ul>
                                                {
                                                    project.tools.map((item, index) => (
                                                            <span key={project.id}
                                                                className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 mx-1 mt-3
                                                                text-sm uppercase font-semibold text-green-600
                                                                ring-1 ring-inset ring-green-500 ring-2">
                                                                {item}
                                                            </span>
                                                        )
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
