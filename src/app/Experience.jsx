import React from 'react'

function Experience() {
  return (
<div id="experience" className="flex my-40    flex-col md:w-300 justify-center items-center gap-20 mt-20">
  <h1 className="text-4xl font-bold text-black mb-1 mt-10 capitalize">Experience</h1>

  <div className="grid grid-cols-1 hover:scale-110 transition-all duration-500 select-none ">
<div className=" border rounded-xl  p-4 flex flex-col items-start">
<p className="mb-3"> {"</>"} </p>
<h1 className="bg-gradient-to-r capitalize text-xl from-blue-600 to-purple-500 bg-clip-text text-transparent">fronend development</h1>
<p className="text-base capitalize text-black font-bold">1 year</p>
<p className="text-base capitalize ">frontend in Web Roots</p>
</div>
  </div>  
</div>  )
}

export default Experience