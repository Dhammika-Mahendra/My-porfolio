import React from 'react'

function Card({decription,name,place,start,end,logo}) {
  return (
    <div className='flex flex-row justify-center items-center w-[200px] h-[150px] shadow-sm px-[10px] bg-white'>
        <div className='flex flex-col justify-between items-start'>
            <p className='text-sm'>{decription}</p>
            <p className='text-md font-bold'>{name}</p>
            <p className='text-sm'>{place}</p>
            <p className='text-sm'>{start} - {end}</p>
        </div>
        <div className='flex flex-row justify-between items-center'>
            <div style={{background:`url(../images/Edu/${logo}.png)`,backgroundSize: "contain" ,backgroundRepeat:'no-repeat'}} alt={name} className='h-10 w-10'/>
        </div>
    </div>
  )
}

export default Card