import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(0);

    const increment = () => {
        setCount(count + step);
    };

    const decrement = () => {
        setCount(count - step);
    };

    const reset = () => {
        setCount(0);
        setStep(0);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Counter</h1>
                <p className="text-4xl font-semibold text-center text-blue-600 mb-6">{count}</p>
                <div className="mb-6">
                    <input
                        type="number"
                        value={step}
                        onChange={(e) => setStep(Number(e.target.value))}
                        placeholder="Enter step value"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex items-center justify-center gap-4">
                    <button
                        onClick={increment}
                        className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                    >
                        Increment
                    </button>
                    <button
                        onClick={decrement}
                        disabled={count <= 0}
                        className="bg-blue-500 text-white px-5 py-2 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors duration-200"
                    >
                        Decrement
                    </button>
                    <button
                        onClick={reset}
                        className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}