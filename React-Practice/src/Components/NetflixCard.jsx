import seriesdata from "../api/data.json"
import SeriesCard from './SeriesCard'

const NetflixCard = () => {
    return (
        <div className="cards-container">
            {seriesdata.map((x) => (
                <SeriesCard key={x.id} x={x} />
            ))}
        </div>
    )
}

export default NetflixCard