import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { getLocalStorageTodo, setLocalStorageTodo } from './TodoLocalStorage';
import Swal from 'sweetalert2';
import { FaSun, FaMoon } from 'react-icons/fa';
import { SiTodoist } from "react-icons/si";

export default function Todo() {
    const [tasks, setTasks] = useState(() => getLocalStorageTodo());
    const [dateTime, setDateTime] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(true);

    const showError = (title, text) => Swal.fire({ icon: "error", title, text });
    const showSuccess = (title, text) => Swal.fire({ icon: "success", title, text });

    useEffect(() => {
        document.documentElement.classList.add('dark');
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    const handleFormSubmit = (inputValue) => {
        if (!inputValue.trim()) return;
        if (tasks.some(task => task.text === inputValue.trim())) return;
        setTasks(prevTasks => [
            ...prevTasks,
            { text: inputValue.trim(), completed: false, id: Date.now() }
        ]);
    };

    const handleEditTodo = (updatedText) => {
        if (!updatedText.trim()) return;
        setTasks(prevTasks =>
            prevTasks.map((task, i) =>
                i === editIndex ? { ...task, text: updatedText.trim() } : task
            )
        );
        setEditIndex(null);
        setEditText("");
    };

    const handleComplete = (index, task) => {
        setTasks(prevTasks =>
            prevTasks.map((task, i) =>
                i === index ? { ...task, completed: !task.completed } : task
            )
        );
        if (task.completed) {
            return showError("Task not completed!", "Your task has not been completed.")
        }
        return showSuccess("Task Completed!", "Your task has been completed successfully.");
    };

    const handleDelete = (index) => {
        Swal.fire({
            title: "Are you sure!",
            icon: "question",
            iconHtml: "؟",
            text: "Your todo has been deleted?",
            confirmButtonText: "Yes",
            cancelButtonText: "No",
            showCancelButton: true,
            showCloseButton: true,
            timer: 3000
        }).then((result) => {
            if (result.isConfirmed) {
                setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
                showSuccess("Todo Deleted!", "Your todo has been deleted successfully.");
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                showError("Cancelled", "Your todo were not deleted.");
            }
        });
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditText(tasks[index].text);
    };

    const clearTodo = () => {
        Swal.fire({
            title: "Are you sure!",
            icon: "question",
            iconHtml: "؟",
            confirmButtonText: "Yes",
            cancelButtonText: "No",
            showCancelButton: true,
            showCloseButton: true,
            timer: 3000
        }).then((result) => {
            if (result.isConfirmed) {
                setTasks([]);
                setEditIndex(null);
                setEditText("");
                showSuccess("Clear all!", "All todos have been cleared successfully.");
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                showError("Cancelled", "Your todos were not deleted.");
            }
        });
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

    useEffect(() => {
        setLocalStorageTodo(tasks);
    }, [tasks]);

    return (
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 flex items-center gap-1.5"> <span className=' dark:text-violet-700'> <SiTodoist /> </span>Todo App</h1>
                    <button
                        onClick={toggleTheme}
                        className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition cursor-pointer"
                    >
                        {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                    </button>
                </div>
                <h2 className="text-center text-gray-600 dark:text-gray-400 mb-4">{dateTime}</h2>
                <TodoForm
                    onAddTodo={handleFormSubmit}
                    editText={editText}
                    editMode={editIndex !== null}
                    onEditTodo={handleEditTodo}
                />
                <ul className="space-y-2 mb-4">
                    {tasks.map((task, index) => (
                        <TodoList
                            key={task.id}
                            task={task}
                            index={index}
                            handleComplete={handleComplete}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                        />
                    ))}
                </ul>
                <button
                    onClick={clearTodo}
                    className="bg-red-600 dark:bg-violet-700 text-white cursor-pointer px-4 py-2 rounded-md w-full hover:bg-red-700 dark:hover:bg-violet-800 transition"
                >
                    Clear All
                </button>
            </div>
        </section>
    );
}