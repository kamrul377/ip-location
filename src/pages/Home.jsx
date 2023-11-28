import React from 'react'
import bg from '../../public/images/new.jpg'
import { TbCloudSearch } from "react-icons/tb";

const Home = () => {
  return (
    <div className='bg-banner1 h-[600px] w-screen py-10'>


      <div className='w-[80%] bg-gradient-to-tr from-blue-700 to-cyan-600 mx-auto px-10 py-10 rounded shadow-md'>

        <h1 className='text-center text-4xl font-bold text-white'>IP Address Tracker</h1>

        <form action="" className='flex  justify-center'>
          <input className='text-xl px-3  py-1 rounded my-4 border-2 border-cyan-500 text-slate-800 outline-none w-[400px]' type="text" placeholder='Search for any ip address ' />

          <div className='bg-black h-10 w-20 flex items-center justify-center my-auto rounded border-2 cursor-pointer hover:bg-[#333] transition-colors'>
          <TbCloudSearch  color='white ' size={25} className='flex items-center rounded' />
          </div>

        </form>
      </div>




    </div>
  )
}

export default Home