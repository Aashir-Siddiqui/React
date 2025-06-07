import React, { useRef } from 'react'
// import './index.css'

export default function Form() {
  //   const username = document.getElementById("username");
  //   const password = document.getElementById("password");

  const username = useRef(null);
  const password = useRef(null);

  //   console.log(username);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };

  return (
    <div className='bg-gray-800 text-4xl'>
      <form onSubmit={handleFormSubmit}>
        <input type="text" id="username" ref={username} />
        <br />
        <input type="text" id="password" ref={password} />
        <br />
        <button className='bg-green-500'>Submit</button>
      </form>
    </div>
  );
};
