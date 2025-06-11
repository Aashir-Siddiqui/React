import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';

export default function TodoForm({ onAddTodo, editText, editMode, onEditTodo }) {
    const [inputValue, setInputValue] = useState(editText || "");
    const inputRef = useRef(null);

    const showError = (title, text) => Swal.fire({ icon: "error", title, text });
    const showSuccess = (title, text) => Swal.fire({ icon: "success", title, text });

    useEffect(() => {
        setInputValue(editText || "");
        if (editMode) {
            inputRef.current.focus();
        }
    }, [editText, editMode]);

    const handleChange = (value) => {
        setInputValue(value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim()) {
            if (editMode) {
                onEditTodo(inputValue);
                showSuccess("Todo Edited!", "Your todo has been updated successfully.");
            } else {
                onAddTodo(inputValue);
                showSuccess("Todo Added!", "Your todo has been added successfully.");
            }
            setInputValue("");
        } else {
            Swal.fire({
                title: "Empty Input!",
                icon: "warning",
                text: "Please enter a todo before submitting.",
                timer: 3000
            })
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
                className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-violet-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                ref={inputRef}
            />
            <button
                type="submit"
                className="bg-blue-500 dark:bg-violet-600 text-white text-sm px-4 py-2 rounded-r-md hover:bg-blue-600 dark:hover:bg-violet-700 transition cursor-pointer"
            >
                {editMode ? "Update Todo" : "Add Todo"}
            </button>
        </form>
    );
}