import React, { useState } from 'react'

export const LiftingState = () => {

    const [inputValue, setInputValue] = useState("")

    return (
        <div>
            <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
            <DisplayComponent inputValue={inputValue} />
        </div>
    )
}


const InputComponent = ({ inputValue, setInputValue }) => {
    return (
        <div>
            <input type="text" placeholder='Enter input value' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </div>
    )
}


const DisplayComponent = ({ inputValue }) => {
    return (
        <p>The current input value is: {inputValue}</p>
    )
}