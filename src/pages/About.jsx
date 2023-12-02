import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import man from '../../public/images/man.jpg'
import team from '../../public/images/team.jpg'
import { FaGooglePlusG } from "react-icons/fa6";
import { FaXTwitter } from 'react-icons/fa6'
import { FaLinkedinIn } from 'react-icons/fa'
import { BiLogoInstagram } from 'react-icons/bi'
import { CgFacebook } from 'react-icons/cg'

const About = () => {

  return (
    <div>


      <div className="w-full bg-[#6c757e] md:py-7 md:px-7 p-2 text-center">
        <h1 className='text-3xl text-white capitalize'>who we are</h1>
        <p className='text-white text-md w-[80%] mx-auto mt-5'> "We are a dedicated group of students passionate about networking and eager to demystify the geographic puzzle behind IP addresses and domain names."</p>
      </div>

      <div className="about basis-1 bg-white p-4 md:p-12 sm:flex">
        <div className="man basis-2/5">
          <img className='w-full rounded shadow' src={team} alt="Man" />
        </div>
        <div className="content basis-3/5 bg-white border text-center p-7">
          <h1 className='capitalize text-2xl font-bold text-slate-700'>Our Mission:</h1>
          <p className='text-sm text-[#111] mt-4'>Chittagong Polytechnic Network is on a mission to provide a user-friendly and insightful tool for locating IP addresses and domain names. We understand the importance of accurate geographical information in today's interconnected world, and our project aims to bridge the gap between digital and physical spaces.</p>


          <div className="social-links flex justify-center mt-6 gap-3">
            <FaGooglePlusG  size={25} color='#222' className='shadow'/>
            <CgFacebook size={25} color='#222' className='shadow' />
            <BiLogoInstagram size={25} color='#222' className='shadow' />
            <FaLinkedinIn size={25} color='#222' className='shadow' />
            <FaXTwitter size={25} color='#222' className='shadow' />
          </div>

        </div>




      </div>



    </div>
  )
}

export default About
