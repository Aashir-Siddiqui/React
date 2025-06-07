import React, { useState } from 'react'

export default function Controlled() {

    const [name, setName] = useState("")

    const change = (event) => {
        setName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(name)
    }

    return (
        <div>
            <h1>Controlled and UnControlled</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input type="text" name="name" value={name} onChange={change} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </label>
                <button type="submit" className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200">Submit</button>
            </form>
        </div>
    )
}
