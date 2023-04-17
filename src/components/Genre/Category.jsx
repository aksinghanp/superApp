import styles from './Category.module.css'
import Chips from '../Global/Chips'
import Block from '../Global/Block.jsx'
import {genres} from  "../Global/data.js"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Category = ()=>{
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()
    const handleSignUp = ()=>{
        window.localStorage.setItem("genres", JSON.stringify([...categories]));
        navigate("/browse");
    }
    return (
        <div className={styles.body}>
            <div className={styles.left}>
                <p className={styles.heading}>Super app</p>
                <p className={styles.subHeading}>Choose your entertainment category</p>
                <div>
                <Chips categories={categories} color={"green"}  setCategories={setCategories}/>
                </div>
            </div>
            <div className={styles.right}>
                {genres.map((data,idx)=>
                    <Block data={data} idx={idx} categories={categories}  setCategories={setCategories}/>
                )}
            </div>
            <button className={styles.signUp} onClick={handleSignUp}>Next Page</button>
        </div>
    )
}



export default Category