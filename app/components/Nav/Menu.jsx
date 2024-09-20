import React from 'react'
import NavLink from './NavLink'

function Menu({links}) {
  return (
    <ul className="bg-slate-300 flex flex-row items-center">
    {links.map((link, index) => (
      <li key={index}>
        <NavLink href={link.href} title={link.title} />
      </li>
    ))}
  </ul>
  )
}

export default Menu