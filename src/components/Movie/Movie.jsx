import { useEffect, useState } from "react"
import styles from './Movie.module.css'


const List = ({genre}) => {
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };
        const fetchMovies = async()=>{
            const response = await fetch(`https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&year=2022`, options)
            const data = await response.json();
            setMovies(data.results.splice(4,4));
        }
        fetchMovies();
    }, [])

    return(
        <>
            <p className={styles.heading}>{genre}</p>
            <div className={styles["list-container"]}>
                {movies.map((movie,idx)=>{
                    return (
                    <div key={idx} className={styles["list-item"]}>
                        <img src={movie.primaryImage.url} alt={movie.title} />
                    </div>
                    )
                })}
            </div>
        </>
    )
}

export default List
