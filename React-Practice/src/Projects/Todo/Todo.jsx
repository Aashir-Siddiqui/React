import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function Todo() {
    const [tasks, setTasks] = useState([]);
    const [dateTime, setDateTime] = useState("");

    const handleFormSubmit = (inputValue) => {
        if (!inputValue.trim()) return;
        if (tasks.some(task => task.text === inputValue.trim())) return;
        setTasks(prevTasks => [
            ...prevTasks,
            { text: inputValue.trim(), completed: false }
        ]);
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

    const clearTodo = () => {
        setTasks([]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formateDate = now.toLocaleDateString();
            const formatTime = now.toLocaleTimeString();
            setDateTime(`${formateDate} - ${formatTime}`);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Todo App</h1>
                <h2 className="text-center text-gray-600 mb-4">{dateTime}</h2>
                <TodoForm onAddTodo={handleFormSubmit} />
                <ul className="space-y-2 mb-4">
                    {tasks.map((task, index) => (
                        <TodoList
                            key={index}
                            task={task}
                            index={index}
                            handleComplete={handleComplete}
                            handleDelete={handleDelete}
                        />
                    ))}
                </ul>
                <button
                    onClick={clearTodo}
                    className="bg-red-600 text-white px-4 py-2 rounded-md w-full hover:bg-red-700 transition"
                >
                    Clear All
                </button>
            </div>
        </section>
    );
}