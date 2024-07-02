import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


 const About = () => {
  return (
    <div className=''>
        <div className='pt-40 text-center font-serif'>
            <div>
                <h1 className='text-3xl md:text-4xl text-gray-700 dark:text-gray-100 pb-1'>
                    Hi! I am <span className='text-teal-700 dark:text-teal-300'> Renz Aljon Cruz </span>
                </h1>
                <p className='text-2xl text-gray-400 dark:text-gray-200 pb-1'>A Web Developer.</p>
            </div>

            <ol className='inline-flex gap-5 text-2xl text-gray-700'>
                <li ><a href=''><FaFacebook /></a></li>
                <li ><a href=''><FaInstagramSquare /></a></li>
                <li ><a href=''><FaLinkedin /></a></li>  
                <li ><a href=''><FaGithub /></a></li> 
            </ol>
        </div>
    </div>

  )
}
export default About