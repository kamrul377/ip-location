import React from 'react'

const Contact = () => {
  return (
    <div className='h-screen w-screen bg-gradient-to-br from-transparent to-cyan-300'>
      <h1>Contact with us</h1>


      <form action="" className='bg-white w-[90%] sm:w-[500px] mx-auto rounded shadow p-10'>
        <div className="name flex flex-col">
          <label htmlFor="name">Name: </label>
          <input className='border rounded-sm border-indigo-500 px-2 py-1 text-[#333] outline-none' placeholder="" type="text" name="" id="" />
        </div>
        <div className="name flex flex-col">
          <label htmlFor="name">Email: </label>
          <input className='border rounded-sm border-indigo-500 px-2 py-1 text-[#333] outline-none' placeholder="" type="email" name="" id="" />
        </div>
      </form>

    </div>
  )
}

export default Contact