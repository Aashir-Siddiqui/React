import React, { memo, useCallback, useState } from 'react'

const Button = memo(({ onClick, children }) => {
    return (
        <button className={`bg-black text-white px-10 py-5' onClick={onClick} ${children === "Increment" ? 'bg-green-600' : 'bg-red-600'}`}
            onClick={onClick}>
            {children}
        </button>
    )
})

export default function UseCallback() {

    const [count, setCount] = useState(0)

    // const Increment = () => {
    //     console.log("increment")
    //     setCount((prev) => prev + 1)
    // }

    // const Decrement = () => {
    //     console.log("deccrement")
    //     setCount((prev) => prev - 1)
    // }

    const Increment = useCallback(() => {
        console.log("increment")
        setCount((prev) => prev + 1)
    })

    const Decrement = useCallback(() => {
        console.log("deccrement")
        setCount((prev) => prev - 1)
    })

    return (
        <div className='bg-black text-white flex flex-col items-center justify-center h-lvh gap-5'>
            <h1>Count: {count}</h1>
            <Button onClick={Increment}>Increment</Button>
            <Button onClick={Decrement}>Decrement</Button>
        </div>
    )
}
