import React from 'react'

function Certificate({name,description,place,logo}) {
  return (
    <div>
        <div className='flex flex-row justify-between items-center w-[450px] h-[100px] shadow-sm px-[10px] bg-blue-200 m-[2px] rounded-[5px]'>
            <div className='flex flex-col justify-between items-start'>
                <p className='text-md font-bold'>{name}</p>
                <p className='text-sm'>{description}</p>
                <p className='text-sm'>{place}</p>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <div style={{background:`url(../images/Certif/${logo}.png)`,backgroundSize: "contain" ,backgroundRepeat:'no-repeat'}} alt={name} className='h-10 w-10'/>

            </div>
        </div>
    </div>
  )
}

export default Certificate