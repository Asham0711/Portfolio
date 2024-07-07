import React, { useState } from 'react'
import { DiMongodb } from 'react-icons/di'
import { FaChevronDown, FaChevronUp, FaDatabase, FaGithub, FaOsi } from 'react-icons/fa'
import { FaCuttlefish, FaJava, FaNodeJs, FaPython, FaReact } from 'react-icons/fa6'
import { IoGitBranch } from 'react-icons/io5'
import { MdDataObject, MdNetworkCheck } from 'react-icons/md'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiExpress, SiJavascript, SiRender, SiVisualstudiocode } from 'react-icons/si'
import { TbBrandCpp } from 'react-icons/tb'

const Skills = () => {
 const [lang, setLang] = useState(true);
 const [frame, setFrame] = useState(true);
 const [tool, setTool] = useState(true);
 const [fund, setFund] = useState(true);
  return (
    <div name="Skills" className='max-w-screen-2xl container mx-auto px-6 md:px-20 my-20'>
        <h1 className='text-4xl text-center font-bold mb-2'>Skills</h1>
        <div className='border-2 border-green-500 w-1/12 mx-auto mb-20'></div>
        <div className='grid grid-cols-1 gap-20 md:grid-cols-2'>
            {/* Languages  */}
            <div>
                <h1 className='text-2xl font-bold flex justify-between items-center'>
                    Languages 
                    <div onClick={() => setLang(!lang)}>
                        {lang ? <FaChevronUp className='text-green-500'/> :<FaChevronDown className='text-green-500' />}
                    </div>
                </h1>
                {lang &&(
                    <ul className='pt-10'>
                        <li>
                            <div className='flex justify-between px-4 font-bold'>
                                <FaCuttlefish className='text-green-500 text-2xl font-extrabold' />
                                C
                            </div>
                            <br />
                            <div className='border-2 rounded-sm border-green-500 border-solid w-full'></div>
                        </li>
                        <br />
                        <li>
                            <div className='flex justify-between px-4 font-bold'>
                                <TbBrandCpp className='text-green-500 text-3xl font-extrabold' />
                                C++
                            </div>
                            <br />
                            <div className='border-2 rounded-sm border-green-500 border-solid w-full'></div>
                        </li>
                        <br />
                        <li>
                            <div className='flex justify-between px-4 font-bold'>
                                <FaJava className='text-green-500 text-3xl font-extrabold' />
                                Java
                            </div>
                            <br />
                            <div className='border-2 rounded-sm border-green-500 border-solid w-full'></div>
                        </li>
                        <br />
                        <li>
                            <div className='flex justify-between px-4 font-bold'>
                                <SiJavascript className='text-green-500 text-3xl font-extrabold rounded-md' />
                                JavaScript
                            </div>
                            <br />
                            <div className='border-2 rounded-sm border-green-500 border-solid w-full'></div>
                        </li>
                        <br />
                        <li>
                            <div className='flex justify-between px-4 font-bold'>
                                <FaPython className='text-green-500 text-3xl font-extrabold rounded-md' />
                                Python
                            </div>
                            <br />
                            <div className='border-2 rounded-sm border-green-500 border-solid w-full'></div>
                        </li>
                    </ul>
                )}
                {!lang && (
                    <p className='text-xl text-gray-400'>Languages that I learned</p>
                )}
            </div>
            {/* FrameWorks  */}
            <div>
                <h1 className='text-2xl font-bold flex justify-between items-center'>
                    FrameWorks & Libraries 
                    <div onClick={() => setFrame(!frame)}>
                        {frame ? <FaChevronUp className='text-green-500'/> :<FaChevronDown className='text-green-500' />}
                    </div>
                </h1>
                {frame && (
                    <ul className='pt-10'>
                        <li>
                            <div className='flex justify-between px-4 font-bold'>
                                <FaReact className='text-green-500 text-3xl font-extrabold' />
                                ReactJs
                            </div>
                            <br />
                            <div className='border-2 rounded-sm border-green-500 border-solid w-full'></div>
                        </li>
                        <br />
                        <li>
                            <div className='flex justify-between px-4 font-bold'>
                                <FaNodeJs className='text-green-500 text-3xl font-extrabold' />
                                NodeJs
                            </div>
                            <br />
                            <div className='border-2 rounded-sm border-green-500 border-solid w-full'></div>
                        </li>
                        <br />
                        <li>
                            <div className='flex justify-between px-4 font-bold'>
                                <SiExpress className='text-green-500 text-3xl font-extrabold' />
                                ExpressJs
                            </div>
                            <br />
                            <div className='border-2 rounded-sm border-green-500 border-solid w-full'></div>
                        </li>
                        <br />
                        <li>
                            <div className='flex justify-between px-4 font-bold'>
                                <DiMongodb className='text-green-500 text-3xl font-extrabold rounded-md' />
                                MongoDB
                            </div>
                            <br />
                            <div className='border-2 rounded-sm border-green-500 border-solid w-full'></div>
                        </li>
                        <br />
                        <li>
                            <div className='flex justify-between px-4 font-bold'>
                                <RiTailwindCssFill className='text-green-500 text-3xl font-extrabold rounded-md' />
                                Tailwind CSS
                            </div>
                            <br />
                            <div className='border-2 rounded-sm border-green-500 border-solid w-full'></div>
                        </li>
                    </ul>
                )}
                {!frame && (
                    <p className='text-xl text-gray-400'>Libraries and Frameworks that I learned</p>
                )}
            </div>
            {/* Tools  */}
            <div>
                <h1 className='text-2xl font-bold flex justify-between items-center'>
                    Tools
                    <div onClick={() => setTool(!tool)}>
                        {tool ? <FaChevronUp className='text-green-500'/> :<FaChevronDown className='text-green-500' />}
                    </div>
                </h1>
                {tool && (
                    <ul className='pt-10'>
                        <li>
                            <div className='flex justify-between px-4 font-bold'>
                                <IoGitBranch className='text-green-500 text-3xl font-extrabold' />
                                Git
                            </div>
                            <br />
                            <div className='border-2 rounded-sm border-green-500 border-solid w-full'></div>
                        </li>
                        <br />
                        <li>
                            <div className='flex justify-between px-4 font-bold'>
                                <FaGithub className='text-green-500 text-3xl font-extrabold' />
                                GitHub
                            </div>
                            <br />
                            <div className='border-2 rounded-sm border-green-500 border-solid w-full'></div>
                        </li>
                        <br />
                        <li>
                            <div className='flex justify-between px-4 font-bold'>
                                <SiVisualstudiocode className='text-green-500 text-3xl font-extrabold' />
                                Visual Studio Code
                            </div>
                            <br />
                            <div className='border-2 rounded-sm border-green-500 border-solid w-full'></div>
                        </li>
                        <br />
                        <li>
                            <div className='flex justify-between px-4 font-bold'>
                                <SiRender className='text-green-500 text-3xl font-extrabold rounded-md' />
                                Render
                            </div>
                            <br />
                            <div className='border-2 rounded-sm border-green-500 border-solid w-full'></div>
                        </li>
                        <br />
                    </ul>
                )}
                {!tool && (
                    <p className='text-xl text-gray-400'>Tools that I learned</p>
                )}
            </div>
            {/* Computer Fundamentals  */}
            <div>
                <h1 className='text-2xl font-bold flex justify-between items-center'>
                    Computer Fundamentals
                    <div onClick={() => setFund(!fund)}>
                        {fund ? <FaChevronUp className='text-green-500'/> :<FaChevronDown className='text-green-500' />}
                    </div>
                </h1>
                {fund && (
                    <ul className='pt-10'>
                        <li>
                            <div className='flex justify-between px-4 font-bold'>
                                <FaDatabase className='text-green-500 text-3xl font-extrabold' />
                                DataBase Management System
                            </div>
                            <br />
                            <div className='border-2 rounded-sm border-green-500 border-solid w-full'></div>
                        </li>
                        <br />
                        <li>
                            <div className='flex justify-between px-4 font-bold'>
                                <MdDataObject className='text-green-500 text-3xl font-extrabold' />
                                Object Oriented Programming
                            </div>
                            <br />
                            <div className='border-2 rounded-sm border-green-500 border-solid w-full'></div>
                        </li>
                        <br />
                        <li>
                            <div className='flex justify-between px-4 font-bold'>
                                <MdNetworkCheck className='text-green-500 text-3xl font-extrabold' />
                                Computer Networks
                            </div>
                            <br />
                            <div className='border-2 rounded-sm border-green-500 border-solid w-full'></div>
                        </li>
                        <br />
                        <li>
                            <div className='flex justify-between px-4 font-bold'>
                                <FaOsi className='text-green-500 text-3xl font-extrabold rounded-md' />
                                Operating System
                            </div>
                            <br />
                            <div className='border-2 rounded-sm border-green-500 border-solid w-full'></div>
                        </li>
                        <br />
                    </ul>
                )}
                {!fund && (
                    <p className='text-xl text-gray-400'>Computer Fundamentals that I learned</p>
                )}
            </div>
        </div>
    </div>
  )
}

export default Skills