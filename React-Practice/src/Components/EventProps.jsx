export const EventProps = () => {

    const handleUser = (user) => {
        alert(`Hey ${user}`)
    }

    const hoverUser = () => {
        alert("Thank for hovering me")
    }

    return (
        <>
            <WelcomeUser
                ButtonClick={() => handleUser("Aashir")}
                MouseHover={hoverUser}
            />
        </>
    )
}

const WelcomeUser = (props) => {
    const { ButtonClick, MouseHover } = props
    const greeting = () => {
        alert(`Hey User, Welcome`)
        ButtonClick()
    }

    return (
        <>
            <button onClick={ButtonClick}>Click Me</button>
            <button onMouseEnter={MouseHover}>Hover Me</button>
            <button onClick={greeting}>Greeting</button>
        </>
    )
}