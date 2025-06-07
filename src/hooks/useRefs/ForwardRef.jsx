import React, { useRef, forwardRef, useId } from 'react'

export default function ForwardRef() {

    const username = useRef(null)
    const password = useRef(null)

    const handleForm = (e) => {
        e.preventDefault();
        console.log(username.current.value, password.current.value)
    }

    return (
        <div className='min-h-screen bg-gray-400 text-gray-800 flex items-center justify-center'>
            <form
                onSubmit={handleForm}
                className="bg-white p-8 rounded-lg shadow-lg flex flex-col gap-6 w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold text-center">Login Form</h2>
                <ReactBeafore19 label="Username" ref={username} />
                <ReactBeafore19 label="Password" ref={password} />
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

// const ReactBeafore19 = forwardRef((props, ref) => {
//     const id = useId();
//     return (
//         <div className="flex flex-col gap-1">
//             <label htmlFor={id} className="text-sm font-medium text-gray-700">
//                 {props.label}
//             </label>
//             <input
//                 id={id}
//                 type="text"
//                 ref={ref}
//                 className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//         </div>
//     );
// });


const ReactBeafore19 = ({label, ref}) => {
    const id = useId();
    return (
        <div>
            <label htmlFor={id} className="text-sm font-medium text-gray-700">{label}</label>
            <input type="text" ref={ref}  className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
        </div>
    );
};
