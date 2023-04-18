import { useEffect, useState } from "react"
import styles from './Movie.module.css'
const List = ({genre})=>{
    const [movies, setMovies] = useState([])
    console.log(movies)
    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '9c6062a4d3msh24e387240b4c239p19a062jsn00274fa12410',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };
        const fetchMovies = async()=>{
            const response=await fetch(`https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&year=2022`, options)
            const data=await response.json();
            setMovies(data.results.splice(4,4));
              
            //  console.log(data);
        }
        fetchMovies();
    },[])
    return(
        <>
        <p className={styles.heading}>{genre}</p>
        <div style={{display:"flex",overflow:"hidden",marginLeft:"2vw"}}>
            {movies.map((movie,idx)=>{
                return (
                <div key={idx} style={{width:"20vw",margin:"2vw"}}>
                    <img src={movie.primaryImage.url} style={{objectFit:"cover", width:"20vw", height:"20vh",borderRadius:"12px"}}/>
                </div>
                )
            })}
        </div>
        </>
    )
}

export default List