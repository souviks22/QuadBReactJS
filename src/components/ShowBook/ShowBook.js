import { useState } from 'react'
import BookForm from '../BookForm/BookForm'
import styles from './ShowBook.module.css'

const ShowBook = props => {

    const { name, image, summary, language, genres, runtime, schedule, rating, network } = props.show
    const [isForm, setIsForm] = useState(false)

    const onBookHandler = () => setIsForm(true)
    const onCancelHandler = () => setIsForm(false)

    return (<div className={`row ${styles.show__book}`}>
        <img className={`col-md-4 ${styles.poster}`} src={image.original} alt={name} />
        <section className={`col-md-5 offset-md-1 ${styles.summary}`}>
            <h2 className='display-2'>{name}</h2>
            <ul>
                <li>{language}</li>
                <li>{genres.join(', ')}</li>
                <li>{runtime}m</li>
                <li>{rating.average}</li>
            </ul>
            <div dangerouslySetInnerHTML={{ __html: summary }} />
            <ul>
                <li>{schedule.time}</li>
                <li>{schedule.days.join(', ')}</li>
                <li>{network.country.code}</li>
            </ul>
            {!isForm && <button className={`btn btn-primary`} onClick={onBookHandler}>Book Now</button>}
            {isForm && <BookForm show={props.show} onCancelHandler={onCancelHandler} />}
        </section>
    </div >)
}

export default ShowBook