import List from "../components/Movie/Movie"
import Profile from '../images/info2.png'
const Movies = ()=>{
    const movies = JSON.parse(window.localStorage.getItem("genres"))
    return(
        <>
        <img alt=""src={Profile} style={{position:"absolute",top:"2vh",right:"3vw",height:"60px",width:"60px"}}/>
        <div style={{width:"100vw",minHeight:"100vh",background:"black",overflowX:"hidden"}}>
        <p style={{fontFamily:'Single Day',fontStyle: "normal",color:"green",fontSize:"3rem",margin:"1vw"}}>Super app</p>
        <p style={{fontFamily:'Roboto',fontStyle: "normal",color:"white",fontSize:"2rem",margin:"3vw"}}>Entertainment according to your choice</p>
        {movies.map((movie)=><List genre={movie}/>)}
        </div>
        </>
    )
}


export default Movies