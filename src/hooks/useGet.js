import { useState, useEffect } from "react"

const useGet = (url) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getShows = async () => {
            const res = await fetch(url)
            const data = await res.json()
            setData(data)
        }
        try {
            getShows()
        } catch (err) {
            console.log(err)
        }
    }, [url])

    return data
}

export default useGet