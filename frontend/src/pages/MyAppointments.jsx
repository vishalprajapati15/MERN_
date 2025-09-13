import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'

const MyAppointments = () => {

  const {doctors} = useContext(AppContext)

  return (
    <div>
      <p className='pb-3 mt-2 font-semibold text-2xl text-zinc-700 border-b'>My Appointments</p>
      <div>
          {doctors.slice(0,3).map((item, index)=>(
            <div key={index} className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b-[1px] border-zinc-300'>
              <div>
                <img src={item.image} alt="" className='w-44 bg-indigo-50 '/>
              </div>
              <div className='flex-1 text-lg text-zinc-600'>
                <p className='text-neutral-800 font-bold text-xl'>{item.name }</p>
                <p>{item.speciality }</p>
                <p className='text-zinc-700 font-semibold mt-1'>Address :</p>
                <p className='text-sm '>{item.address.line1}</p>
                <p className='text-sm '>{item.address.line1}</p>
                <p className='text-sm mt-1'><span className='font-semibold text-lg text-neutral-700'>Date & Time:</span> 25, July, 2025 | 8:30 PM</p>
              </div>
              <div></div>
              <div className='flex flex-col gap-2 justify-end'>
                <button className='text-lg text-stone-500 text-center sm:min-w-48 py-2 border rounded cursor-pointer hover:bg-[#5f6FFF] hover:text-white transition-all duration-500'>Pay Online</button>
                <button className='text-lg text-stone-500 text-center sm:min-w-48 py-2 border rounded cursor-pointer hover:bg-red-600 hover:text-white transition-all duration-500'>Cancel appointment</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default MyAppointments