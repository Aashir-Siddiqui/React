import React, { useState, useEffect } from 'react'

export default function CleanUp() {
    const [count, setCount] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        let timer

        if (!isPaused) {
            timer = setInterval(() => {
                setCount((prev) => prev + 1)
            }, 1000)
        }

        return () => clearInterval(timer)
    }, [isPaused])

    const handlePause = () => {
        setIsPaused(true)
    }

    const handleResume = () => {
        setIsPaused(false)
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-6">
            <h1 className="text-2xl font-bold">Pause & Resume Timer</h1>
            <div className="text-3xl">{count}</div>
            <div className="flex gap-4">
                <button
                    onClick={handlePause}
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
                >
                    Pause
                </button>
                <button
                    onClick={handleResume}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                >
                    Resume
                </button>
            </div>
        </div>
    )
}
