import seriesdata from "../api/data.json"
import SeriesCard from './SeriesCard'
import styles from './Netflix.module.css'

const NetflixCard = () => {
    return (
        <div className={styles["cards-container"]}>
            {seriesdata.map((x) => (
                <SeriesCard key={x.id} x={x} />
            ))}
        </div>
    )
}

export default NetflixCard