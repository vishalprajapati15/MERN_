import React from 'react'
import { assets } from '../assets/assets_frontend/assets.js'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-3xl pt-10 text-gray-500 '>
        <p>Contact <span className='text-gray-700 font-semibold'>Us</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row justify-center gap-10 mb-28 text-sm'>
        <img src={assets.contact_image} alt=""  className='w-full md:max-w-[360px]'/>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-bold text-xl  text-gray-600'>Our Office</p>
          <p className='text-gray-500'>00000 Willms Station <br />Suite 000, Washington, USA</p>
          <p className='text-gray-500'>Tel: (000) 000-0000 <br />Email: greatstackdev@gmail.com</p>
          <p className='font-bold text-xl text-gray-600'>Careers at Prescripto</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-lg cursor-pointer hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact