import React from 'react'
import {assets} from '../assets/assets'
import doctorlyLogo from '../assets/doctorly_logo.jpeg';

const Footer = () => {
  return (
    <div className='md:mx-10'>

        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*------Left Section------- */}
            <div>
                <img className='mb-5 w-40'src={doctorlyLogo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Our Doctor Appointment Booking App is a modern, user-friendly platform designed to simplify the process of finding and scheduling appointments with trusted medical professionals. Users can seamlessly browse through a curated list of top-rated doctors across various specializations, view their availability, and book appointments in just a few clicks.</p>
            </div>
            {/*------Center Section------- */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            {/*------Right Section------- */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+0-00-000-00000</li>
                    <li>doctorly@gmail.com</li>
                </ul>
            </div>
        </div>
        {/*---------Copywrite text----------- */}
        <div>
            <hr/>
                <p className='py-5 text-sm text-center'>Copyright @2027 Doctorly- All Rights Reserved</p>
        </div>
        
    </div>
  )
}

export default Footer