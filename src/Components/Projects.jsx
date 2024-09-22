import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Card from './Card';

// eslint-disable-next-line react/prop-types
const Projects = ({projects}) => {
  // let projects = props.projects;
  const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (index - 1 < 0) {
      // eslint-disable-next-line react/prop-types
      setIndex(projects.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  const rightShiftHandler = () => {
    // eslint-disable-next-line react/prop-types
    if (index + 1 >= projects.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div name="Projects" className='max-w-screen-2xl container mx-auto px-6 md:px-20 my-20'>
      <h1 className='text-4xl text-center font-bold mb-2'>Projects</h1>
      <div className='border-2 border-[#e77bfa] w-1/12 mx-auto mb-12 md:mb-36'></div>
      <div className="flex flex-col w-[85vw] md:w-[700px] mx-auto items-center
      mt-10 p-10 transition-all duration-700 shadow shadow-slate-300 rounded-md">
        <Card project={projects[index]} />
        <div className="flex text-3xl mt-5 gap-10 text-[#e77bfa] font-bold mx-auto text-center">
          <button
            className="cursor-pointer hover:text-[#e77bfa]"
            onClick={leftShiftHandler}
          >
            <FiChevronLeft />
          </button>
          <button
            className="cursor-pointer hover:text-[#e77bfa]"
            onClick={rightShiftHandler}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Projects