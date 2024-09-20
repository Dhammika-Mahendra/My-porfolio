import React from 'react'

const Contxt = React.createContext()

function Context({children}) {

  return (
    <Contxt.Provider>
        {children}
    </Contxt.Provider>
  )
}

export default Context