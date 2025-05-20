import React, { useState } from 'react'
import "./style.css"

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "bob", age: 22 },
//   { name: "rohan", age: 35 },
//   { name: "naved", age: 30 },
//   { name: "vasim", age: 40 },
// ];

export const DerivedState = () => {

    const [users, setusers] = useState([
        { name: "Alice", age: 25 },
        { name: "bob", age: 22 },
        { name: "saad", age: 35 },
        { name: "naveed", age: 30 },
        { name: "aashir", age: 40 },
    ])

    const userCount = users.length

    const averageAge = users.reduce((acc, currElem) => acc + currElem.age , 0) / userCount

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {user.name} - {user.age} years old
                    </li>
                ))}
            </ul>
            <p>Total Users: {userCount}</p>
            <p>Users Average Age: {averageAge}</p>
        </div>
    )
}
