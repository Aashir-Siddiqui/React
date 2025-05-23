import React from 'react';
import { FaCheck } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export default function TodoList({ task, index, handleComplete, handleDelete }) {
    return (
        <li
            key={index}
            className="flex items-center justify-between p-2 bg-gray-50 rounded-md border border-gray-200"
        >
            <span
                className={`flex-1 ${task.completed ? "line-through text-gray-500" : "text-gray-800"}`}
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
    );
}