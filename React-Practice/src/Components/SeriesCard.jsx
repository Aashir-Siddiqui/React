import styled from 'styled-components'
import styles from './Netflix.module.css'
const SeriesCard = ({ x }) => {
    const { img_url, name, rating, description, cast, genre, watch_url } = x

    const ratingClass = rating >= 8.5 ? styles.super : styles.lower

    // Styled-Components object
    const Rating = styled.p({
        color: "#fff",
        fontSize: "1.2rem",
        margin: "0 0 12px",
    })

    // Styled-Components templete literals
    const Title = styled.h2`
        font-size: 1.6rem;
        margin: 0 0 12px;
        color: #fff;
        font-weight: 600;
    `

    return (
        <div className={styles.card}>
            <img src={img_url} alt={name} className={styles["card-img"]} />
            <div className={styles["card-content"]}>
                <Title>Name: {name}</Title>
                <Rating>Rating: <span className={`${ratingClass}`}> {rating} </span></Rating>
                <p className={styles["card-description"]}>Description: {description}</p>
                <p className={styles["card-cast"]}>Cast: {cast.join(', ')}</p>
                <p className={styles["card-cast"]}>Genre: {genre.join(', ')}</p>
                <a href={watch_url} target="_blank" className={styles["card-btn"]}>Watch Now</a>
            </div>
        </div>
    )
}

export default SeriesCard