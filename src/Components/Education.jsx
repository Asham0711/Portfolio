// import React from 'react'
import { FaSchool } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { SlCalender } from 'react-icons/sl'

const Education = () => {
  return (
    <div name="Education" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <h1 className='text-4xl text-center font-bold mb-10 md:mb-2'>Education</h1>
        <div className='border-2 border-[#e77bfa] w-1/12 mx-auto mb-20'></div>
        <div className='space-y-5'>
            <ul className='border-2 border-[#e77bfa] rounded-xl px-2 py-8 md:px-16 md:py-10 md:m-20'>
                <li className='flex justify-between'>
                    <div>
                        <h1 className='md:text-xl'>B.Tech in Information Technology</h1>
                        <h1 className='font-bold md:text-xl flex justify-between items-center gap-3'>
                            <FaSchool className='text-[#e77bfa] hidden md:block'/>
                            <a href="https://tint.edu.in/" target='_blank'>Techno International New Town</a>
                        </h1>
                    </div>
                    <div>
                        <h1 className='md:text-xl flex justify-between items-center gap-3'>
                            <IoLocationSharp className='text-[#e77bfa] hidden md:block' /> Kolkata, India
                        </h1>
                        <p className='flex md:justify-center items-center gap-3'>
                            <SlCalender className='text-[#e77bfa] hidden md:block' /> 2021-2025
                        </p>
                    </div>
                </li>
                <br />
                <li className='flex justify-between'>
                    <div>
                        <h1 className='md:text-xl'>Higher Secondary Education</h1>
                        <h1 className='font-bold md:text-xl flex justify-between items-center gap-3'>
                            <FaSchool className='text-[#e77bfa] hidden md:block' />GR KC Mills High School
                        </h1>
                    </div>
                    <div>
                        <h1 className='md:text-xl flex justify-between items-center gap-3'>
                            <IoLocationSharp className='text-[#e77bfa] hidden md:block' /> Kolkata, India
                        </h1>
                        <p className='flex md:justify-center items-center gap-3'>
                            <SlCalender className='text-[#e77bfa] hidden md:block' /> 2018-2020
                        </p>
                    </div>
                </li>
                <br />
                <li className='flex justify-between'>
                    <div>
                        <h1 className='md:text-xl'>Secondary Education</h1>
                        <h1 className='font-bold md:text-xl flex justify-between items-center gap-3'>
                            <FaSchool className='text-[#e77bfa] hidden md:block' />St. Michaels Academy
                        </h1>
                    </div>
                    <div>
                        <h1 className='md:text-xl flex justify-between items-center gap-3'>
                            <IoLocationSharp className='text-[#e77bfa] hidden md:block' /> Kolkata, India
                        </h1>
                        <p className='flex md:justify-center items-center gap-3'>
                            <SlCalender className='text-[#e77bfa] hidden md:block' /> 2005-2018
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Education