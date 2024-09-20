import React from 'react'

function SideNavig() {
  return (
        <div className='hidden md:flex px-[5px] pt-24 bg-red-100 flex-col justify-center items-center fixed top-0 left-0 h-screen w-[40px]'>
            <div className='flex flex-col justify-between items-center h-[250px]'>
                <div className='-rotate-90'>About</div>
                <div className='-rotate-90'>Education</div>
                <div className='-rotate-90'>Skills</div>
            </div>
        </div>
  )
}

export default SideNavig