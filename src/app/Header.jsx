import React from 'react'
import Link from 'next/link'
function Header() {
  return (
    <header className="flex justify-center p-1  ">
      <nav className=" bg-zinc-800 w-150 items-center rounded-3xl capitalize flex justify-between text-white p-4">
<ul className="flex">
  <li className="flex justify-start font-bold hover:scale-105  transition-all duration-100">
    <Link href="/">mohamed wael</Link>
  </li>
  </ul>
  <ul className="flex gap-3 transition-all hover:font-bold text-gray-300 justify-center">
  <li className='hover:text-white duration-300 hover:scale-110'><Link href="/about">About</Link></li>
  <li className='hover:text-white duration-300 hover:scale-110'><Link href="/experience">experience</Link></li>
  <li className='hover:text-white duration-300 hover:scale-110'><Link href="/projects">Projects</Link></li>
  <li className='hover:text-white duration-300 hover:scale-110'><Link href="/contact">Contact</Link></li>
</ul>
<ul className="bg-linear-to-r rounded-2xl from-sky-500 to-pink-500 p-2 hover:from-pink-600 hover:to-sky-600">
  <li>
    <Link href="/resume">Visit github</Link>
  </li>
</ul>

</nav>
    </header >     
  )
}

export default Header