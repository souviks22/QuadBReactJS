import { useEffect, useRef } from 'react'
import styles from './BookForm.module.css'

const BookForm = props => {

    const firstnameRef = useRef(), lastnameRef = useRef(), emailRef = useRef()
    const showNameRef = useRef(), showLanguageRef = useRef(), showRuntimeRef = useRef()

    useEffect(() => {
        if (localStorage.getItem('firstname')) {
            firstnameRef.current.value = localStorage.getItem('firstname')
            lastnameRef.current.value = localStorage.getItem('lastname')
            emailRef.current.value = localStorage.getItem('email')
        }
        showNameRef.current.value = props.show.name
        showLanguageRef.current.value = props.show.language
        showRuntimeRef.current.value = props.show.runtime
    }, [])

    const onSubmitHandler = event => {
        event.preventDefault()
        localStorage.setItem('firstname', event.target.firstname.value)
        localStorage.setItem('lastname', event.target.lastname.value)
        localStorage.setItem('email', event.target.email.value)
        props.onBookCompleteHandler()
    }

    return (<form className={`form-control ${styles.booking}`} onSubmit={onSubmitHandler}>
        <section className="row">
            <div className="form-group col-md-6">
                <label htmlFor="firstname">First Name</label>
                <input type="text" id="firstname" name="firstname" className="form-control" ref={firstnameRef} required />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" id="lastname" name="lastname" className="form-control" ref={lastnameRef} required />
            </div>
        </section>
        <section className="form-group row">
            <div className="col-md-2">
                <label htmlFor="email" >Email</label>
            </div>
            <div className="col-md-10">
                <input type="email" id="email" name="email" className="form-control" ref={emailRef} required />
            </div>
        </section>
        <section className="form-group row">
            <div className="col-md-2">
                <label htmlFor="show">Show</label>
            </div>
            <div className="col-md-10">
                <input type="text" id="show" name="show" className="form-control" ref={showNameRef} required />
            </div>
        </section>
        <section className="row">
            <div className="form-group col-md-6">
                <label htmlFor="language">Language</label>
                <input type="text" id="language" name="language" className="form-control" ref={showLanguageRef} required />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="runtime">Runtime</label>
                <input type="number" id="runtime" name="runtime" className="form-control" ref={showRuntimeRef} required />
            </div>
        </section>
        <section className={styles.actions}>
            <button className="btn btn-success" type='submit'>Confirm Booking</button>
            <button className="btn btn-danger" type='button' onClick={props.onCancelHandler}>Cancel</button>
        </section>
    </form>)
}

export default BookForm