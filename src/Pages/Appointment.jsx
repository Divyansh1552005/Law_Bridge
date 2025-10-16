import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
// import RelatedLawyers from '../Components/RelatedLawyers'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Scale, CheckCircle, Clock, Award, MapPin, Briefcase } from 'lucide-react'
import lawyers from '../Constants/Lawyer'

const Appointment = () => {

    const { lawyerId } = useParams()
    const { currencySymbol = "₹", token } = useContext(AppContext)
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    const [lawyerInfo, setLawyerInfo] = useState(false)
    const [lawyerSlots, setLawyerSlots] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState('')

    const navigate = useNavigate()

    const fetchLawyerInfo = async () => {
        // Check if lawyers array exists and convert lawyerId to number for comparison
        if (!lawyers || !Array.isArray(lawyers)) {
            console.error('Lawyers data not available')
            return
        }
        
        const lawyerInfo = lawyers.find((lawyer) => lawyer.id === parseInt(lawyerId))
        setLawyerInfo(lawyerInfo)
    }

    const getAvailableSlots = async () => {

        setLawyerSlots([])

        // getting current date
        let today = new Date()

        for (let i = 0; i < 7; i++) {

            // getting date with index 
            let currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i)

            // setting end time of the date with index
            let endTime = new Date()
            endTime.setDate(today.getDate() + i)
            endTime.setHours(18, 0, 0, 0) // Lawyers typically work till 6 PM

            // setting hours 
            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 9 ? currentDate.getHours() + 1 : 9)
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
            } else {
                currentDate.setHours(9) // Start at 9 AM
                currentDate.setMinutes(0)
            }

            let timeSlots = [];

            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                let day = currentDate.getDate()
                let month = currentDate.getMonth() + 1
                let year = currentDate.getFullYear()

                const slotDate = day + "_" + month + "_" + year
                const slotTime = formattedTime

                const isSlotAvailable = lawyerInfo.slots_booked[slotDate] && lawyerInfo.slots_booked[slotDate].includes(slotTime) ? false : true

                if (isSlotAvailable) {

                    // Add slot to array
                    timeSlots.push({
                        datetime: new Date(currentDate),
                        time: formattedTime
                    })
                }

                // Increment current time by 60 minutes (1 hour consultations)
                currentDate.setMinutes(currentDate.getMinutes() + 60);
            }

            setLawyerSlots(prev => ([...prev, timeSlots]))

        }

    }

    const bookAppointment = async () => {

        if (!token) {
            toast.warning('Login to book consultation')
            return navigate('/login')
        }

        if (!slotTime) {
            toast.warning('Please select a consultation time')
            return
        }

        // Check if lawyerSlots and the selected slot exist
        if (!lawyerSlots || !lawyerSlots[slotIndex] || !lawyerSlots[slotIndex][0]) {
            toast.error('Please select a valid time slot')
            return
        }

        const date = lawyerSlots[slotIndex][0].datetime

        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()

        const slotDate = day + "_" + month + "_" + year

        try {
            // TODO: Replace with actual API call when backend is ready
            // const { data } = await axios.post(backendUrl + '/api/user/book-appointment', { lawyerId, slotDate, slotTime }, { headers: { token } })
            
            // Simulate successful booking for now
            toast.success(`Appointment booked successfully for ${slotDate} at ${slotTime}`)
            
            // TODO: Uncomment when my-appointments page is ready
            // navigate('/my-appointments')
            
            // Reset form
            setSlotTime('')
            setSlotIndex(0)

        } catch (error) {
            console.log(error)
            toast.error('Failed to book appointment. Please try again.')
        }

    }

    useEffect(() => {
        if (lawyers.length > 0) {
            fetchLawyerInfo()
        }
    }, [lawyers, lawyerId])

    useEffect(() => {
        if (lawyerInfo) {
            getAvailableSlots()
        }
    }, [lawyerInfo])

    return lawyerInfo ? (
        <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-8 px-4'>

            {/* ---------- Lawyer Details ----------- */}
            <div className='max-w-6xl mx-auto'>
                <div className='flex flex-col lg:flex-row gap-6'>
                    
                    {/* Lawyer Image Card */}
                    <div className='lg:w-80 flex-shrink-0'>
                        <div className='bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-1 shadow-xl'>
                            <img 
                                className='w-full h-96 object-cover rounded-2xl' 
                                src={lawyerInfo.image} 
                                alt={lawyerInfo.name} 
                            />
                        </div>
                    </div>

                    {/* Lawyer Info Card */}
                    <div className='flex-1 bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden'>
                        <div className='bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6'>
                            <div className='flex items-start justify-between'>
                                <div>
                                    <div className='flex items-center gap-3'>
                                        <h1 className='text-3xl font-bold text-white'>{lawyerInfo.name}</h1>
                                        <CheckCircle className='w-7 h-7 text-green-400' />
                                    </div>
                                    <div className='flex items-center gap-2 mt-2'>
                                        <Scale className='w-5 h-5 text-blue-200' />
                                        <p className='text-blue-100 text-lg'>{lawyerInfo.speciality}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='px-8 py-6 space-y-6'>
                            {/* Credentials */}
                            <div className='flex flex-wrap gap-4'>
                                <div className='flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg'>
                                    <Award className='w-5 h-5 text-blue-600' />
                                    <span className='text-sm font-medium text-gray-700'>{lawyerInfo.degree}</span>
                                </div>
                                <div className='flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg'>
                                    <Briefcase className='w-5 h-5 text-blue-600' />
                                    <span className='text-sm font-medium text-gray-700'>{lawyerInfo.experience}</span>
                                </div>
                            </div>

                            {/* About Section */}
                            <div className='border-t border-blue-100 pt-6'>
                                <div className='flex items-center gap-2 mb-3'>
                                    <h2 className='text-xl font-semibold text-gray-800'>About</h2>
                                    <Scale className='w-5 h-5 text-blue-600' />
                                </div>
                                <p className='text-gray-600 leading-relaxed'>{lawyerInfo.about}</p>
                            </div>

                            {/* Consultation Fee */}
                            <div className='bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-3'>
                                        <Clock className='w-6 h-6 text-blue-600' />
                                        <span className='text-gray-700 font-medium text-lg'>Consultation Fee</span>
                                    </div>
                                    <span className='text-3xl font-bold text-blue-700'>
                                        {currencySymbol}{lawyerInfo.fees}
                                    </span>
                                </div>
                                <p className='text-sm text-gray-600 mt-2'>Per hour consultation</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Booking Slots Section */}
                <div className='mt-12 bg-white rounded-2xl shadow-xl border border-blue-100 p-8'>
                    <div className='flex items-center gap-3 mb-6'>
                        <Clock className='w-7 h-7 text-blue-600' />
                        <h2 className='text-2xl font-bold text-gray-800'>Available Consultation Slots</h2>
                    </div>

                    {/* Date Selection */}
                    <div className='mb-8'>
                        <p className='text-sm font-medium text-gray-600 mb-4'>Select Date</p>
                        <div className='flex gap-3 overflow-x-auto pb-2'>
                            {lawyerSlots.length > 0 && lawyerSlots.map((item, index) => (
                                <div 
                                    onClick={() => { setSlotIndex(index); setSlotTime('') }} 
                                    key={index} 
                                    className={`text-center py-4 px-5 min-w-20 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                                        slotIndex === index 
                                            ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg' 
                                            : 'bg-blue-50 border-2 border-blue-200 text-gray-700 hover:border-blue-400'
                                    }`}
                                >
                                    <p className='text-xs font-semibold mb-1'>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                                    <p className='text-2xl font-bold'>{item[0] && item[0].datetime.getDate()}</p>
                                    <p className='text-xs mt-1 opacity-80'>
                                        {item[0] && item[0].datetime.toLocaleString('default', { month: 'short' })}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Time Slot Selection */}
                    <div>
                        <p className='text-sm font-medium text-gray-600 mb-4'>Select Time</p>
                        <div className='flex flex-wrap gap-3'>
                            {lawyerSlots.length > 0 && lawyerSlots[slotIndex]?.length > 0 ? (
                                lawyerSlots[slotIndex].map((item, index) => (
                                    <button 
                                        onClick={() => setSlotTime(item.time)} 
                                        key={index} 
                                        className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                                            item.time === slotTime 
                                                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg' 
                                                : 'bg-blue-50 text-gray-700 border-2 border-blue-200 hover:border-blue-400'
                                        }`}
                                    >
                                        {item.time.toLowerCase()}
                                    </button>
                                ))
                            ) : (
                                <p className='text-gray-500 italic'>No slots available for this date</p>
                            )}
                        </div>
                    </div>

                    {/* Book Button */}
                    <button 
                        onClick={bookAppointment} 
                        className='mt-8 w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-12 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3'
                    >
                        <CheckCircle className='w-5 h-5' />
                        Book Consultation
                    </button>
                </div>

                {/* Related Lawyers */}
                {/* <div className='mt-12'>
                    <RelatedLawyers speciality={lawyerInfo.speciality} lawyerId={lawyerId} />
                </div> */}
            </div>
        </div>
    ) : null
}

export default Appointment