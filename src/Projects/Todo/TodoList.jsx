import React from 'react';
import { FaCheck } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export default function TodoList({ task, index, handleComplete, handleDelete, handleEdit }) {
    return (
        <li
            className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md"
        >
            <span
                className={`flex-1 ${task.completed ? "line-through text-gray-500 dark:text-gray-400" : "text-gray-800 dark:text-gray-200"}`}
            >
                {task.text}
            </span>
            <div className="flex space-x-2">
                <button
                    onClick={() => handleComplete(index, task)}
                    className="text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-500 transition"
                >
                    <FaCheck />
                </button>
                <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-500 transition"
                >
                    <MdDeleteForever />
                </button>
                <button
                    onClick={() => handleEdit(index)}
                    className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500 transition"
                >
                    <FaEdit />
                </button>
            </div>
        </li>
    );
}