import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function About() {
  return (
  <div id="about" className="md:w-300 flex-col md:flex-row  flex justify-center items-center gap-20 mt-40">
<div className="rounded-full w-70 h-70 relative">
  <Image src="/my-pic2.jpg" alt="mohamed-wael" fill className=" object-cover rounded-full" />
</div>
<div className=" flex flex-col items-center  ">

<p className="text-gray-600 text-xl select-none">Hi,{"I'm"}</p>
<h1 className="text-nowrap text-3xl font-bold select-none">Mohamed Wael</h1>
<p className="bg-gradient-to-r from-blue-500 select-none to-purple-500 bg-clip-text text-transparent text-xl ">frontend developer</p>
<div className="flex gap-3 mt-2">
  <a href="./mohamedwael.pdf" download="Mohamed-Wael-CV">  <button className="w-full hover:bg-black hover:text-white text-nowrap cursor-pointer border px-3 rounded-xl">download CV</button>
</a>
<Link href="#contact">
  <button className="w-full hover:bg-black hover:text-white cursor-pointer border px-3 rounded-xl">contact me</button>
</Link>
</div>
<div className="flex gap-3 mt-2">
  <Link target='_blank' href="https://github.com/mohamedwael56?tab=repositories" className="w-8 h-8 relative cursor-pointer"><Image src="/github.png" alt="" fill /></Link>
  <Link target='_blank' href="https://www.linkedin.com/in/mohamed-wael566/"
  className="w-8 h-8 relative cursor-pointer">
    <Image src="/linkedin.png" alt="" fill />
  </Link>
</div>
</div>
  </div>
  )
}

export default About