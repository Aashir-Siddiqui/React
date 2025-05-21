import React, { useEffect, useState } from 'react'
import { FaCheck } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export default function Todo() {
    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState([]);
    const [dateTime, setDateTime] = useState("");

    const handleChange = (value) => {
        setInputValue(value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!inputValue.trim()) return;
        if (tasks.some(task => task.text === inputValue.trim())) {
            setInputValue("");
            return;
        }
        setTasks(prevTasks => [
            ...prevTasks,
            { text: inputValue.trim(), completed: false }
        ]);
        setInputValue("");
    };

    const handleComplete = (index) => {
        setTasks(prevTasks =>
            prevTasks.map((task, i) =>
                i === index ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const handleDelete = (index) => {
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date()
            const formateDate = now.toLocaleDateString()
            const formatTime = now.toLocaleTimeString()
            setDateTime(`${formateDate} - ${formatTime}`)
        }, 1000);
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Todo App</h1>
                <h2>{dateTime}</h2>
                <div className="flex mb-4">
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
                        onClick={handleFormSubmit}
                        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition"
                    >
                        Add Todo
                    </button>
                </div>
                <ul className="space-y-2">
                    {tasks.map((task, index) => (
                        <li
                            key={index}
                            className="flex items-center justify-between p-2 bg-gray-50 rounded-md border border-gray-200"
                        >
                            <span
                                className={`flex-1 ${task.completed ? "line-through text-gray-500" : "text-gray-800"
                                    }`}
                            >
                                {task.text}
                            </span>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => handleComplete(index)}
                                    className="text-green-500 hover:text-green-600 transition"
                                >
                                    <FaCheck />
                                </button>
                                <button
                                    onClick={() => handleDelete(index)}
                                    className="text-red-500 hover:text-red-600 transition"
                                >
                                    <MdDeleteForever />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}