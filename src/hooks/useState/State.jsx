import { useState } from "react";

export default function State() {
    const [count, setcount] = useState(0);

    const handleCount = () => {
        setcount(prevCount => prevCount + 1);
    };

    return (
        <>
            <div className="main">
                <h1>{count}</h1>
                <button onClick={handleCount}>Increment</button>
            </div>
            <ChildComponent count={count} />
        </>
    );
}

function ChildComponent({ count }) {
    console.log("Child Component rendered");
    return (
        <div className="main">
            <h2> Child Component - {count} </h2>
        </div>
    );
}