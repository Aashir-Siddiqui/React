import React from 'react'
import styled from 'styled-components'

export default function EventHandling() {

    const btn =  styled.button({
        padding: "6px 18px",
        color: "white",
        backgroundColor: "red",
        cursor: "pointer",
        margin: "20px",
    })

    const handle = (e) => {
        alert("Hey I am onClick Event")
    }

    const users = (user) => {
      alert(`Hey ${user}`)
    }

  return (
    <div>
      <btn onClick={handle}>Button 1</btn>
      <br />
      <btn onClick={(e) => handle(e)}>Button 2</btn>
      <br />
      <btn onClick={(e) => console.log(e)}>Button 3</btn>
      <br />
      <btn onClick={() => alert("I am inline event function")}>Button 4</btn>
      <br />
      <btn onClick={() => users("Aashir")}>Button 5</btn>
      <br />
      <btn onClick={() => users("Ahmed")}>Button 6</btn>
    </div>
  )
}
