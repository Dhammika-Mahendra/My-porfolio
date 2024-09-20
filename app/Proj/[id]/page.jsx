'use client'
import Tech from '@/app/components/Proj/ProjDetails/Tech'
import Slide from '@/app/components/Proj/Slide'
import { projectsData } from '@/public/ProjectData'
import { useParams} from 'next/navigation'
import React, { Suspense, useEffect, useState } from 'react'

function page() {

  const {id} = useParams()
  const data = projectsData[id-1]

  //Loading relavant description component 
  const [Component, setComponent] = useState(null);
  useEffect(() => {
    const handleLoadComponent = async () => {
      try {
        const ImportedComponent = await import(`../../components/Proj/ProjList/Proj${id}`);
        setComponent(() => ImportedComponent.default);
      } catch (error) {
        console.error("Component not found", error);
        setComponent(null); 
      }
    };
  handleLoadComponent();
  }, [id]);

  return (
    <main className="flex min-h-screen flex-col">
    <div className="mt-20 mx-auto px-12 py-4">

    <div className="flex flex-col">
        <div className='flex flex-col md:flex-row md:items-baseline'>
          <h2 className='text-xl md:text-3xl mr-8 pl-2'>{data.title}</h2>
          <h2 className='text-sm text-gray-400 md:text-lg mb-[20px] pl-2 md:pl-0'>{data.description}</h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-between">
        <Slide hrefList={data.gallery}></Slide>

        {/* --- Teck stack ---------------------------------------*/}
        <div >
          <div className="flex flex-col items-start">
          <div className="w-full flex flex-row items-center justify-start border-b-[1px] border-b-gray-300">
            {data.teckStack.map((item, index) => (
              <Tech key={index} name={item}></Tech>
            ))}
          </div>
          <div className="w-full flex flex-row items-center justify-start border-b-[1px] border-b-gray-300">
            {data.lang.map((item, index) => (
              <Tech key={index} name={item}></Tech>
            ))}
          </div>
          <div className="w-full flex flex-row items-center justify-start border-b-[1px] border-b-gray-300">
            {data.extra.map((item, index) => (
              <Tech key={index} name={item}></Tech>
            ))}
          </div>
          <div className="w-full flex flex-row items-center justify-start border-b-[1px] border-b-gray-300">
            {data.host.map((item, index) => (
              <Tech key={index} name={item}></Tech>
            ))}
          </div>
          </div>
        </div>


        </div>


        {/* --- Project description (description component from ProjList)------------------------------------ */}
        <div className='flex flex-col items-start pt-10 md:pt-6'>
        {Component ? (
          <Suspense fallback={<div>Loading component...</div>}>
            <Component />
          </Suspense>
        ) : (
          <p>No component loaded.</p>
        )}
        </div>

    </div>

    </div>
    </main>
  )
}

export default page