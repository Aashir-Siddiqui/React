import React, { useState, useEffect } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    const [date, setDate] = useState("")
    const [name, setName] = useState("")

    useEffect(() => {
        console.log("Count Value: ", count)
    }, [count])

    useEffect(() => {
        setInterval(() => {
            let date = new Date()
            setDate(date.toLocaleTimeString())
        }, 1000);
    }, [])

    useEffect(() => {
        console.log(name)
    }, [name])

    useEffect(() => {
        document.title = `count: ${count}`;
    }, [count]);


    return (
        <div className="bg-gray-600 min-h-screen flex items-center justify-center flex-col gap-10">
            <h1 className="text-center text-white">Counter</h1>
            <div className="text-center text-white">Date: {date}</div>
            <div className="text-center text-white">Count: {count}</div>
            <div className="text-center text-white">Name: <span className="font-bold text-blue-400 ml-2">{name}</span></div>
            <input type="text" vlaue={name} onChange={(e) => setName(e.target.value)} />
            <button
                onClick={() => setCount(count + 1)}
                className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
                Increment
            </button>
        </div>
    )
}
