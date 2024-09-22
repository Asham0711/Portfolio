import { useState } from 'react';
// import pic from '../assets/profile.jpg';
import { AiOutlineMenu, AiOutlineProject } from "react-icons/ai";
import { IoCloseSharp, IoPersonOutline } from "react-icons/io5";
import { Link } from 'react-scroll';
import { FaGraduationCap, FaHome, FaPhone } from 'react-icons/fa';
import { SiHyperskill } from 'react-icons/si';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('Home'); // Initial active tab

  const navItems = [
    {
      id: 1,
      text: "Home",
      tag:<FaHome />
    },
    {
      id: 2,
      text: "About",
      tag:<IoPersonOutline />
    },
    {
      id: 3,
      text: "Skills",
      tag:<SiHyperskill />
    },
    {
      id: 4,
      text: "Education",
      tag:<FaGraduationCap />
    },
    {
      id:5,
      text: "Projects",
      tag:<AiOutlineProject />
    },
    {
      id: 6,
      text: "Contact",
      tag:<FaPhone />
    },
  ];

  const clickHandler = (text) => {
    setActiveTab(text);
    setMenu(false);
  };

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 right-0 left-0 z-50 bg-white'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex space-x-2'>
            {/* <img src={pic} className='h-12 w-12 rounded-full' alt="" /> */}
            <h1 className='font-semibold text-xl cursor-pointer'>
              Md <span className='text-[#e77bfa] text-2xl font-bold'>Asham</span> Imad
              <p className='text-sm'>Software Developer</p>
            </h1>
          </div>
          {/* Desktop navbar  */}
          <div>
            <ul className='hidden md:flex space-x-8'>
              {navItems.map(({ id, text }) => (
                <li
                  className={`hover:scale-105 hover:font-bold hover:text-[#e77bfa] duration-200 cursor-pointer ${
                    activeTab === text ? 'text-[#e77bfa]' : ''
                  }`}
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    onClick={() => clickHandler(text)}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div onClick={() => setMenu(!menu)} className="md:hidden z-50">
            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>
        {/* Mobile navbar  */}
        {menu && (
          <div className="bg-white">
            <ul className='md:hidden grid grid-cols-3 h-[250px] fixed bottom-0 left-0 right-0 z-50 
            bg-white items-center justify-center space-y-3 text-xl border-t-4'>
              {navItems.map(({ id, text , tag}) => (
                <li
                  className={`hover:scale-105 hover:font-bold hover:text-[#e77bfa] duration-200 cursor-pointer ${
                    activeTab === text ? 'text-[#e77bfa]' : ''
                  }`}
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    className='flex gap-2 items-center justify-center'
                    onClick={() => clickHandler(text)}
                  >
                    {tag}
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar;
