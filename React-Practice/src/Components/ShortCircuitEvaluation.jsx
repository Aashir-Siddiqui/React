import React, { useState } from 'react';

export default function ShortCircuitEvaluation() {
    const [logedIn, setLogegIn] = useState(true)
    const [user, setUser] = useState("")
    return (
        <div className="bg-gray-700 h-screen">
            <h1 className="text-white text-center">Example Of Short Circuit Evaluation</h1>

            {logedIn && <p className="text-white text-center">You are loged in!</p>}

            {user ? <p className="text-white text-center">{` Hello ${user}`}</p> : <p className="text-white text-center">Please log in!</p>}

            <div className="flex justify-center items-center mt-10">
                <button onClick={()=> setLogegIn(!logedIn)} className="bg-blue-600 text-white rounded p-2 m-2">Login</button>
                <button onClick={()=> setUser("Aashir Siddiqui")} className="bg-blue-600 text-white rounded p-2 m-2">Set User</button>
                <button onClick={()=> setUser("")} className="bg-blue-600 text-white rounded p-2 m-2">Clear User</button>
            </div>
        </div>
    )
}
