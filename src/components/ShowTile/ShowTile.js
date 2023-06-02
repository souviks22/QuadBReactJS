import styles from './ShowTile.module.css'

const ShowTile = props => {

    const { name, language, genres, image, runtime, premiered, status } = props.details.show

    return (<div className={`row ${styles.tile}`}>
        <img className={`col-md-4 img-fluid ${styles.image}`} src={image.medium} alt={name} />
        <section className={`col-md-7 offset-md-1 ${styles.details}`}>
            <h2 className='display-4'>{name}</h2>
            <ul className={styles.basic__data}>
                <li>{language}</li>
                <li>{genres.join(', ')}</li>
                <li>{runtime}m</li>
            </ul>
            <p><span className={styles.label}>Score</span>{props.details.score}</p>
            <p><span className={styles.label}>Premiered On</span>{premiered}</p>
            <p className={styles.status}>{status}</p>
        </section>
    </div>)
}

export default ShowTile