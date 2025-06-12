import React, { use } from 'react'
import { BioContext } from '.'

export const About = () => {

    const { myInstitute, myBatch, myCourse } = use(BioContext)

    return (
        <div>
            <h1>I am learning {myCourse} from {myInstitute} and i am {myBatch} student.</h1>
        </div>
    )
}
