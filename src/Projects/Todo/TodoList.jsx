import React from 'react';
import { FaCheck } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export default function TodoList({ task, index, handleComplete, handleDelete, handleEdit }) {
    return (
        <li
            className="flex items-baseline-last justify-between p-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md w-full"
        >
            <span
                className={`flex-1 break-words whitespace-normal overflow-hidden leading-6 md:leading-7 text-ellipsis pr-2 ${task.completed ? "line-through text-gray-500 dark:text-gray-400" : "text-gray-800 dark:text-gray-200"}`}
            >
                {task.text}
            </span>
            <div className="flex space-x-2 flex-shrink-0">
                <button
                    onClick={() => handleComplete(index, task)}
                    className="text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-500 transition cursor-pointer"
                >
                    <FaCheck />
                </button>
                <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-500 transition cursor-pointer"
                >
                    <MdDeleteForever />
                </button>
                <button
                    onClick={() => handleEdit(index)}
                    className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500 transition cursor-pointer"
                >
                    <FaEdit />
                </button>
            </div>
        </li>
    );
}