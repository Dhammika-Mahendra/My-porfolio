import React from 'react'
import { MdTravelExplore } from "react-icons/md";
import { BiLogoGithub } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa6";

function Slide({hrefList}) {

  return (
    <div>
        <div className='flex flex-row'>
            {hrefList.map((item, index) => (
                <div className='w-[350px] h-[250px] md:w-[500px] md:h-[300px] mb-4 rounded-[15px]' key={index} style={{ background: `url(${item})`,  backgroundSize: "cover" , backgroundRepeat: 'no-repeat'}}></div>
            ))}
        <div className='flex flex-col text-3xl ml-4 mt-4'>
            <MdTravelExplore className='cursor-pointer mb-4'></MdTravelExplore>
            <BiLogoGithub className='cursor-pointer mb-4'></BiLogoGithub>
            <FaLinkedin className='cursor-pointer'></FaLinkedin>
        </div>
        </div>
    </div>
  )
}

export default Slide