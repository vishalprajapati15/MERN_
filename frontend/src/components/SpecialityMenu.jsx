import React from 'react'
import { assets, specialityData } from '../assets/assets_frontend/assets'
import { Link, } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-gray-800'>
        <h1 className='text-3xl font-medium'>Find by Speciality</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free</p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
             {specialityData.map((item, index)=> (
                <Link onClick={()=> scrollTo(0,0)} key={index} to={`/doctors/${item.speciality}`} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] hover:font-semibold transition-all duration-500'>
                    <img src={item.image} alt="" className='w-28 sm:-24 mb-2'/>
                    <p className=''>{ item.speciality}</p>
                </Link>
             ))}
        </div>
    </div>
  )
}

export default SpecialityMenu