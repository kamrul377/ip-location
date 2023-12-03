import React from 'react'
import vpn from '/images/vpn.png'

const Project = () => {
  return (
    <div className='bg-indigo-200 min-h-screen w-full p-10'>


      <div className="project-1 bg-white border rounded border-indigo-400 p-4">
        <h3 className='text-left text-blue-500'>#Project: 1</h3>
        <h1 className='text-3xl font-bold text-center border-b-2'>VPN Configuration</h1>
        <p className='text-sm text-[#333] mt-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae beatae veritatis dolorum, animi officia porro neque nihil quisquam fugit, debitis velit blanditiis doloribus dignissimos repellendus at. Magnam soluta obcaecati, minima aut hic laborum excepturi odio quos, ratione enim asperiores eaque.</p>
      </div>
      <img className='w-[100%] mx-auto border my-4 border-indigo-400 rounded shadow' src={vpn} alt="" />

      <div className="config bg-white border rounded border-indigo-400 p-4">
        <p>step 1: Design a Diagram for configuration vpn.</p>
      </div>

    </div>
  )
}

export default Project