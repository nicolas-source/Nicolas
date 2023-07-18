import Image from 'next/image'
import FeatImage01 from "@/public/images/Canada.png";
import FeatImage03 from "@/public/images/UBCDC.png";
import FeatImage02 from "@/public/images/Sauder.png";


export default function ImageList() {
    return (
        <section>

            <div className="bg-white py-16">
                <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
                    <div data-aos="fade-up" className="mx-auto max-w-2xl text-center">
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopeer Android
                            App</p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl  lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 lg:max-w-none lg:grid-cols-1 lg:gap-y-16">
                            <div data-aos="fade-up" className="relative pl-28">

                                <dd className="mt-2 text-base leading-7 text-slate-800">
                                    <ul className="list-none">
                                        <li className="font-medium leading-6">I have extensive experience communicating
                                            and coordinating with others from my role within the Canadian military,
                                            which I can apply in any setting.
                                        </li>
                                        <li className="font-medium leading-6">I have extensive experience communicating
                                            and coordinating with others from my role within the Canadian military,
                                            which I can apply in any setting.
                                        </li>
                                        <li className="font-medium leading-6">I have extensive experience communicating
                                            and coordinating with others from my role within the Canadian military,
                                            which I can apply in any setting.
                                        </li>
                                    </ul>
                                </dd>
                            </div>
                        </dl>
                    </div>


                </div>
            </div>
            <div className="bg-white py-3">
                <div className="mx-auto mt-16 max-w-5xl px-6 lg:px-8">
                    <div
                        className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        <a href="#" className="group">
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <Image
                                    src="/images/CapstonePoster.png"
                                    width={500}
                                    height={500}
                                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                                    className="h-full w-full object-cover object-center"></Image>
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
                        </a>
                        <a href="#" className="group">
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <Image
                                    src="/images/CapstonePoster.png"
                                    width={500}
                                    height={500}
                                    alt="Olive drab green insulated bottle with flared screw lid and flat top."
                                    className="h-full w-full object-cover object-center"></Image>
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
                        </a>
                        <a href="#" className="group">
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <Image
                                    src="/images/CapstonePoster.png"
                                    width={500}
                                    height={500}
                                    alt="Person using a pen to cross a task off a productivity paper card."
                                    className="h-full w-full object-cover object-center"></Image>
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
                        </a>
                        <a href="#" className="group">
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <Image
                                    src="/images/CapstonePoster.png"
                                    width={500}
                                    height={500}
                                    alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                                    className="h-full w-full object-cover object-center"></Image>
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
                        </a>

                    </div>
                </div>
            </div>

        </section>
    )
}