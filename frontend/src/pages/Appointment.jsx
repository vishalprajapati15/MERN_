import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlot, setDocSlot] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlot = async () => {
    setDocSlot([]);
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      let currDate = new Date(today);
      currDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currDate.getDate()) {
        currDate.setHours(currDate.getHours() > 10 ? currDate.getHours() + 1 : 10);
        currDate.setMinutes(currDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currDate.setHours(10);
        currDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currDate < endTime) {
        let formattedTime = currDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        timeSlots.push({
          dateTime: new Date(currDate),
          time: formattedTime,
        });
        currDate.setMinutes(currDate.getMinutes() + 30);
      }
      if (timeSlots.length > 0) {
        setDocSlot((prev) => [...prev, timeSlots]);
      }
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlot();
  }, [docInfo]);

  return (
    docInfo && (
      <div className="px-4 sm:px-6 lg:px-16 py-6"> 
        {/* 🔥 Added responsive page padding */}

        {/* ---------------- Doctor details ---------------- */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* 🔥 Mobile = stacked, Desktop = side by side */}

          {/* Doctor Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={docInfo.image}
              alt=""
              className="bg-primary w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Doctor Info */}
          <div className="flex-1 border border-gray-300 rounded-lg p-5 sm:p-8 bg-white shadow-sm">
            <p className="flex items-center gap-2 text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900">
              {docInfo.name}
              <img src={assets.verified_icon} alt="" className="w-4 sm:w-5" />
            </p>

            <div className="flex flex-wrap items-center text-sm sm:text-base lg:text-lg gap-2 mt-3 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>

            {/* About Section */}
            <div>
              <p className="flex items-center text-base sm:text-lg lg:text-xl font-semibold gap-1 text-gray-900 mt-4">
                About <img src={assets.info_icon} alt="" className="w-4 sm:w-5" />
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-500 max-w-[700px] mt-2">
                {docInfo.about}
              </p>
            </div>

            <p className="text-gray-500 text-sm sm:text-base lg:text-lg font-semibold mt-4">
              Appointment fee:{" "}
              <span className="text-gray-700">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* ---------------- Booking Slots ---------------- */}
        <div className="mt-8 font-medium text-gray-700">
          <p className="text-lg sm:text-xl">Booking slots</p>

          {/* Days Scroll */}
          <div className="flex gap-3 items-center w-full overflow-x-auto mt-4 pb-2 scrollbar-hide">
            {docSlot.length &&
              docSlot.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  key={index}
                  className={`text-center py-4 sm:py-6 min-w-14 sm:min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-primary text-white"
                      : "border border-gray-200 text-gray-600"
                  }`}
                >
                  <p className="text-xs sm:text-sm lg:text-base">
                    {item[0] && daysOfWeek[item[0].dateTime.getDay()]}
                  </p>
                  <p className="text-xs sm:text-sm lg:text-base">
                    {item[0] && item[0].dateTime.getDate()}
                  </p>
                </div>
              ))}
          </div>

          {/* Time Slots */}
          <div className="flex items-center gap-3 w-full overflow-x-auto mt-4 pb-2 scrollbar-hide">
            {docSlot.length &&
              docSlot[slotIndex].map((item, index) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  key={index}
                  className={`text-xs sm:text-sm lg:text-lg font-medium flex-shrink-0 px-4 sm:px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slotTime
                      ? "bg-primary text-white"
                      : "text-gray-500 border border-gray-300"
                  }`}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>

          {/* Book button */}
          <button className="bg-primary text-white text-sm sm:text-lg font-medium px-6 sm:px-12 lg:px-14 py-2 sm:py-3 rounded-full my-6 cursor-pointer">
            Book an appointment
          </button>
        </div>

        {/* ---------------- Related Doctors ---------------- */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointment;
