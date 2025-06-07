import React, { useState } from 'react'

export default function LoginForm() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const formSubmit = (e) => {
        e.preventDefault()

        const formData = {
            name,
            email,
            password,
        }

        console.log(formData)
    }

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center flex-col p-4">

            <section className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
                <h1 className="text-2xl font-bold text-gray-100 text-center mb-6">Login Form</h1>
                <form onSubmit={formSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="firstName" className="block text-gray-300 font-medium mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={name}
                            autoComplete="off"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="w-full p-3 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-300 font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={email}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                            className="w-full p-3 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-300 font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            required
                            value={password}
                            autoComplete="off"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            className="w-full p-3 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                    >
                        Submit
                    </button>
                </form>
            </section>
        </div>
    )
}
