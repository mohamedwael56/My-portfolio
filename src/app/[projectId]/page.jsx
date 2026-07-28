import React from "react";
import Header from "@/components/Header";
import projects from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
async function page({ params }) {
  const { projectId } = await params;
  const project = projects.find((p) => p.id === projectId);
  console.log(project);
  return (
    <>
      <div className="flex items-center flex-col ">
        <Header />
        <main className="flex flex-col m-5 items-center justify-center mt-20">
          <div className="mt-20 flex gap-5 flex-col lg:flex-row lg:justify-between">
            <div className="flex flex-col gap-4">
              <h1 className="lg:text-4xl text-xl text-black font-bold">{project?.name}</h1>
              <p className="lg:w-[500px] w-[290px]">{project?.description}</p>

              <div className=" flex lg:flex-row  flex-col mt-2 gap-1">
                {project?.technologies.map((tech) => {
                  return (
                    <div
                      key={tech}
                      className="border px-2 py-1 capitalize rounded-xl select-none bg-black text-white transition-all duration-400"
                    >
                      {tech}
                    </div>
                  );
                })}
              </div>

              <div className="flex mt-4 flex-row gap-3">
                <Link
                  href={`${project?.Demo}`}
                  target="_blank"
                  className="border px-5 py-2 cursor-pointer capitalize rounded-xl hover:bg-black hover:text-white transition-all duration-400"
                >
                  live demo
                </Link>
                <Link
                  href={`${project?.gitHub}`}
                  target="_blank"
                  className="border px-5 py-2 cursor-pointer capitalize rounded-xl hover:bg-black hover:text-white transition-all duration-400"
                >
                  git hub
                </Link>
              </div>
            </div>
            <div className="">
              <div className="lg:w-180 w-80 lg:h-80 h-40 relative shadow-lg shadow-black rounded-2xl">
                <Image src={project?.img} alt={project?.name} fill />
              </div>
            </div>
          </div>
          <div className="flex w-full lg:flex-row flex-col justify-between my-20">
            <div className="flex flex-col">
              <div className="">
                <h1 className="text-2xl font-bold">Project Overview</h1>
                <p className="lg:w-[500px] w-[290px] mt-2">{project?.overView}</p>
              </div>
              <div className="mt-10">
                <h1 className="text-2xl font-bold">Key Features</h1>
                <ul className="list-disc text-xs lg:mb-0 mb-10  lg:text-base list-inside gap-5 flex flex-col mt-2">
                  {project?.keyFeatures.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid grid-rows-3 gap-10">
            <div className="lg:w-150 w-80 lg:h-70 h-40 shadow-lg shadow-black rounded-2xl relative">
              <Image src={project?.img1} alt={project?.name} fill />
           </div>
            <div className="lg:w-150 w-80 lg:h-70 h-40 shadow-lg shadow-black rounded-2xl relative">
              <Image src={project?.img2} alt={project?.name} fill />
           </div>
            
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default page;
