import React from 'react'

export default function Tech({name}) {
  return (
    <div className='w-[25px] h-[25px] md:w-[30px] md:h-[30px] m-[10px] hover:border-[2px] bg-center border-gray-400 rounded-md' style={{ background: `url(../images/TechStack/${name}.png)`,  backgroundSize: "contain" ,backgroundRepeat:'no-repeat'}}>
    </div>
  )
}
