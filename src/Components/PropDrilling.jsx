import React from 'react'

export function Parent() {
    return (
        <>
            <section>
                <h1 className='flex items-center justify-center flex-col bg-gray-800 text-white h-lvh'>
                    Hello, I am Parent Component
                    <Child data={"GrandGrandChild Component"} />
                </h1>
            </section>
        </>
    )
}

function Child(props) {
    return (
        <>
            <h1>
                Hello, I am Child Component
                <GrandChild data={props.data} />
            </h1>
        </>
    )
}

function GrandChild(props) {
    return (
        <>
            <h1>
                Hello, I am GrandChild Component
                <GrandGrandChild data={props.data} />
            </h1>
        </>
    )
}

function GrandGrandChild(props) {
    return (
        <>
            <h1>
                Hello, I am {props.data}
            </h1>
        </>
    )
}


