import Image from 'next/image'
import Link from 'next/link';

import TestimonialImage01 from '@/public/images/CapstonePoster.png'
import TestimonialImage02 from '@/public/images/Canada.png'
import TestimonialImage03 from '@/public/images/Canada.png'
import projectData from '@/data/projectData'
import internal from "stream";

export default function Projects() {
    console.log(projectData)
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20" data-aos="fade-up"
                         data-aos-delay="100">
                        <h2 className="h2">Projects</h2>
                    </div>

                    {/* Projects */}
                    <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-2 lg:gap-6 items-start lg:max-w-none"
                         data-aos="fade-up" data-aos-delay="200">

                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
                            <div className="md:flex">
                                <div className="md:shrink-0">
                                    <Image className="h-48 w-full object-cover md:h-full md:w-48"
                                           src={TestimonialImage01}
                                           alt="Modern building architecture"/>
                                </div>
                                <div className="p-8">
                                    {/*<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>*/}
                                    <Link href="/projects/ProteinPrediction"
                                          className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                                        Machine Learning (NLP) for Protein Prediction
                                    </Link>

                                    <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to
                                        enjoy awesome food
                                        and take in some sunshine? We have a list of places to do just that.</p>
                                </div>
                            </div>
                        </div>


                        {
                            projectData.map((project, index) => (
                                    <div
                                        className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
                                        <div className="md:flex">
                                            <div className="md:shrink-0">
                                                <Image className="h-48 w-full object-cover md:h-full md:w-48"
                                                       src={TestimonialImage01}
                                                       alt="Modern building architecture"/>
                                            </div>
                                            <div className="p-8">
                                                <Link href="#"
                                                      className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                                                    {project.name}
                                                </Link>
                                                <ul className="list-disc">
                                                    {
                                                        project.description.map((item, index) => (
                                                                <li className="mt-1 text-slate-700">
                                                                    {item}
                                                                </li>
                                                            )
                                                        )
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )
                        }
                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
                            <div className="md:flex">
                                <div className="md:shrink-0">
                                    <Image className="h-48 w-full object-cover md:h-full md:w-48"
                                           src={TestimonialImage01}
                                           alt="Modern building architecture"/>
                                </div>
                                <div className="p-8">
                                    {/*<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>*/}
                                    <Link href="#"
                                          className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible
                                        accommodation for your team</Link>
                                    <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to
                                        enjoy awesome food
                                        and take in some sunshine? We have a list of places to do just that.</p>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
                            <div className="md:flex">
                                <div className="md:shrink-0">
                                    <Image className="h-48 w-full object-cover md:h-full md:w-48"
                                           src={TestimonialImage01}
                                           alt="Modern building architecture"/>
                                </div>
                                <div className="p-8">
                                    {/*<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>*/}
                                    <Link href="#"
                                          className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible
                                        accommodation for your team</Link>
                                    <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to
                                        enjoy awesome food
                                        and take in some sunshine? We have a list of places to do just that.</p>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
                            <div className="md:flex">
                                <div className="md:shrink-0">
                                    <Image className="h-48 w-full object-cover md:h-full md:w-48"
                                           src={TestimonialImage01}
                                           alt="Modern building architecture"/>
                                </div>
                                <div className="p-8">
                                    {/*<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>*/}
                                    <Link href="#"
                                          className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible
                                        accommodation for your team</Link>
                                    <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to
                                        enjoy awesome food
                                        and take in some sunshine? We have a list of places to do just that.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
