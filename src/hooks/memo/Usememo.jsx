import React, { useMemo, useState } from 'react'

const Expense = () => {

    const sum = () => {
        let i = 0
        for (i = 0; i <= 1000000000; i++) {
            i = i + 1
        }

        return i
    }

    // const total = sum()
    const total = useMemo(() => sum(), [])

    return <p>Sum: {total}</p>

}


const UseMemoComponent = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-black text-white ">
            <Expense />
            <button
                onClick={() => setCount(count + 1)}
                className="py-3 px-6 bg-cyan-400 rounded-sm"
            >
                Re-render Parent
            </button>
            <p>Parent re-renders: {count}</p>
        </div>
    );
}

export default UseMemoComponent