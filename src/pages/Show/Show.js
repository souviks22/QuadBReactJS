import { useParams } from "react-router-dom"
import useGet from "../../hooks/useGet"
import ShowBook from '../../components/ShowBook/ShowBook'
import styles from './Show.module.css'

const Show = () => {
    const { id } = useParams()
    const movie = useGet(`https://api.tvmaze.com/shows/${id}`)

    return (<div className={`container ${styles.show}`}>
        {Object.keys(movie).length && <ShowBook show={movie} />}
    </div>)
}

export default Show