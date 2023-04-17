import Left from '../components/Home/Left'
import Form from '../components/Home/Form'

const Home = ()=>{
    const myStyle={
        display:"flex",
        boxSizing: "border-box"
    }
    return(
        <div style={myStyle}>
        <Left/>
        <Form/>
        </div>
    )
}

export default Home