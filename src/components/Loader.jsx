import React from 'react'

import loader from '../../public/images/loader.svg'
import loader1 from '../../public/images/loader1.svg'

const Loader = () => {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-[#000000b2] z-[2000] flex justify-center items-center'>
        
        <img src={loader1} alt="" />

        
    </div>
  )
}

export default Loader