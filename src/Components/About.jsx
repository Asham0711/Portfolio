import React from 'react';
import pic from '../assets/profile.jpg'
import { FaFileAlt } from 'react-icons/fa';

const About = () => {
  const onButtonClick = () => {
        const pdfUrl = "Sample.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "../assets/Asham_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
  return (
    <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
      <h1 className='text-4xl text-center font-bold mb-2'>About</h1>
      <div className='border-2 border-green-500 w-1/12 mx-auto mb-20'></div>
      <br />
      <br />
      <div className='flex flex-col gap-5 md:flex-row justify-between space-x-5 md:px-20'>
        <div className='md:w-1/2 w-full px-20'>
          <img src={pic} alt="" className='md:w-[350px] w-full h-full rounded-2xl hover:scale-110 duration-1000 transition-all cursor-pointer' />
        </div>
        <div className='md:w-1/2 flex flex-col justify-center gap-5 items-center'>
          <p className='md:text-xl'>
            Hello! I am Md Asham Imad, a passionate software engineer with a strong foundation in Information Technology. 
            My expertise lies in the MERN stack (MongoDB, Express.js, React.js, Node.js), and I thrive on creating dynamic, 
            responsive, and user-friendly web applications. With a keen eye for detail and a commitment to staying updated 
            with the latest industry trends, I continuously strive to deliver efficient and innovative solutions. 
            Welcome to my portfolio, where you can explore my journey and the projects I have worked on.
          </p>
          <button className='bg-green-500 px-5 py-2 rounded-xl flex gap-2 justify-center 
          items-center font-semibold text-white'
          onClick={onButtonClick}
          >
            Resume <FaFileAlt />
          </button>
        </div>
      </div>
    </div>
  )
}

export default About