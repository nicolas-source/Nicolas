import Image from 'next/image'

import FeatImage01 from '@/public/images/Canada.png'
import FeatImage02 from '@/public/images/Sauder.png'
import FeatImage03 from '@/public/images/UBCDC.png'

export default function IconList() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">

                    {/* Section header */}
                    <div id="Projects" className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        {/*<div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div>*/}
                        <h1 className="h2 mb-4">Experience</h1>
                    </div>

                    {/* Items */}
                    <div className="grid gap-20">

                        {/*item*/}
                        <div className="md:grid md:grid-cols-12 md:gap-2 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-3 lg:col-span-3 mb-8 md:mb-0 rtl"
                                data-aos="fade-up">
                                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={200}
                                       height={200} alt="Features 02"/>
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-9 lg:col-span-9"
                                 data-aos="fade-left">
                                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                    {/*<div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>*/}
                                    <h3 className="h3 mb-3">Capstone Project</h3>
                                    <p className="text-xl text-gray-400 mb-4">Worked in a team of four to implement a
                                        deep learning framework and integrate it with frontend and backend
                                        interfaces</p>
                                    <ul className="text-lg text-gray-400 -mb-2">
                                        <li className="flex items-center mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>Duis aute irure dolor in reprehenderit</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>Excepteur sint occaecat</span>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                                            </svg>
                                            <span>Amet consectetur adipiscing elit</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>


            <div className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Experience & Volunteering</p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl  lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-1 lg:gap-y-16">
                            <div className="relative pl-28">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div>
                                        <Image className="absolute left-0 top-0 flex h-24 w-24 items-center justify-centerbg-indigo-600"
                                               src={FeatImage01} width={80}
                                               height={80} alt="Features 01"/>
                                    </div>
                                    <p className="font-semibold text-lg">Mobile Support Equipment Op</p>
                                    <p className="font-normal leading-4">Department of National Defense</p>
                                    <p className="font-normal leading-7 text-neutral-500">Aug 2018 - Present</p>
                                    <p className="font-normal leading-4 text-neutral-500">Disaster and Humanitarian Relief</p>
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">Morbi viverra dui mi arcu sed.
                                    Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.
                                </dd>
                            </div>
                            <div className="relative pl-28">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div>
                                        <Image className="absolute left-0 top-0 flex h-24 w-24 items-center justify-center bg-indigo-600"
                                               src={FeatImage03} width={80}
                                               height={80} alt="Features 01"/>
                                    </div>
                                    <p className="font-semibold text-lg">IT Manager, Treasurer </p>
                                    <p className="font-normal leading-4">UBC Dance Club</p>
                                    <p className="font-normal leading-7 text-neutral-500">May 2020 - May 2023</p>
                                    <p className="font-normal leading-4 text-neutral-500">Community Arts and Culture</p>
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">Morbi viverra dui mi arcu sed.
                                    Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.
                                </dd>
                            </div>
                            <div className="relative pl-28">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div>
                                        <Image className="absolute left-0 top-0 flex h-24 w-24 items-center justify-center rounded-lg bg-indigo-600"
                                               src={FeatImage02} width={80}
                                               height={80} alt="Features 01"/>
                                    </div>
                                    <p className="font-semibold text-lg">Student Assistant </p>
                                    <p className="font-normal leading-4">UBC Sauder Learning Labs</p>
                                    <p className="font-normal leading-7 text-neutral-500">Oct 2020 - May 2023</p>
                                    <p className="font-normal leading-4 text-neutral-500">Education</p>
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">Morbi viverra dui mi arcu sed.
                                    Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

            {/*<div className="bg-white">*/}
            {/*    <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">*/}
            {/*        <div*/}
            {/*            className="relative isolate px-6 shadow-2xl sm:rounded-3xl sm:px-16  lg:flex lg:gap-x-20 lg:px-24">*/}
            {/*            <div className="mx-auto max-w-7xl px-6 lg:px-8">*/}
            {/*                <div className="mx-auto mt-16 max-w-2xl mb-24 lg:max-w-4xl">*/}
            {/*                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-1 lg:gap-y-16">*/}
            {/*                        <div className="relative pl-28">*/}
            {/*                            <dt className="text-base font-semibold leading-7 text-gray-900">*/}
            {/*                                <div>*/}
            {/*                                    <Image className="absolute left-0 top-0 flex h-24 w-24 items-center justify-centerbg-indigo-600"*/}
            {/*                                           src={FeatImage01} width={80}*/}
            {/*                                           height={80} alt="Features 01"/>*/}
            {/*                                </div>*/}
            {/*                                <p className="font-semibold text-lg">Mobile Support Equipment Op</p>*/}
            {/*                                <p className="font-normal leading-4">Department of National Defense</p>*/}
            {/*                                <p className="font-normal leading-7 text-neutral-500">Aug 2018 - Present</p>*/}
            {/*                                <p className="font-normal leading-4 text-neutral-500">Disaster and Humanitarian Relief</p>*/}
            {/*                            </dt>*/}
            {/*                            <dd className="mt-2 text-base leading-7 text-gray-600">Morbi viverra dui mi arcu sed.*/}
            {/*                                Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.*/}
            {/*                            </dd>*/}
            {/*                        </div>*/}
            {/*                        <div className="relative pl-28">*/}
            {/*                            <dt className="text-base font-semibold leading-7 text-gray-900">*/}
            {/*                                <div>*/}
            {/*                                    <Image className="absolute left-0 top-0 flex h-24 w-24 items-center justify-center bg-indigo-600"*/}
            {/*                                           src={FeatImage03} width={80}*/}
            {/*                                           height={80} alt="Features 01"/>*/}
            {/*                                </div>*/}
            {/*                                <p className="font-semibold text-lg">IT Manager, Treasurer </p>*/}
            {/*                                <p className="font-normal leading-4">UBC Dance Club</p>*/}
            {/*                                <p className="font-normal leading-7 text-neutral-500">May 2020 - May 2023</p>*/}
            {/*                                <p className="font-normal leading-4 text-neutral-500">Community Arts and Culture</p>*/}
            {/*                            </dt>*/}
            {/*                            <dd className="mt-2 text-base leading-7 text-gray-600">Morbi viverra dui mi arcu sed.*/}
            {/*                                Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.*/}
            {/*                            </dd>*/}
            {/*                        </div>*/}

            {/*                    </dl>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </section>


    )
}
