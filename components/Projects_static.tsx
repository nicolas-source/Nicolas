import Image from 'next/image'
import Link from "next/link";

import capstoneImage from '@/public/images/Capstone/CapstonePoster.png'
import cybersecImage from '@/public/images/CybersecurityAnalysis/CybersecurityAnalysis_Testing.png'
import shopeerImage from '@/public/images/Shopeer/shopeer_Login.png'
import perswebImage from '@/public/images/Personalwebsite/personalwebsite_1.png'
import ubcdcImage from '@/public/images/UBCDC/UBCDC_FrontPage.png'

import Modal from '@/components/Modal'

export default function Projects() {
    return (
        <section id="Projects">
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

                        {/*Project 1*/}
                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
                            <Link href="/ProteinPrediction">
                            <div className="flex-col">
                                <div className="">
                                    <Image className="h-48 w-full object-cover hover:object-scale-down"
                                           src={capstoneImage}
                                           width={500}
                                           height={500}
                                           alt="Project Image"/>
                                </div>
                                <div className="px-8 py-6">
                                    Machine Learning (NLP) for Protein Prediction
                                    <ul className="list-disc ml-5">
                                        <li className="mt-1 text-slate-700">
                                            Engineered statistical models to make predictions on protein sequences
                                        </li>
                                        <li className="mt-1 text-slate-700">
                                            Developed knowledge in deep learning to debug issues on models
                                        </li>
                                        <li className="mt-1 text-slate-700">
                                            Implemented models using industry frameworks (Pytorch, Tensorflow)
                                        </li>
                                        <li className="mt-1 text-slate-700">
                                            Used JIRA and followed AGILE development methodology
                                        </li>
                                    </ul>
                                    <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 mx-1 mt-3
                                                     text-sm uppercase font-semibold text-green-600
                                                     ring-1 ring-inset ring-green-500 ring-2">
                                                     Python
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 mx-1 mt-3
                                                     text-sm uppercase font-semibold text-green-600
                                                     ring-1 ring-inset ring-green-500 ring-2">
                                                     Pytorch
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 mx-1 mt-3
                                                     text-sm uppercase font-semibold text-green-600
                                                     ring-1 ring-inset ring-green-500 ring-2">
                                                     Tensorflow
                                    </span>
                                </div>
                            </div>
                            </Link>
                        </div>


                        {/*Project 2*/}
                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
                            <div className="flex-col">
                                <div className="">
                                    <Image className="h-48 w-full object-cover hover:object-scale-down"
                                           src={cybersecImage}
                                           width={500}
                                           height={500}
                                           alt="Project Image"/>
                                </div>
                                <div className="px-8 py-6">
                                    Real-world Cyber-security Analysis
                                    <ul className="list-disc ml-5">
                                        <li className="mt-1 text-slate-700">
                                            Presented at the 2023 Vancouver Security Special Interest Group
                                        </li>
                                        <li className="mt-1 text-slate-700">
                                            Won Best Analysis Project of 2023 for the UBC Cybersecurity Course
                                        </li>
                                        <li className="mt-1 text-slate-700">
                                            Analyzed potential security flaws of a real-world web application and
                                            reported issues to protect sensitive data
                                        </li>
                                    </ul>
                                    <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 mx-1 mt-3
                                                     text-sm uppercase font-semibold text-green-600
                                                     ring-1 ring-inset ring-green-500 ring-2">
                                                     Analysis
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 mx-1 mt-3
                                                     text-sm uppercase font-semibold text-green-600
                                                     ring-1 ring-inset ring-green-500 ring-2">
                                                     Presentation
                                    </span>
                                </div>
                            </div>
                        </div>


                        {/*Project 3*/}
                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
                            <div className="flex-col">
                                <div className="">
                                    <Image className="h-48 w-full object-cover hover:object-scale-down"
                                           src={shopeerImage}
                                           width={500}
                                           height={500}
                                           alt="Project Image"/>
                                </div>
                                <div className="px-8 py-6">
                                    Shopeer Android App
                                    <ul className="list-disc ml-5">
                                        <li className="mt-1 text-slate-700">
                                            Used Node.js and Express.js for backend and MongoDB for database
                                        </li>
                                        <li className="mt-1 text-slate-700">
                                            Used Websocket for live chat functionality
                                        </li>
                                        <li className="mt-1 text-slate-700">
                                            Used Codacy for automated testing and code smell
                                        </li>
                                        <li className="mt-1 text-slate-700">
                                            Used Jest for backend testing
                                        </li>
                                        <li className="mt-1 text-slate-700">
                                            Used Backend hosted on Microsoft Azure
                                        </li>
                                    </ul>
                                    <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 mx-1 mt-3
                                                     text-sm uppercase font-semibold text-green-600
                                                     ring-1 ring-inset ring-green-500 ring-2">
                                                     React
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 mx-1 mt-3
                                                     text-sm uppercase font-semibold text-green-600
                                                     ring-1 ring-inset ring-green-500 ring-2">
                                                     NodeJs
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 mx-1 mt-3
                                                     text-sm uppercase font-semibold text-green-600
                                                     ring-1 ring-inset ring-green-500 ring-2">
                                                     MongoDB
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 mx-1 mt-3
                                                     text-sm uppercase font-semibold text-green-600
                                                     ring-1 ring-inset ring-green-500 ring-2">
                                                     JUnit
                                    </span>
                                </div>
                            </div>
                        </div>


                        {/*Project 4*/}
                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
                            <div className="flex-col">
                                <div className="">
                                    <Image className="h-48 w-full object-cover hover:object-scale-down"
                                           src={perswebImage}
                                           width={500}
                                           height={500}
                                           alt="Project Image"/>
                                </div>
                                <div className="px-8 py-6">
                                    Personal Website
                                    <ul className="list-disc ml-5">
                                        <li className="mt-1 text-slate-700">
                                            Used NextJs and Tailwind css to rapidly build a single page application
                                        </li>
                                    </ul>
                                    <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 mx-1 mt-3
                                                     text-sm uppercase font-semibold text-green-600
                                                     ring-1 ring-inset ring-green-500 ring-2">
                                                     React
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 mx-1 mt-3
                                                     text-sm uppercase font-semibold text-green-600
                                                     ring-1 ring-inset ring-green-500 ring-2">
                                                     NextJs
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 mx-1 mt-3
                                                     text-sm uppercase font-semibold text-green-600
                                                     ring-1 ring-inset ring-green-500 ring-2">
                                                     NodeJs
                                    </span>
                                </div>
                            </div>
                        </div>


                        {/*Project 5*/}
                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
                            <div className="flex-col">
                                <div className="">
                                    <Image className="h-48 w-full object-cover hover:object-scale-down"
                                           src={ubcdcImage}
                                           width={500}
                                           height={500}
                                           alt="Project Image"/>
                                </div>
                                <div className="px-8 py-6">
                                    UBC Dance Club Website
                                    <ul className="list-disc ml-5">
                                        <li className="mt-1 text-slate-700">
                                            Redesigned website for responsiveness and mobile use to increase web traffic
                                            over 5 times
                                        </li>
                                        <li className="mt-1 text-slate-700">
                                            Learned about PHP settings within WordPress
                                        </li>
                                    </ul>
                                    <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 mx-1 mt-3
                                                     text-sm uppercase font-semibold text-green-600
                                                     ring-1 ring-inset ring-green-500 ring-2">
                                                     HTML
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 mx-1 mt-3
                                                     text-sm uppercase font-semibold text-green-600
                                                     ring-1 ring-inset ring-green-500 ring-2">
                                                     CSS
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 mx-1 mt-3
                                                     text-sm uppercase font-semibold text-green-600
                                                     ring-1 ring-inset ring-green-500 ring-2">
                                                     JavaScript
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 mx-1 mt-3
                                                     text-sm uppercase font-semibold text-green-600
                                                     ring-1 ring-inset ring-green-500 ring-2">
                                                     Bootstrap
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 mx-1 mt-3
                                                     text-sm uppercase font-semibold text-green-600
                                                     ring-1 ring-inset ring-green-500 ring-2">
                                                     WordPress
                                    </span>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>


        </section>
    )
}
