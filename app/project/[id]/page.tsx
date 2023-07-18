// export default function Page({params}: {
//     params: { id: string }
// }) {
//     return <h1>ID: {params.id}</h1>
// }


import Image from 'next/image';
import projectData from "@/data/projectData";

export default function Page({params}: {
    params: { id: string }
}) {
    function func(element: any, index: any, array: any) {
        return (element.shortName.trim() == params.id);
    }

    var projectObj = projectData.filter(func)[0];
    console.log(projectObj);


    return (
        <section>
            <div className="container mx-auto max-w-6xl px-6">

                {/* Header */}
                <div>
                    <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 pt-10 sm:mt-20 mb-7">
                        {projectObj.name}
                    </p>
                    <div className="flex">
                        <div className="flex items-center mr-10">
                        <span
                            className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
							{projectObj.projectDate}
						</span>
                        </div>
                    </div>
                </div>

                {/* Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
                    {projectObj.projectImages.map((project) => {
                        return (
                            <div className="mb-10 sm:mb-0" key={project.title}>
                                <Image
                                    src={project.img}
                                    className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                                    alt={project.title}
                                    key={project.title}
                                    layout="responsive"
                                    width={100}
                                    height={90}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Info */}
                <div className="block sm:flex gap-0 sm:gap-10 mt-14">
                    <div className="w-full sm:w-1/3 text-left">

                        {/* Single project objectives */}
                        <div className="mb-7">
                            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                                Task
                            </p>
                            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
                                {projectObj.projectObjective}
                            </p>
                        </div>

                        {/* Single project technologies */}
                        <div className="mb-7">
                            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                                Tools & Technologies
                            </p>
                            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
                                {projectObj.tools.join(
                                    ', '
                                )}
                            </p>
                        </div>

                    </div>

                    {/*  Single project right section details */}
                    <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
                        <p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
                            Challenge
                        </p>
                        {projectObj.projectInfo.map((details: any) => {
                            return (
                                <p
                                    className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
                                >
                                    {details}
                                </p>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}

