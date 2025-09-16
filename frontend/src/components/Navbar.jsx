import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets.js'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 '>
        <img onClick={()=> navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />
        <ul className='hidden md:flex items-start gap-5 font-medium text-lg'>
            <NavLink to='/'>
                <li className='py-1 text-gray-700 hover:text-black hover:font-semibold transition-all duration-500'>Home</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-full m-auto hidden'/> 
            </NavLink>
            <NavLink to='/doctors'>
                <li className='py-1 text-gray-700 hover:text-black hover:font-semibold transition-all duration-500'>All Doctors</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-full m-auto hidden'/> 
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1 text-gray-700 hover:text-black hover:font-semibold transition-all duration-500'>About</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-full m-auto hidden'/> 
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1 text-gray-700 hover:text-black hover:font-semibold transition-all duration-500'>Contact</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-full m-auto hidden'/> 
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token 
                ?<div className='flex items-center gap-2 cursor-pointer group relative'>
                    <img src={assets.profile_pic } className='w-8 rounded-full' alt="" />
                    <img src={assets.dropdown_icon} className='w-2.5 ' alt="" />
                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 '>
                            <p onClick={()=> navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                            <p onClick={()=> navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointment</p>
                            <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                        </div>
                    </div>
                </div> 
                :<button onClick={()=> navigate('/login ')} className='bg-primary text-white px-8 py-3 rounded-full font-semibold hidden cursor-pointer md:block'>Create account</button>
            }
            <img onClick={()=>setShowMenu(true)} src={assets.menu_icon} alt=""  className='w-6 md:hidden cursor-pointer'/>
            {/* --------------Mobile Menu--------------------- */}
            <div className={`fixed top-0 right-0 h-full w-full sm:w-full md:hidden z-20 bg-white/30 backdrop-blur-md shadow-lg transition-transform duration-300 ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
                 <div className='flex items-center justify-between px-5 py-6'>
                    <img src={assets.logo} alt="" className='w-36 cursor-pointer'/>
                    <img onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt=""  className=' w-7 cursor-pointer'/>
                 </div>
                 <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-xl font-semibold'>
                    <NavLink className='px-4 py-2 rounded inline-block' onClick={()=>setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
                    <NavLink className='px-4 py-2 rounded inline-block' onClick={()=>setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>All Doctors</p></NavLink>
                    <NavLink className='px-4 py-2 rounded inline-block' onClick={()=>setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>About</p></NavLink>
                    <NavLink className='px-4 py-2 rounded inline-block' onClick={()=>setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>Contact</p></NavLink>
                 </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar