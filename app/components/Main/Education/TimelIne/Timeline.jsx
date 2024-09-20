import React from 'react'
import Card from './Card'

function Timeline() {

    const eduDetails = [
        {
            description:'Primary',
            name:'Kandy Model School',
            place:'Katugastota',
            start:'2000',
            end:'2005',
            logo:'KMS'
        },{
            description:'Secondary',
            name:'Dharmaraja College',
            place:'Kandy',
            start:'2005',
            end:'2017',
            logo:'DRCK'
        },{
            description:'Higher',
            name:'University of Moratuwa',
            place:'Moratuwa',
            start:'2018',
            end:'2022',
            logo:'UOM'
        }
    ]

  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <div className='w-full flex flex-row justify-around items-center mt-[20px]'>
           { 
                eduDetails.map((edu,index) => (
                    <Card key={index} decription={edu.description} name={edu.name} place={edu.place} start={edu.start} end={edu.end} logo={edu.logo}/>
                ))
            }
        </div>
        <div className='w-full h-[5px] rounded-[5px] bg-blue-300 my-[10px]'></div>
    </div>
  )
}

export default Timeline