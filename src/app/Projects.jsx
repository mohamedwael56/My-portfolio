import Link from "next/link";
import Image from "next/image";
import projects from "@/lib/projects";
function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center mt-15"
    >
      <h1 className="text-3xl font-bold mb-10">Recent Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
       {projects.map((project)=>{
return(
  
  <div key={project.id} className="flex   flex-col items-center">
          <div className="border-3 w-75 h-full md:w-full transition-all duration-700 hover:bg-black hover:text-white border-gray-400 rounded-3xl justify-center items-center flex flex-col p-5 m-2">
           <div className="relative border-8 rounded-2xl w-65 h-40 md:w-100 md:h-50 object-cover">
            <Image
              src={project.img}
              alt="project image"
             fill
            />
            </div>
            <h1 className="my-5 text-back text-2xl font-bold capitalize">{project.name}</h1>
            <p>
             {project.description}
            </p>
            <div className="flex gap-2 lg:gap-4 my-3">
              <Link target="_blank" href={project.Demo} className="w-full border-2 text-sm lg:text-base text-nowrap text-center hover:text-black items-center flex hover:bg-white px-3 cursor-pointer rounded-3xl">
                Live Demo
              </Link>
              <Link target="_blank" href={project.gitHub} className="w-full border-2 text-sm lg:text-base px-3 text-center text-nowrap hover:text-black hover:bg-white py-1 cursor-pointer rounded-3xl">
                Github Repo
              </Link>
              <Link href={project.id} className="w-full border-2 text-sm lg:text-base px-3 text-nowrap text-center hover:text-black hover:bg-white py-1 cursor-pointer rounded-3xl">
                more
              </Link>
            </div>
          </div>
        </div>
  
)
       })}
        
       
      </div>
    </div>
  );
}

export default Projects;
