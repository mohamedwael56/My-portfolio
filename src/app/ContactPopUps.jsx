'use client'
import { useState } from 'react' 
import React from 'react'
import Link from 'next/link'
import { useRef } from "react";
import emailjs from "@emailjs/browser";
function ContactPopUps({setContactType,contactType}) {
 
 const form = useRef();
    const copyMyNumber=()=>{
  navigator.clipboard.writeText('+201126992044')
setContactType('')
    }
      const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_9odpqha",
    "template_jz8i8e6",
    form.current,
    "TXtTsHYX5x4wY74T1"
  );
    setContactType('')

};

  return (
<>
{
  contactType==='CallMe'&&(
    <>
   <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
   <div className="flex fixed inset-0 z-50 items-center justify-center ">
    <div className="bg-white p-5 flex flex-col gap-5 items-center rounded-2xl">
<h1 className='text-lg capitalize'>you can call me i will be more than happy!</h1>
<p>+201126992044</p>
<div className="flex gap-5">
   <Link href="tel:+201126992044" className="capitalize w-full hover:bg-black hover:text-white border-2 px-5 py-2 cursor-pointer text-nowrap rounded-3xl">Call Me</Link>
  <button onClick={copyMyNumber} className="w-full capitalize hover:bg-black hover:text-white border-2 px-5 py-2 cursor-pointer text-nowrap rounded-3xl">copy the number</button>
</div>
    </div>
   </div>
  </>)
}

{
contactType==='EmailMe'&&(
    <>
       <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
   <div className="flex fixed inset-0 z-50 items-center justify-center ">
    <div className="bg-white p-5 flex flex-col gap-5 items-center rounded-2xl">

    <form
      ref={form}
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-md mx-auto"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="border px-3 py-2 rounded-xl"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="border px-3 py-2 rounded-xl"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="border px-3 py-2 rounded-xl h-32"
      />

      <button
        type="submit"
        className="hover:bg-black hover:text-white border py-2 rounded-xl cursor-pointer"
      >
        Send Message
      </button>
    </form>

</div>

</div>
    </>
)
}
</>)
}

export default ContactPopUps