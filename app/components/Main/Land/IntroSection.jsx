import Image from 'next/image'
import React from 'react'

function IntroSection() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-12">

        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl md:text-5xl lg:leading-normal font-extrabold">Hello, I'm Dhammika</h1>
          <p className='text-base md:text-lg text-GreyHeader pb-[50px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quasi accusamus veritatis aut. Totam fugit molestias blanditiis voluptatibus repellat recusandae itaque ad, eligendi numquam, aut doloremque aspernatur officia magnam ducimus?
          </p>

          {/*---- buttons ----------------------------------------- */}
          <div>
            <button className='px-6 py-3 rounded-full mr-4 sm:w-fit bg-slate-400 hover:bg-slate-700'>Hire me</button>
            <button className='px-6 py-3 rounded-full mr-4 sm:w-fit bg-slate-400 hover:bg-slate-700'>Download CV</button>
          </div>
        </div>


        {/* --------------- Profile img --------------------------------------------- */}

        <div className="col-span-5 place-self-center">
          <div className='h-[500px] w-[400px]'>
            <Image src="/images/img2.jpeg" height={500} width={250} 
              className='absolute-transform translate-x-1/2 translate-y-1/2 rounded-full'>
            </Image>
          </div>
        </div>


      </div>
    </div>
  )
}

export default IntroSection