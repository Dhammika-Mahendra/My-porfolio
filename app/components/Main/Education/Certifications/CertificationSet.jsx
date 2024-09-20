import React from 'react'
import Certificate from './Certificate'

function CertificationSet() {

    const certificationsData = [
        {
            name:'Advanced certificate in SQL',
            description:'dsnsnn;jwn;jwn',
            place:'Hackerank',
            logo:'SQL'
        },
        {
            name:'Google Analytics',
            description:'dsnsnn;jwn;jwn',
            place:'Google',
            logo:'GA'
        },
        {
            name:'Advanced certificate in SQL',
            description:'dsnsnn;jwn;jwn',
            place:'Hackerank',
            logo:'SQL'
        },
        {
            name:'Google Analytics',
            description:'dsnsnn;jwn;jwn',
            place:'Google',
            logo:'GA'
        },
        {
            name:'Advanced certificate in SQL',
            description:'dsnsnn;jwn;jwn',
            place:'Hackerank',
            logo:'SQL'
        },
        {
            name:'Google Analytics',
            description:'dsnsnn;jwn;jwn',
            place:'Google',
            logo:'GA'
        }
    ]

  return (
    <div>
        <div className='h-[250px] w-full overflow-y-scroll mt-[20px]'>
            {
                certificationsData.map((certification,index) => (
                    <Certificate key={index} name={certification.name} description={certification.description} place={certification.place} logo={certification.logo}/>))
            }
        </div>
    </div>
  )
}

export default CertificationSet