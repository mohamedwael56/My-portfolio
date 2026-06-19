'use client'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import ContactPopUps from './ContactPopUps'
function ContactMe() {
  const [contactType,setContactType]=useState(null)

  return (
<>

<ContactPopUps contactType={contactType} setContactType={setContactType} />

  <div id="contact" className="md:w-300 w-70  mb-5 flex flex-col items-center gap-10 mt-40">
<h1 className="text-3xl font-bold">Contact Me</h1>
<p className="text-gray-600 text-xl">Feel free to reach out to me for any project or collaboration opportunities.</p>
<div className="flex md:flex-row flex-col gap-5">
    <button onClick={()=>setContactType('EmailMe')} className="w-full hover:bg-black hover:text-white border-2 px-5 py-2 cursor-pointer text-nowrap rounded-3xl"> Email Me</button>
   <button onClick={()=>setContactType('CallMe')} className="w-full hover:bg-black hover:text-white border-2 px-5 py-2 cursor-pointer text-nowrap rounded-3xl"> Call me</button>
   <Link target='_blank' href='https://wa.me/201126992044' className="w-full hover:bg-black hover:text-white border-2 px-5 py-2 cursor-pointer text-nowrap rounded-3xl" > Whats app</Link>
</div>
  </div>
  </>
  )
}

export default ContactMe