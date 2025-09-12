import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets_frontend/assets'
import RelatedDoctors from '../components/RelatedDoctors'

const Appointment = () => {

  const { docId } = useParams()

  const { doctors, currencySymbol } = useContext(AppContext)

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const [docInfo, setDocInfo] = useState(null)

  const [docSlot, setDocSlot] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)

    setDocInfo(docInfo)
  }

  const getAvailableSlot = async () => {
    setDocSlot([]);
    //getting current date
    let today = new Date()
    for (let i = 0; i < 7; i++) {
      // getting date with index 
      let currDate = new Date(today);
      currDate.setDate(today.getDate() + i)
      // end time of the date with index

      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)

      //setting hours
      if (today.getDate() === currDate.getDate()) {
        currDate.setHours(currDate.getHours() > 10 ? currDate.getHours() + 1 : 10)
        currDate.setMinutes(currDate.getMinutes() > 30 ? 30 : 0)
      }
      else {
        currDate.setHours(10)
        currDate.setMinutes(0)
      }

      let timeSlots = [];

      while (currDate < endTime) {
        let formattedTime = currDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

        // add slots to array 
        timeSlots.push({
          dateTime: new Date(currDate),
          time: formattedTime
        })

        //Incerment current time by 30 minutes
        currDate.setMinutes(currDate.getMinutes() + 30)

      }
      setDocSlot(prev => ([...prev, timeSlots]))

    }
  }


  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlot()
  }, [docInfo])

  useEffect(() => {
    // console.log(docSlot)
  }, [docSlot])

  return docInfo && (
    <div>
      {/* --------------Doctors details---------------------- */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img src={docInfo.image} alt="" className='bg-primary w-full sm:mx-w-72 rounded-lg ' />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-800px] sm:mt-0'>
          {/* -------------------Doc Info------------------- */}
          <p className='flex items-center gap-2 text-4xl font-semibold text-gray-900'>
            {docInfo.name}
            <img src={assets.verified_icon} alt="" className='w-5' />
          </p>
          <div className='flex items-center text-lg gap-2 mt-4 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>
          {/* -------------------Doctors about---------------------- */}
          <div>
            <p className='flex items-center text-xl font-semibold gap-1 text-gray-900 mt-6'>About <img src={assets.info_icon} alt="" /></p>
            <p className='text-lg text-gray-500 max-w-[700px] mt-2'>{docInfo.about}</p>
          </div>
          <p className='text-gray-500 text-lg font-semibold mt-6'>Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span></p>
        </div>

      </div>
      {/* ---------------Booking Slots----------------------- */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            docSlot.length && docSlot.map((item, index) => (
              <div onClick={() => setSlotIndex(index)} key={index} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200 '}`}>
                <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                <p>{item[0] && item[0].dateTime.getDate()}</p>
              </div>
            ))
          }
        </div>

        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {docSlot.length && docSlot[slotIndex].map((item, index) => (
            <p onClick={() => setSlotTime(item.time)} key={index} className={` text-lg font-medium flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`}>{item.time.toLowerCase()}</p>
          ))}
        </div>
        <button className='bg-primary text-white text-lg font-medium px-14 py-3 rounded-full my-6 cursor-pointer'>Book an appointment</button>
      </div>
      {/* -----------Listing Related Doctors------------------ */}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  )
}

export default Appointment