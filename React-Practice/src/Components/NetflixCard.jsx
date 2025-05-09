import seriesdata from "../api/data.json"

const NetflixCard = () => {
    return (
        <>
            <div className="container">
                {seriesdata.map((x) => {
                    return (
                        <div key={x.id} className="card">
                            <img src={x.img_url} alt={x.img_url} className="card-img" />
                            <div className="card-content">
                                <h2 className="card-title">Name: {x.name}</h2>
                                <p className="card-rating">Rating: {x.rating}</p>
                                <p className="card-rating">Description: {x.description}</p>
                                <p className="card-rating">Cast: {x.cast}</p>
                                <a href={x.watch_url} target="_blank" className="card-rating"></a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default NetflixCard