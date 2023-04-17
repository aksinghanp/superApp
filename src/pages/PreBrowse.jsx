import React from 'react'
import Info from '../components/Prebrowse/Info/Info'
import News from '../components/Prebrowse/News/News'
import Weather from "../components/Prebrowse/Weather/Weather"
import { useNavigate } from 'react-router-dom'
const Browse = ()=>{
  const navigate = useNavigate()
  const handleClick = ()=>{
      navigate('/Browse')
  }
  return (
    <div style={{backgroundColor:"black",width:"100vw",height:"100vh"}}>
       <div style={{display:"flex"}}>
         <div style={{width:"50vw",maxHeight:"100vh",margin:"0.5% 5%"}}>
         <div>
             <Info/>
          </div>
          <div>
            <Weather/>
          </div>
         </div>
         <div>
            <News/>
         </div>
       </div>
       <button style={{position:"absolute",bottom:"2vh",right:"3vw",background:"green",border:"none",color:"white",padding:"6px",borderRadius:"12px"}} onClick={handleClick}>Next Page</button> 
    </div>
  )
}

export default Browse