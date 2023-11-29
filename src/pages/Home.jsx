import React from 'react'
import bg from '../../public/images/new.jpg'
import { TbCloudSearch } from "react-icons/tb";

const Home = () => {
  return (
    <div className='bg-banner1 h-[600px] w-screen py-10'>


      <div className='w-[95%] md:w-[80%] bg-gradient-to-tr from-blue-700 to-cyan-600 mx-auto md:px-10 md:py-10 py-2 rounded shadow-md'>

        <h1 className='text-center text-4xl font-bold text-white'>IP Address Tracker</h1>

        <form action="" className='flex  justify-center'>
          <input className='text-xl px-3  py-1 rounded my-4 border-2 border-cyan-500 text-slate-800 outline-none w-[400px]' type="text" placeholder='Search for any ip address ' />

          <div className='bg-black h-10 w-20 flex items-center justify-center my-auto rounded border-2 cursor-pointer hover:bg-[#333] transition-colors'>
            <TbCloudSearch color='white ' size={25} className='flex items-center rounded' />
          </div>

        </form>


        <div className="bg-white p-2 rounded shadow border w-full md:w-[490px] mx-auto">
          <ul className=''>
            <li className='even:bg-[#f7f7f7] odd:bg-slate-100 my-2 px-2 py-1 border rounded shadow-sm w-full flex justify-between text-[#222]'>
                <div className='w-full basis-1/2'>IP Address</div>
                <div className=' w-full basis-1/2'>8.8.8.8</div>
            </li>
            <li className='even:bg-[#f7f7f7] odd:bg-slate-100 my-2 px-2 py-1 border rounded shadow-sm w-full flex justify-between text-[#222]'>
                <div className='w-full basis-1/2'>IP Address</div>
                <div className=' w-full basis-1/2'>8.8.8.8</div>
            </li>
            {/* <li className='even:bg-[#f7f7f7] odd:bg-slate-100 my-2 px-2 py-1 border rounded shadow-sm'>City <span>Mountain View</span> </li>
          <li className='even:bg-[#f7f7f7] odd:bg-slate-100 my-2 px-2 py-1 border rounded shadow-sm'>ip address: </li>
          <li className='even:bg-[#f7f7f7] odd:bg-slate-100 my-2 px-2 py-1 border rounded shadow-sm'>ip address: </li> */}
          </ul>
        </div>



      </div>




    </div>
  )
}

export default Home