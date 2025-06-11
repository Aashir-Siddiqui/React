import React, { createContext } from 'react'

export const BioContext = createContext()

export const BioProvider = ({children}) => {

  const myName = "Aashir Siddiqui"
  const myAge = 18
  console.log(children)

  return (
    <BioContext.Provider value={{myName, myAge}}>
      {children}
    </BioContext.Provider>
  )
}
