import Link from 'next/link'
import React from 'react'
import { MdTravelExplore } from "react-icons/md";
import { BiLogoGithub } from "react-icons/bi";
import { useRouter } from 'next/navigation';

function ProjectCard({ imgUrl, title, description, gitUrl, previewUrl ,Pid}) {

  const router = useRouter();

  const handleNavigation = (id) => {
    router.push(`/Proj/${id}`);
  };
  
  return (
    <div>
    <div
      className="h-52 md:h-72 rounded-t-xl  relative group"
      style={{ background: `url(${imgUrl})`,  backgroundSize: "contain" }}
    >

    <div className="overlay rounded-t-xl items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link  text-white text-4xl"
          >
            <MdTravelExplore className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white'></MdTravelExplore>
          </Link>

          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link text-white text-4xl"
          ><BiLogoGithub className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white'></BiLogoGithub>
          </Link>
    </div>
    </div>
    <div className="text-black rounded-b-xl mt-3 bg-slate-200 py-6 px-4">
        <h5 className="text-bg font-semibold mb-2 cursor-pointer" onClick={()=>handleNavigation(Pid)}>{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
    </div>
    </div>
  )
}

export default ProjectCard