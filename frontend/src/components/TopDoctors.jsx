import React, { useContext } from 'react'
// import {doctors} from '../assets/assets_frontend/assets.js'
import {useNavigate} from 'react-router-dom'
import { AppContext } from '../context/AppContext.jsx';

const TopDoctors = () => {

    const navigate = useNavigate();
    const {doctors} = useContext(AppContext)

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
        <p className='sm:w-1/3 text-center text-sm '>Simply browse through our extensive list of trusted doctors.</p>
        <div className='w-full grid grid-cols-auto my-grid gap-4 pt-5  gap-y-5 px-3 sm:px-0'>{/* slice for small data from a large dataset here 12 doctors from all doctors list     */}
            {doctors.slice(0,12).map((item, index)=>(
                <div onClick={()=>navigate(`/appointment/${item._id}`)} key={index} className=' border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                    <img src={item.image} alt="" className='bg-blue-50 '/>
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Availabe</p>
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name} </p>
                        <p className='text-gray-600 text-sm'>{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
        <button onClick={()=> {navigate('/doctors'); scrollTo(0,0)}} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 cursor-pointer'>more</button>
    </div>
  )
}

export default TopDoctors