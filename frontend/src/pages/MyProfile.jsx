import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets.js';

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: 'User Name',
    image: assets.profile_pic,
    email: 'test@gmail.com',
    phone: '+91 xxxxxxxxxx',
    address: {
      line1: 'user address line 1',
      line2: 'User address line 2'
    },
    gender: 'Male',
    dob: '2000-01-20 '
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className='max-w-lg flex flex-col gap-2 text-lg'>
      <img src={userData.image} alt=""  className='w-36 rounded'/>

      {
        isEdit
          ? <input className='bg-gray-60 text-4xl font-semibold max-w-60 mt-4' type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} placeholder='Enter your name' />
          : <p className='font-semibold text-4xl text-neutral-800 mt-4'>{userData.name}</p>
      }
      <hr className='bg-zinc-400 h-[1px] border-none'/>

      <div>
        <p className='text-neutral-500 text-2xl underline mt-3'>Contact Information</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className=' font-semibold'>Email Id :</p>
          <p className='text-blue-500 '>{userData.email}</p>
          <p className='font-semibold'>Phone :</p>
          {
            isEdit
              ? <input className='bg-gray-100 max-w-52  ' type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} placeholder='Enter your phone no' />
              : <p className='text-blue-500'>{userData.phone}</p>
          }
          <p className='font-semibold'>Address :</p>
          {
            isEdit
              ? <p>
                <input className='bg-gray-50' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} type="text" />
                <br />
                <input className='bg-gray-50' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} type="text" />
              </p>
              : <p className='text-gray-500'>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
          }
        </div>
      </div>

      <div>
        <p className='text-neutral-500 text-2xl underline mt-3'>Basic Information</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-semibold'> Gender :</p>
          {
            isEdit
              ? <select className='max-w-20  bg-gray-100' onChange={(e) => setUserData(prev => ({...prev, gender:e.target.value}))} value={userData.gender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              : <p className='text-gray-400'>{userData.gender}</p>
          }

          <p className='font-semibold'>Birthday :</p>

          {
             isEdit
             ?<input className='max-w-20 bg-gray-100 ' type="date"  onChange={(e) => setUserData(prev => ({...prev, dob :e.target.value}))} value={userData.dob} />
             : <p className='text-gray-400 '>{userData.dob}</p>
          }

        </div>
      </div>

      <div className='mt-10'>
        {
          isEdit
          ?<button  className='border border-[#5f6FFF] px-8 py-2 rounded-full  cursor-pointer hover:bg-[#5f6FFF] hover:text-white transition-all duration-300' onClick={()=> setIsEdit(false)}>Save Information</button>
          : <button className='border border-[#5f6FFF] px-8 py-2 rounded-full  cursor-pointer hover:bg-[#5f6FFF] hover:text-white transition-all duration-300' onClick={()=> setIsEdit(true)}>Edit </button>
        }
      </div>

    </div>
  )
}

export default MyProfile