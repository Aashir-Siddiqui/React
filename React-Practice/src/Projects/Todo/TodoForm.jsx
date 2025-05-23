import React, { useState } from 'react';

export default function TodoForm({ onAddTodo }) {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (value) => {
        setInputValue(value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim()) {
            onAddTodo(inputValue);
            setInputValue("");
        }
    };

    return (
        <form className="flex mb-4" onSubmit={handleFormSubmit}>
            <input
                type="text"
                placeholder="Enter Todo"
                autoComplete="off"
                value={inputValue}
                onChange={(event) => handleChange(event.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition"
            >
                Add Todo
            </button>
        </form>
    );
}