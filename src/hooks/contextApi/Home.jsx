import React, { use } from 'react'
import { BioContext } from '.'

export const Home = () => {

    const { myName, myAge } = use(BioContext)

    return (
        <div>
            <h1>Hello my name is {myName}, I am {myAge} yrs old.</h1>
        </div>
    )
}
