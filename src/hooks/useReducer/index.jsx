import React, { useReducer } from 'react'

export default function Reduce() {

    const initialState = {
        count: 0
    }

    const reducer = (state, action) => {

        console.log(state, action)

        switch (action.type) {
            case "INCREMENT":
                return { count: state.count + 1 }
            case "DECREMENT":
                return { count: state.count - 1 }
            case "RESET":
                return { count: 0 }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className='p-4 flex items-center justify-center flex-col h-lvh'>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </div>
    )
}
