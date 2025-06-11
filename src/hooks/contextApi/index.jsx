import React, { createContext } from 'react'

export const BioContext = createContext()

export const BioProvider = ({children}) => {

  const myName = "Aashir Siddiqui"
  const myAge = 18
  const myInstitute = "SMIT"
  const myBatch = "Batch 13"
  const myCourse = "Web and App Dvelopment"
  console.log(children)

  return (
    <BioContext.Provider value={{myName, myAge, myInstitute, myBatch, myCourse}}>
      {children}
    </BioContext.Provider>
  )
}
