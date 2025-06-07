import React, { useState } from 'react';

export default function RegistrationForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const inputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'firstName':
                setFirstName(value);
                break;
            case 'lastName':
                setLastName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'phoneNumber':
                setPhoneNumber(value);
                break;
            default:
                break;
        }
    };

    const formSubmit = (event) => {
        event.preventDefault();
        const formData = {
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
        };
        console.log(formData);
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center flex-col p-4">
            <section
                className="text-center mb-10 text-white"
            >
                <p>
                    Hello, my name is
                    <span className="font-bold text-blue-400 ml-2">
                        {firstName} {lastName}
                    </span>
                    . My email address is<span className="font-bold text-blue-400 mx-2">{email}</span>and my phone number is
                    <span className="font-bold text-blue-400 ml-2">{phoneNumber}</span>.
                </p>
            </section>

            <section className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
                <h1 className="text-2xl font-bold text-gray-100 text-center mb-6">Registration Form</h1>
                <form onSubmit={formSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="firstName" className="block text-gray-300 font-medium mb-1">
                            First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            required
                            value={firstName}
                            onChange={inputChange}
                            placeholder="Enter First Name"
                            className="w-full p-3 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-gray-300 font-medium mb-1">
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            required
                            value={lastName}
                            onChange={inputChange}
                            placeholder="Enter Last Name"
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
                            onChange={inputChange}
                            placeholder="Enter Email"
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
                            onChange={inputChange}
                            placeholder="Enter Password"
                            className="w-full p-3 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber" className="block text-gray-300 font-medium mb-1">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            required
                            value={phoneNumber}
                            onChange={inputChange}
                            placeholder="Enter Phone Number"
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
    );
}