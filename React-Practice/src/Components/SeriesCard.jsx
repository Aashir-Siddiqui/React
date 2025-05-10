const SeriesCard = ({x}) => {
    const { img_url, name, rating, description, cast, genre, watch_url } = x
    return (
        <div className="card">
            <img src={img_url} alt={name} className="card-img" />
            <div className="card-content">
                <h2 className="card-title">Name: {name}</h2>
                <p className="card-rating">Rating: {rating}</p>
                <p className="card-description">Description: {description}</p>
                <p className="card-cast">Cast: {cast.join(', ')}</p>
                <p className="card-cast">Genre: {genre.join(', ')}</p>
                <a href={watch_url} target="_blank" className="card-btn">Watch Now</a>
            </div>
        </div>
    )
}

export default SeriesCard