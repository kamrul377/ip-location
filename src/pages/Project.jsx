import React from 'react'
import vpn from '/images/vpn.png'
import network from '/images/smallnet.png'


const code = `
GEC> </br>
GEC>en<br>
GEC>enable <br>
GEC#conf t<br>
GEC#conf terminal <br>
Enter configuration commands, one per line.  End with CNTL/Z.<br>
GEC(config)#int<br>
GEC(config)#interface f<br>
GEC(config)#interface fastEthernet 0/0<br>
GEC(config-if)#no sh<br>
GEC(config-if)#no shutdown <br>
`

const Project = () => {
  return (
    <div className='bg-indigo-200 min-h-screen w-full p-2 md:p-10'>


      <div className="project-1 bg-white border rounded border-indigo-400 p-4">
        <h3 className='text-left text-blue-500'>#Project: 1</h3>
        <h1 className='text-3xl font-bold text-center border-b-2'>Small Office Network Design</h1>
        <p className='text-sm text-[#333] mt-4'> 
          BB ISP is fast-growing company in Bangladesh 
        </p>
      </div>
      <img className='w-[100%] mx-auto border my-1 md:my-4 border-indigo-400 rounded shadow' src={network} alt="" />

      <div className="config bg-white border rounded border-indigo-400 p-4">
        <p>step 1: Design a Diagram for configuration vpn.</p>






      </div>

      


    </div>
  )
}

export default Project