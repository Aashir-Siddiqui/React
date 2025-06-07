import React, { useId } from 'react'

// export default function Index() {

//     const nameId = useId()
//     const emailId = useId()

//   return (
//     <form>
//       <div>
//         <label htmlFor={nameId}>Name: </label>
//             <input type="text" id={nameId}/>
//       </div>
//       <div>
//         <label htmlFor={emailId}>Email: </label>
//             <input type="text" id={emailId}/>
//       </div>
//       <button>Submit</button>
//     </form>
//   )
// }

export default function Index() {

    const id = useId()

  return (
    <form>
      <div>
        <label htmlFor={id + "nameId"}>Name: </label>
            <input type="text" id={id + "nameId"}/>
      </div>
      <div>
        <label htmlFor={id + "emailId"}>Email: </label>
            <input type="text" id={id + "emailId"}/>
      </div>
      <button>Submit</button>
    </form>
  )
}
