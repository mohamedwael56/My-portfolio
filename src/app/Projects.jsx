import Link from "next/link";
function Projects() {
  const projects = [
    {
      id: 1,
      img: "/first-project.png",
      name:"first project",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae aliquid eaque soluta exercitationem ratione corrupti explicabo, voluptas s",
      gitHub: "https://github.com/mohamedwael56/Team-track",
      Demo: "https://team-track-pi.vercel.app/",
    },
    {
      id: 2,
      img: "/Dashboard.png",
      name: "second project",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae aliquid eaque soluta exercitationem ratione corrupti explicabo, voluptas s",
      gitHub: "https://github.com/mohamedwael56/Dashboard-admin-panel",
      Demo: "https://dashboard-admin-panel-smoky.vercel.app/",
    },
    {
      id: 3,
      img: "/first-project.png",
      name: "third project",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae aliquid eaque soluta exercitationem ratione corrupti explicabo, voluptas s",
      gitHub: "https://github.com/mohamedwael56/E-commerce-project",
      Demo: "https://e-commerce-project-yui6.vercel.app/",
    },
  ];
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
          <div className="border-3 w-75 md:w-full transition-all duration-700 hover:bg-black hover:text-white border-gray-400 rounded-3xl justify-center items-center flex flex-col p-5 m-2">
            <img
              src={project.img}
              alt=""
              className="border-8 rounded-2xl w-60 md:w-120 object-cover"
            />
            <h1 className="my-5 text-back text-2xl font-bold capitalize">{project.name}</h1>
            <p>
             {project.description}
            </p>
            <div className="flex gap-5 my-3">
              <Link target="_blank" href={project.Demo} className="w-full border-2 hover:text-black items-center flex hover:bg-white px-3 cursor-pointer rounded-3xl">
                Live Demo
              </Link>
              <Link target="_blank" href={project.gitHub} className="w-full border-2 px-3 text-nowrap hover:text-black hover:bg-white py-1 cursor-pointer rounded-3xl">
                Github Repo
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
