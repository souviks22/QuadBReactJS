import useGet from "../../hooks/useGet"
import { Link } from "react-router-dom"
import ShowTile from '../../components/ShowTile/ShowTile'
import styles from './Shows.module.css'

const Shows = () => {
    const movies = useGet('https://api.tvmaze.com/search/shows?q=all')
    return (
        <div className={`container ${styles.movies}`}>
            {movies.map(movie =>
                <Link to={`/${movie.show.id}`} key={movie.show.id}><ShowTile details={movie} /></Link>)
            }
        </div>
    )
}

export default Shows