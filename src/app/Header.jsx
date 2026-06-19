'use client'
import React, { useState } from 'react'
import Link from 'next/link'
function Header() {
  const [isOpen,setIsOpen]=useState(false)
  return (
    <>
    {
      isOpen&&(
        <>
        <div className="absolute md:hidden bg-zinc-800 rounded-2xl  border top-15 right-0 text-white  flex flex-col gap-3 p-5">
  <Link href="#about">About</Link>
  <Link href="#experience">experience</Link>
  <Link href="#projects">Projects</Link>
  <Link href="#contact">Contact</Link>
  <Link target='_blank' href="https://github.com/mohamedwael56?tab=repositories">Visit github</Link>

        </div>
        </>
      )
    }
    <header className="flex fixed justify-center p-1  ">
      <nav className=" bg-zinc-800 md:w-165 w-80 items-center rounded-3xl capitalize flex justify-between text-white p-4">
<ul className="flex">
  <li className="flex justify-start font-bold hover:scale-105  transition-all duration-100">
    <Link href="/">mohamed wael</Link>
  </li>
  </ul>
  <ul className="md:flex gap-3 hidden  transition-all hover:font-bold text-gray-300 justify-center">
  <li className='hover:text-white duration-300 hover:scale-110'><Link href="#about">About</Link></li>
  <li className='hover:text-white duration-300 hover:scale-110'><Link href="#experience">experience</Link></li>
  <li className='hover:text-white duration-300 hover:scale-110'><Link href="#projects">Projects</Link></li>
  <li className='hover:text-white duration-300 hover:scale-110'><Link href="#contact">Contact</Link></li>
</ul>
<ul className="bg-linear-to-r rounded-2xl from-sky-500 hidden md:block to-pink-500 p-2 hover:from-pink-600 hover:to-sky-600">

  <li>
    <Link target='_blank' href="https://github.com/mohamedwael56?tab=repositories">Visit github</Link>
  </li>
</ul>
<ul className='md:hidden relative cursor-pointer'>
<button onClick={()=>setIsOpen(!isOpen)} >
  ☰
</button>
</ul>

</nav>
    </header >     
  </>)
}

export default Header