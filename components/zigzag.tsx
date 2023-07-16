import Image from 'next/image'

import FeatImage01 from '@/public/images/UBCDC_FrontPage.png'
import FeatImage02 from '@/public/images/CapstonePoster.png'
import FeatImage03 from '@/public/images/GanttChart.png'
import FeatImage04 from '@/public/images/CapstoneOverview.gif'

export default function Zigzag() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/*<div className="py-12 md:py-20 border-t border-slate-400">*/}
                <div className="py-12 md:py-20">

                    {/* Section header */}
                    <div id="Projects" data-aos="fade-up" className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        {/*<div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-sky-950 bg-sky-200 rounded-full mb-4">Python, Pytorch</div>*/}
                        <h1 className="h2 mb-4">Capstone Project</h1>
                    </div>

                    {/* Items */}
                    <div className="grid gap-20">

                        {/* 1st item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                                data-aos="fade-up">
                                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage04} width={540}
                                       height={405} alt="Features 01"/>
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                 data-aos="fade-right">
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <h3 className="h3 ">Machine Learning</h3>
                                    <p className="text-xl text-slate-800 mb-4">Modelled protein sequence distribution to predict results</p>
                                    <ul className="text-lg text-slate-800 -mb-2">
                                        <li className="flex items-center mb-2">
                                           <svg className="w-3 h-3 fill-current text-slate-800 mr-2 shrink-0" fill="none" stroke="currentColor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path  d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"></path>
                                            </svg>
                                            <span className="ml-2">Implemented simple RNN and LSTM models for baseline predictions</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                           <svg className="w-3 h-3 fill-current text-slate-800 mr-2 shrink-0" fill="none" stroke="currentColor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path  d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"></path>
                                            </svg>
                                            <span className="ml-2">Adapted large scale language models from literature</span>
                                        </li>
                                        <li className="flex items-center">
                                           <svg className="w-3 h-3 fill-current text-slate-800 mr-2 shrink-0" fill="none" stroke="currentColor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path  d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"></path>
                                            </svg>
                                            <span className="ml-2">Technologies used: Pytorch, Tensorflow, Tensorboard</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 2nd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                                data-aos="fade-up">
                                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540}
                                       height={405} alt="Features 02"/>
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                 data-aos="fade-left">
                                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                    {/*<div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>*/}
                                    <h3 className="h3 mb-3">Data Engineering</h3>
                                    <p className="text-xl text-slate-800 mb-4">Cleaned and wrangled data from public scientific databases</p>
                                    <ul className="text-lg text-slate-800 -mb-2">
                                        <li className="flex items-center mb-2">
                                           <svg className="w-3 h-3 fill-current text-slate-800 mr-2 shrink-0" fill="none" stroke="currentColor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path  d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"></path>
                                            </svg>
                                            <span className="ml-2">Engineered features and feature embeddings</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                           <svg className="w-3 h-3 fill-current text-slate-800 mr-2 shrink-0" fill="none" stroke="currentColor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path  d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"></path>
                                            </svg>
                                            <span className="ml-2">Produced visualizations to communicate findings</span>
                                        </li>
                                        <li className="flex items-center">
                                           <svg className="w-3 h-3 fill-current text-slate-800 mr-2 shrink-0" fill="none" stroke="currentColor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path  d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"></path>
                                            </svg>
                                            <span className="ml-2">Used Pandas, Numpy, and other data science frameworks extensively</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 3rd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                                data-aos="fade-up">
                                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={480}
                                       height={405} alt="Features 01"/>
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                 data-aos="fade-right">
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <h3 className="h3 ">Project Management</h3>
                                    <p className="text-xl text-slate-800 mb-4">Planned and organized eight month timeline for project design for a team of four</p>
                                    <ul className="text-lg text-slate-800 -mb-2">
                                        <li className="flex items-center mb-2">
                                           <svg className="w-3 h-3 fill-current text-slate-800 mr-2 shrink-0" fill="none" stroke="currentColor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path  d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"></path>
                                            </svg>
                                            <span className="ml-2">Facilitated AGILE and SCRUM meetings to ensure coordination</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <svg className="w-3 h-3 fill-current text-slate-800 mr-2 shrink-0" fill="none" stroke="currentColor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path  d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"></path>
                                            </svg>
                                            <span className="ml-2">Conducted prioritization of features to ensure on time delivery of project deliverables</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3 h-3 fill-current text-slate-800 mr-2 shrink-0" fill="none" stroke="currentColor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path  d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"></path>
                                            </svg>


                                            <span className="ml-2">Achieved results working independently to ensure critical pieces are in place for other team members</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
