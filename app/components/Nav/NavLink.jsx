import Link from 'next/link'
import React from 'react'

function NavLink({href, title}) {
  return (
    <div>
    <Link href={href}  className="hidden md:block ml-[80px] mr-[20px] text-NavTopics sm:text-bg rounded md:text-lg">{title}</Link>
    </div>
  )
}

export default NavLink