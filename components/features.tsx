export default function Features() {
    return (
        <section>

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    <div className="py-12 md:py-12 border-t border-gray-800"></div>
                    {/* Section header */}
                    <div id="Education" className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4">Education</h2>
                        <p className="text-xl text-gray-400">UBC Bachelors of Applied Science in Computer
                            Engineering</p> <p className="text-xl text-gray-400">Graduated with Distinction</p>
                    </div>

                    {/* Items */}
                    <div
                        className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
                        data-aos-id-blocks>

                        {/* 1st item */}
                        <div className="relative flex flex-col items-center" data-aos="fade-up"
                             data-aos-anchor="[data-aos-id-blocks]">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 500 500"
                                 stroke="currentColor" className="w-16 h-16 mb-4">
                                <circle className="fill-current text-purple-600" cx="250" cy="250" r="250"/>
                                <path
                                    d="M 437.482 177.066 C 439.962 183.806 437.87 191.322 432.524 196.126 L 398.975 226.653 C 399.827 233.083 400.292 239.669 400.292 246.332 C 400.292 252.996 399.827 259.581 398.975 266.012 L 432.524 296.539 C 437.87 301.343 439.962 308.858 437.482 315.599 C 434.073 324.819 429.967 333.652 425.241 342.175 L 421.599 348.451 C 416.485 356.973 410.752 365.031 404.476 372.624 C 399.905 378.203 392.312 380.062 385.493 377.893 L 342.337 364.179 C 331.955 372.159 320.488 378.823 308.246 383.859 L 298.561 428.1 C 297.012 435.15 291.588 440.729 284.46 441.891 C 273.768 443.673 262.766 444.603 251.531 444.603 C 240.297 444.603 229.295 443.673 218.602 441.891 C 211.474 440.729 206.051 435.15 204.501 428.1 L 194.816 383.859 C 182.574 378.823 171.107 372.159 160.725 364.179 L 117.646 377.97 C 110.828 380.14 103.235 378.203 98.664 372.702 C 92.388 365.109 86.655 357.051 81.541 348.528 L 77.899 342.252 C 73.173 333.729 69.067 324.897 65.658 315.677 C 63.178 308.936 65.27 301.42 70.616 296.617 L 104.165 266.09 C 103.313 259.581 102.848 252.996 102.848 246.332 C 102.848 239.669 103.313 233.083 104.165 226.653 L 70.616 196.126 C 65.27 191.322 63.178 183.806 65.658 177.066 C 69.067 167.846 73.173 159.013 77.899 150.49 L 81.541 144.214 C 86.655 135.692 92.388 127.634 98.664 120.041 C 103.235 114.462 110.828 112.603 117.646 114.772 L 160.803 128.486 C 171.185 120.506 182.652 113.842 194.894 108.806 L 204.579 64.565 C 206.128 57.515 211.552 51.936 218.68 50.774 C 229.372 48.914 240.374 47.985 251.609 47.985 C 262.843 47.985 273.845 48.914 284.538 50.696 C 291.666 51.859 297.089 57.437 298.639 64.488 L 308.324 108.729 C 320.566 113.765 332.033 120.428 342.415 128.408 L 385.571 114.695 C 392.389 112.525 399.982 114.462 404.553 119.963 C 410.829 127.556 416.563 135.614 421.676 144.137 L 425.318 150.413 C 430.044 158.935 434.151 167.768 437.56 176.988 L 437.482 177.066 Z M 251.609 308.316 C 299.324 308.316 329.146 256.663 305.288 215.341 C 294.216 196.163 273.753 184.349 251.609 184.349 C 203.894 184.349 174.072 236.002 197.929 277.324 C 209.002 296.502 229.464 308.316 251.609 308.316 Z"
                                    style={{"fill": "rgb(255, 255, 255)", "stroke": "rgb(0, 0, 0)"}}/>
                            </svg>


                            <h4 className="h4 mb-2">Software Principles</h4>
                            <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat.</p>
                        </div>

                        {/* 2nd item */}
                        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100"
                             data-aos-anchor="[data-aos-id-blocks]">
                            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <circle className="fill-current text-purple-600" cx="32" cy="32" r="32"/>
                                <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square"
                                      d="M21 23h22v18H21z" fill="none" fillRule="evenodd"/>
                                <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5"
                                      strokeWidth="2" strokeLinecap="square"/>
                            </svg>
                            <h4 className="h4 mb-2">Back-End</h4>
                            <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat.</p>
                        </div>

                        {/* 3rd item */}
                        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200"
                             data-aos-anchor="[data-aos-id-blocks]">
                            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <rect className="fill-current text-purple-600" width="64" height="64" rx="32"/>
                                <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none"
                                   fillRule="evenodd">
                                    <ellipse className="stroke-current text-purple-300" cx="11" cy="11" rx="5.5"
                                             ry="11"/>
                                    <path className="stroke-current text-purple-100" d="M11 0v22M0 11h22"/>
                                    <circle className="stroke-current text-purple-100" cx="11" cy="11" r="11"/>
                                </g>
                            </svg>
                            <h4 className="h4 mb-2">Front-End</h4>
                            <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat.</p>
                        </div>

                        {/* 4th item */}
                        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300"
                             data-aos-anchor="[data-aos-id-blocks]">
                            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <rect className="fill-current text-purple-600" width="64" height="64" rx="32"/>
                                <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none"
                                   fillRule="evenodd">
                                    <path className="stroke-current text-purple-100"
                                          d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5"/>
                                    <circle className="stroke-current text-purple-300" cx="13" cy="9" r="3"/>
                                </g>
                            </svg>
                            <h4 className="h4 mb-2">Deep Learning</h4>
                            <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat.</p>
                        </div>

                        {/* 5th item */}
                        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400"
                             data-aos-anchor="[data-aos-id-blocks]">
                            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <rect className="fill-current text-purple-600" width="64" height="64" rx="32"/>
                                <g strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                                    <path className="stroke-current text-purple-100"
                                          d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6"/>
                                    <path className="stroke-current text-purple-300" d="M22 30h4v12h-4z"/>
                                </g>
                            </svg>
                            <h4 className="h4 mb-2">Cyber Security</h4>
                            <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat.</p>
                        </div>

                        {/* 6th item */}
                        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500"
                             data-aos-anchor="[data-aos-id-blocks]">
                            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <rect className="fill-current text-purple-600" width="64" height="64" rx="32"/>
                                <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none"
                                   fillRule="evenodd">
                                    <path className="stroke-current text-purple-300"
                                          d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415"/>
                                    <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3"/>
                                    <path className="stroke-current text-purple-100"
                                          d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948"/>
                                </g>
                            </svg>
                            <h4 className="h4 mb-2">Projects</h4>
                            <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat.</p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}
