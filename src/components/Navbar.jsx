import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

    const [active, setActive] = useState(0);
    const [open, setOpen] = useState(false)




    const navItems = [
        {
            name: "Home",
            link: '/'
        },
        {
            name: "About",
            link: '/about'
        },
        {
            name: "Contact",
            link: '/contact'
        },
        {
            name: "Project",
            link: '/project'
        },
        // {
        //     name: "Account",
        //     link: '/account'
        // }
    ]

    return (
        <div className='bg-[#000000d3] h-20 flex justify-between items-center px-10 z-[-90px]'>
            <Link to={'/'} className="logo font-bold text-4xl md:text-5xl text-white font-nova cursor-pointer">
                IP <span className='text-cyan-500 font-nova'>Location</span>
            </Link>

            <div className="hidden menu md:text-white md:flex md:gap-3">
                {
                    navItems && navItems.map((item, index) => (
                        <Link key={index} className={`${active === index ? "text-cyan-400" : null}`} onClick={() => setActive(index)} to={item.link}> {item.name}</Link>
                    ))
                }

            </div>

            <div className="md:hidden text-white cursor-pointer z-[1222]" onClick={() => setOpen(!open)}>
                {open ? <FaTimes size={25} /> : <FaBars size={25} />}
            </div>




            {
                open && <div className="w-[60%] min-h-screen  fixed bg-[#000000d3] top-0 right-0 bottom-0  flex justify-center items-center flex-col gap-6 text-4xl font-bold z-[1111] overflow-y-hidden text-white" id='screen'>
                    {
                        navItems && navItems.map((item, index) => (
                            <div key={index} onClick={(e) => setOpen(false)}>
                                <Link className={`${active === index ? "text-cyan-400" : null}`} onClick={() => setActive(index)} to={item.link}> {item.name}</Link>

                            </div>

                        ))
                    }

                </div>
            }


        </div>
    )
}

export default Navbar