import React, { useMemo, useState } from 'react'

export default function ReactMemo() {

  const [count, setCount] = useState(0)

  const myBiodata = useMemo(() => {
    return {
      name: "Aashir",
      age: 18
    }
  }, [])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  )
}
