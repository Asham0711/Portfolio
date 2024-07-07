import React from 'react';
import pic from '../assets/photo.avif';
import { FaInstagram, FaLinkedin, FaNodeJs, FaReact, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { ReactTyped } from 'react-typed';


const Home = () => {
  return (
    <>
      <div name='Home' className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className='flex flex-col md:flex-row'>
          {/* Left Side  */}
          <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
            <span className='text-xl font-bold'>Welcome in my feed</span>
            <div className='flex text-2xl space-x-2 md:text-4xl'>
              <h1>Hello I am a</h1>
              <ReactTyped
                className="text-green-500 font-bold"
                strings={["Programmer", "Developer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className='text-lg text-justify'>
              Hello, I am Asham, a passionate Web developer with a keen eye for MERN
              Stack . With a background in IT, I strive to create impactful and
              visually stunning Software solutions that leave a lasting impression.
            </p>
            <br />
            {/* Social Media  */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className='space-y-2'>
                <h1 className="font-bold text-center md:text-left">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                      <a href="https://www.linkedin.com/in/md-asham-imad-926316224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                        <FaLinkedin className="text-2xl cursor-pointer hover:scale-110 duration-200" />
                      </a>
                  </li>
                  <li>
                    <a href="https://github.com/Asham0711" target="_blank">
                      <FaGithub className="text-2xl cursor-pointer hover:scale-110 duration-200"/>
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/ash7__" target="_blank">
                      <FaTwitter className="text-2xl cursor-pointer hover:scale-110 duration-200"/>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/__ash._______?utm_source=qr&igsh=bm81ejQwbHR2cXdv" target="_blank">
                      <FaInstagram className="text-2xl cursor-pointer hover:scale-110 duration-200"/>
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                  <h1 className="font-bold text-center">Currently working on</h1>
                  <div className="flex space-x-5">
                    <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                    <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                    <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                    <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  </div>
              </div>
            </div>
          </div>
          {/* Right Side  */}
          <div className="md:w-1/2 flex justify-center md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[350px] md:h-[350px] hover:scale-125 transition-all duration-1000 cursor-pointer"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Home