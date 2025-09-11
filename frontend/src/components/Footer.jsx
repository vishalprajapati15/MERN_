import React from 'react'
import { assets } from '../assets/assets_frontend/assets.js'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col  sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
            {/* --------Left Section----------- */}
            <div>
                <img src={assets.logo} alt="" className='mb-5 w-40'/>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rerum corporis ex, ab laborum nulla nostrum architecto accusamus dicta nihil quia harum ad eveniet atque dolores iusto vel sunt molestiae.</p>
            </div>

            {/* --------CEnter Section----------- */}
            <div>
                <p className='text-xl font-medium mb-5 '>Company</p>
                <ul className='flex flex-col gap-2 text-gray-600 '>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            {/* --------Right Section----------- */}
            <div>
                <p className='text-xl font-medium mb-5 '>Get in Touch</p>
                <ul className='flex flex-col gap-2 text-gray-600 '>
                    <li>+91 xxxxxxxxxx</li>
                    <li>test@gmail.com</li>
                </ul>
            </div>
            
        </div>
        {/* ----------Copyright Text------------ */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ Prescripto - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer