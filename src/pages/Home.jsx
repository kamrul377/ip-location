import React, { useEffect, useState } from 'react'
import bg from '../../public/images/new.jpg'
import { TbCloudSearch } from "react-icons/tb";
import axios from 'axios';
import { FaLocationArrow } from "react-icons/fa";
import { MapContainer, TileLayer } from 'react-leaflet';
import Markerposition from '../components/MarkerPosition';
// import Markerposition from "./components/Markerposition"

const Home = () => {

  const [ipInfo, setIpInfo] = useState([])
  const [inputIp, setInputIp] = useState('')
  const [ipError, setIpError] = useState(null)



  const handleInput = (e) => {

    const ip = e.target.value;

    const pattern = /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})(\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})){3}$/

    const validIp = pattern.test(ip)

    console.log(validIp)


  }


  // console.log(inputIp)


  // useEffect(() => {
  //   const url = 'https://ipapi.co/8.8.8.8/json/'


  //   axios.get(url).then((data) => {
  //     setIpInfo(data.data)
  //   })


  // }, [])


  const handleChange = (e) => {
    e.preventDefault()
    console.log(e.target.value)
  }
  const handleSubmit = (e) => {

    e.preventDefault()
    alert("submit")
  }


  return (
    <div className='bg-banner2 h-[350px] w-screen py-10 bg-center '>


      <form action='' onSubmit={handleSubmit} className="form flex justify-center w-[90%] mx-auto md:w-full mt-10">

        <input type="text" onChange={handleChange} name="" placeholder='Search for any ip address or domain' id="" className='text-slate-700 px-3 py-3 w-[25rem] rounded shadow outline-none border border-pink-500 focus:border-pink-900' />

        <button type='submit' className='bg-pink-600 shadow hover:bg-pink-500 transition-colors text-white px-6 rounded'>
          <FaLocationArrow />
        </button>

      </form>

      <article className="p-8 mt-10">
        <div
          className="bg-white rounded-xl p-8 shadow max-w-6xl mx-auto grid grid-cols-1 gap-5 text-center md:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:text-left -mb-10 relative lg:-mb-32"
          style={{
            zIndex:1000,
          }}
        >
          <article className="lg:border-r lg:border-slate-400 p-6">
            <h2 className="text-sm uppercase text-slate-600">
              IP Address
            </h2>
            <p className="font-bold text-slate-900 text-2xl">
              address.ip
            </p>
          </article>

          <article className="lg:border-r lg:border-slate-400 p-6">
            <h2 className="text-sm uppercase text-slate-600">Location</h2>
            <p className="font-bold text-slate-900 text-2xl">
              address, address.
            </p>
          </article>

          <article className="lg:border-r lg:border-slate-400 p-6">
            <h2 className="text-sm uppercase text-slate-600">Timezone</h2>
            <p className="font-bold text-slate-900 text-2xl">
              UTC address.
            </p>
          </article>

          <article className="p-6">
            <h2 className="text-sm uppercase text-slate-600">ISP</h2>
            <p className="font-bold text-slate-900 text-2xl">
              address.isp
            </p>
          </article>
        </div>
      </article>


      {/* map */}

      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "80vh", width: "100vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Markerposition address={[51.505, -0.09]} />
      </MapContainer>







    </div>
  )
}

export default Home




// <>
// <div className='w-[95%] md:w-[80%] bg-gradient-to-tr from-blue-700 to-cyan-600 mx-auto md:px-10 md:py-10 py-2 rounded shadow-md'>

//   <h1 className='text-center text-4xl font-bold text-white'>IP Address Tracker</h1>

//   <form action="" className='flex  justify-center'>
//     <input className='text-xl px-3  py-1 rounded my-4 border-2 border-cyan-500 text-slate-800 outline-none w-[400px]' type="text" placeholder='Search for any ip address ' value={inputIp} onChange={handleInput} />

//     <div className='bg-black h-10 w-20 flex items-center justify-center my-auto rounded border-2 cursor-pointer hover:bg-[#333] transition-colors'>
//       <TbCloudSearch color='white ' size={25} className='flex items-center rounded' />
//     </div>

//   </form>


//   <div className="bg-white p-2 rounded shadow border w-full md:w-[490px] mx-auto">
//     <ul className=''>
//       <li className='even:bg-[#f7f7f7] odd:bg-slate-100 my-2 px-2 py-1 border rounded shadow-sm w-full flex justify-between text-[#222]'>
//         <div className='w-full basis-1/2'>IP Address</div>
//         <div className=' w-full basis-1/2'>8.8.8.8</div>
//       </li>
//       <li className='even:bg-[#f7f7f7] odd:bg-slate-100 my-2 px-2 py-1 border rounded shadow-sm w-full flex justify-between text-[#222]'>
//         <div className='w-full basis-1/2'>IP Address</div>
//         <div className=' w-full basis-1/2'>8.8.8.8</div>
//       </li>
//       {/* <li className='even:bg-[#f7f7f7] odd:bg-slate-100 my-2 px-2 py-1 border rounded shadow-sm'>City <span>Mountain View</span> </li>
// <li className='even:bg-[#f7f7f7] odd:bg-slate-100 my-2 px-2 py-1 border rounded shadow-sm'>ip address: </li>
// <li className='even:bg-[#f7f7f7] odd:bg-slate-100 my-2 px-2 py-1 border rounded shadow-sm'>ip address: </li> */}
//     </ul>
//   </div>



// </div>

// </>


