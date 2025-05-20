import "./style.css"

export default function EventPropagation() {

    const grandParent = () => {
        console.log("GrandParent Clicked")
    }

    const parent = () => {
        console.log("Parent Clicked")
    }

    const child = (event) => {
        console.log(event)
        event.stopPropagation();
        console.log("Child Clicked")
    }

    return (
        <div>
            <section className="main">
                <div className="g-div" onClickCapture={grandParent}>GrandParents</div>
                <div className="p-div" onClickCapture={parent}>Parents</div>
                <div className="c-div" onClickCapture={child}>Child</div>
            </section>
        </div>
    )
}
