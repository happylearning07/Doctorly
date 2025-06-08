import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 text-gray-500'>
          <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-12'>
          <img className='w-full md:max-w-[360px]'src={assets.about_image} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
            <p>Welcome to our doctor booking platform – your trusted companion in making healthcare accessible, reliable, and stress-free. Our mission is to bridge the gap between patients and trusted medical professionals by offering a seamless appointment scheduling experience. With just a few clicks, users can explore verified doctors across various specialities, view availability, and book appointments at their convenience.</p>
            <p>Our platform is built with the user in mind – intuitive, fast, and mobile-friendly. We ensure that all listed doctors are thoroughly vetted, providing patients with not only expertise but also peace of mind. Whether you're looking for a general physician, a specialist, or a surgeon, our comprehensive directory helps you make informed decisions based on real-time availability, qualifications, and patient feedback.</p>
            <b className='text-gray-800'>Our Vision</b>
            <p>At the heart of our service is a commitment to your health journey. We continually evolve by listening to our users, integrating smart features like digital records, appointment reminders, and real-time doctor availability. Our goal is simple – to empower individuals to take control of their healthcare with confidence and ease. Thank you for trusting us to be a part of your well-being.</p>
          </div>
        </div>

        <div className='text-sl my-4'>
          <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
        </div>

        <div className='flex flex-col md:flex-row mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>
              Effeciency:
            </b>
            <p>
              Streamlined Appointment Scheduling That Fits Into Your Busy Lifestyle
            </p>
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>
              Convenience:
            </b>
            <p>
              Access To A Network Of Trusted HealthCare Professionals In Your Area.
            </p>
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>
              Personalisation:
            </b>
            <p>
              Tailored Recommendations And Reminders To Help You Stay On Top Of Your Health.
            </p>
          </div>
          
        </div>
    </div>
  )
}

export default About