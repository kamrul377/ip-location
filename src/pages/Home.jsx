import React, { useEffect, useState } from 'react'
import bg from '../../public/images/new.jpg'
import { TbCloudSearch } from "react-icons/tb";
import axios from 'axios';
import { FaLocationArrow } from "react-icons/fa";
import { MapContainer, TileLayer } from 'react-leaflet';
import Markerposition from '../components/MarkerPosition';
import Loader from '../components/Loader';
// import Markerposition from "./components/Markerposition"

const Home = () => {

  const [address, setAddress] = useState(null)
  const [ipAddress, setIpAddress] = useState("")
  const [loading, setLoading] = useState(false)
  const checkIpAddress =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi
  const checkDomain =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/


  console.log(loading)
  useEffect(() => {
    try {
      const getInitialData = async () => {
        const res = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_qdtbBAGFDXouMIM57IMUmaFNHkpF5&ipAddress=8.8.8.8`
        )
        const data = await res.json()
        setAddress(data)
      }

      getInitialData()
    } catch (error) {
      console.trace(error)
    }
  }, [])

  const getEnteredData = async () => {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_qdtbBAGFDXouMIM57IMUmaFNHkpF5&${checkIpAddress.test(ipAddress)
        ? `ipAddress=${ipAddress}`
        : checkDomain.test(ipAddress)
          ? `domain=${ipAddress}`
          : ""
      }`
      // https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=8.8.8.8&domain=google.com
    )
    const data = await res.json()
    setAddress(data)
    setLoading(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    getEnteredData()

    setIpAddress("")
  }


  return (
    <div className='bg-banner2 h-[550px] md:h-[350px] w-screen py-10 bg-center'>


      <form action='' onSubmit={handleSubmit} className="form flex justify-center w-[90%] mx-auto md:w-full mt-10">

        <input type="text" value={ipAddress} onChange={(e) => setIpAddress(e.target.value)} name="" placeholder='Search for any ip address or domain' id="" className='text-slate-700 px-3 py-3 w-[25rem] rounded shadow outline-none border border-pink-500 focus:border-pink-900' />

        <button type='submit' className='bg-pink-600 shadow hover:bg-pink-500 transition-colors text-white px-6 rounded'>
          <FaLocationArrow />
        </button>

      </form>

      {address && (<>
        <article className="p-8 mt-10">
          <div
            className="bg-white rounded-xl p-8 shadow max-w-6xl mx-auto grid grid-cols-1 gap-5 text-center md:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:text-left -mb-10 relative lg:-mb-32"
            style={{
              zIndex: 1000,
            }}
          >
            <article className="lg:border-r lg:border-slate-400 p-6">
              <h2 className="text-sm uppercase text-slate-600">
                IP Address
              </h2>
              <p className="font-bold text-slate-900 text-2xl">
                {address.ip}
              </p>
            </article>

            <article className="lg:border-r lg:border-slate-400 p-6">
              <h2 className="text-sm uppercase text-slate-600">Location</h2>
              <p className="font-bold text-slate-900 text-2xl">
                {address.location.city}, {'hi'}
              </p>
            </article>

            <article className="lg:border-r lg:border-slate-400 p-6">
              <h2 className="text-sm uppercase text-slate-600">Timezone</h2>
              <p className="font-bold text-slate-900 text-2xl">
                UTC {address.location.timezone}
              </p>
            </article>

            <article className="p-6">
              <h2 className="text-sm uppercase text-slate-600">ISP</h2>
              <p className="font-bold text-slate-900 text-2xl">
                {address.isp}
              </p>
            </article>
          </div>
        </article>




        <MapContainer
          center={[address.location.lat, address.location.lng]}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: "80vh", width: "100vw" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Markerposition address={address} />
        </MapContainer>

      </>
      )
      }


      {
        loading && <Loader />
      }






    </div >
  )
}

export default Home


