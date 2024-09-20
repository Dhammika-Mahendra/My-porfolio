import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'
import Menu from './Menu'
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

function Navbar() {

  const navProps = [
    {href: "/", title: "Home"},
    {href: "/Proj", title: "Projects"},
    {href: "/Contact", title: "Contact"}
  ]

  const [navBarOpen, setNavBarOpen] = React.useState(false)

  return (
    <nav 
      className="fixed top-0 left-0 right-0 items-center justify-between mx-auto md:bg-slate-300 p-[15px] pr-6 md:pr-12"
      style={{backgroundColor: navBarOpen ? 'rgb(203 213 225)' : ''}}
    >
      <div className="flex flex-row justify-end items-center mx-auto"> 

        
        <div className='flex flex-row justify-between md:hidden w-[300px] mr-[20px]'>
          {navBarOpen ? navProps.map((navProp, index) => (
              <Link className='block md:hidden' href={navProp.href}>{navProp.title}</Link>))
          :<></>}
        </div>

        {/* ----------- Mobile menu button --------------------------------------------------------- */}
        <div className="block md:hidden">     

        {navBarOpen? 
          <button 
            className="flex items-center px-3 py-2 border rounded border-slate-500 text-NavTopics hover:text-white hover:border-white"
            onClick={() => setNavBarOpen(false)}
            ><IoClose></IoClose></button>
            :<button 
            className="flex items-center px-3 py-2 border rounded border-slate-500 text-slate-500 hover:text-white hover:border-white"
            onClick={() => setNavBarOpen(true)}
            ><FiMenu></FiMenu></button>
          }       
        </div> 
      

        {/* ----------- Nav bar topics PC --------------------------------------------- */}
            {
              navProps.map((navProp, index) => (
                <NavLink key={index} href={navProp.href} title={navProp.title}></NavLink>
                ))
            }
    </div>
    </nav>
  )
}

export default Navbar