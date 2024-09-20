import React from 'react'

function TabButton({ active, selectTab, children }) {

  const buttonClasses = active ? "text-BlackHeader" : "text-[#ADB7BE]";

  return (
    <div>
        <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-BlackHeader ${buttonClasses}`}>
        {children}
        </p>
        </button>
    </div>
  )
}

export default TabButton