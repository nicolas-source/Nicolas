import Image from 'next/image'

import FeatImage01 from '@/public/images/UBCDC/UBCDC_FrontPage.png'
import FeatImage02 from '@/public/images/UBCDC/UBCDC_About.png'
import FeatImage03 from '@/public/images/UBCDC/UBCDC_Execs.png'

import projectData from "@/data/projectData";

const project = projectData[4]

export default function Zigzag() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-16 md:py-24">

                    {/* Section header */}
                    <div id="CapstoneProject" data-aos="fade-up"
                         className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        {/*<div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-sky-950 bg-sky-200 rounded-full mb-4">Python, Pytorch</div>*/}
                        <h1 className="h2 mb-4">{project.name}</h1>
                        <p>{project.projectDate}</p>
                    </div>

                    {/* Items */}
                    <div className="grid gap-20">

                        {/* 1st item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                                data-aos="fade-up">
                                <Image className="
                                w-auto
                                mx-auto
                                md:max-w-none
                                h-auto
                                max-h-96
                                " src={FeatImage01} width={540}
                                       height={405} alt="Features 01"/>
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                 data-aos="fade-right">
                                <h3 className="h3 text-center p-6">Description</h3>
                                <div className="md:pr-6 lg:pr-12 xl:pr-16">
                                    <ul className="text-lg text-slate-800 -mb-2">
                                        {
                                            project.projectInfo.map((data) => {
                                                return (
                                                    <li className="flex items-center mb-2">
                                                        <svg
                                                            className="w-3 h-3 fill-current text-slate-800 mr-2 shrink-0"
                                                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                            <path
                                                                d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"></path>
                                                        </svg>
                                                        <span className="ml-2">{data}</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    {/*<a href="https://docs.google.com/document/d/1Jwydb7bxtgdMewcTUrViGvGbpD4DheYGjudxitidoJE/edit?usp=sharing">Design Document</a>*/}
                                </div>
                            </div>
                        </div>

                        {/* 2nd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                                data-aos="fade-up">
                                <Image className="
                                w-auto
                                mx-auto
                                md:max-w-none
                                h-auto
                                max-h-96
                                " src={FeatImage02} width={540}
                                       height={405} alt="Features 02"/>
                            </div>
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                                data-aos="fade-up">
                                <Image className="
                                w-auto
                                mx-auto
                                md:max-w-none
                                h-auto
                                max-h-96
                                " src={FeatImage03} width={540}
                                       height={405} alt="Features 03"/>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}
