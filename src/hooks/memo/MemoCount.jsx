import React, { memo, useRef } from 'react'

export const Counts = memo(({ biodata }) => {

    const renderCount = useRef(0)
    console.log(renderCount)

    return (
        <div className="mt-3 font-display text-center">
            <p className="">
                Nothing changed here but Ive now rendered:
                <span className="text-red-600">{renderCount.current++} time(s)</span>
                <p>My name is {biodata.name}</p>
            </p>
        </div>
    )
})
