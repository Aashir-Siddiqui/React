import React, { useState } from 'react';

export default function ContactForm() {
    const [contacts, setcontacts] = useState({
        username: '',
        email: '',
        password: '',
        phonenumber: '',
        address: '',
    });

    const inputChange = (e) => {
        const { name, value } = e.target;
        setcontacts((prev) => ({ ...prev, [name]: value }));
    };

    const formSubmit = (e) => {
        e.preventDefault();
        console.log(contacts);
        // Optional: Reset form
        // setcontacts({
        //     username: '',
        //     email: '',
        //     password: '',
        //     phonenumber: '',
        //     address: '',
        // });
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center flex-col p-4">
            <section className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
                <h1 className="text-2xl font-bold text-gray-100 text-center mb-6">Contact Form</h1>
                <form onSubmit={formSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-gray-300 font-medium mb-1">
                            User Name
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            required
                            value={contacts.username}
                            autoComplete="off"
                            onChange={inputChange}
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
                            id="email"
                            name="email"
                            required
                            value={contacts.email}
                            autoComplete="off"
                            onChange={inputChange}
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
                            id="password"
                            name="password"
                            required
                            value={contacts.password}
                            autoComplete="off"
                            onChange={inputChange}
                            placeholder="Enter password"
                            className="w-full p-3 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="phonenumber" className="block text-gray-300 font-medium mb-1">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phonenumber"
                            name="phonenumber"
                            required
                            value={contacts.phonenumber}
                            autoComplete="off"
                            onChange={inputChange}
                            placeholder="Enter phone number"
                            className="w-full p-3 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-gray-300 font-medium mb-1">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            required
                            value={contacts.address}
                            autoComplete="off"
                            onChange={inputChange}
                            placeholder="Enter address"
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