import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { ImLink } from "react-icons/im";
import { LuRadioTower } from "react-icons/lu";

const Card = ({project}) => {
    // let projects = props.projects;
    return (
        <div className="flex flex-col md:relative">
            <div className="absolute top-[-7rem] z-10 mx-auto ">
                <img src={project.image} alt="" className="aspect-square rounded-full w-[140px] h-[140px] z-25" />
                <div className="w-[140px] h-[140px] bg-green-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
            </div>

            <div className="text-center mt-7">
                <p className="font-bold text-2xl capitalize leading-3">{project.name}</p>
            </div>

            <div className="text-center mt-4">
                <p className="text-green-300 text-sm uppercase">{project.desc}</p>
            </div>

            <div className="text-green-400 mx-auto mt-5">
                <FaQuoteLeft />
            </div>

            <div className="text-center mt-4 text-slate-500 ">{project.text}</div>

            <div className="text-green-400 mx-auto mt-5">
                <FaQuoteRight />
            </div>

            <div className="mt-6 flex justify-center flex-col mx-auto md:flex-row gap-5">
                <a href={project.gitlink} target="_blank">
                    <button
                        className='flex gap-2 items-center px-6 py-2 rounded-md font-bold text-lg border-2 border-green-500 hover:bg-green-200'
                    >
                        Source Code <ImLink className='font-bold'/>
                    </button>
                </a>
                <a href={project.livelink} target="_blank">
                    <button
                    className="flex gap-2 items-center bg-green-400 hover:bg-green-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
                    >
                    Live Link <LuRadioTower className='font-bold'/>
                    </button>
                </a>
            </div>

      
        </div>
    );
};

export default Card;