import styles from   './Left.module.css'
import BackgroundImage from '../../images/main.png'
const Left = ()=>{
    return(
        <> 
            <div className={styles.up}>
                <p>Already Have an Account ?</p>
                <button>LOGIN</button>
            </div>
            <div className={styles.down}>
                <p>Discover new things on SuperApp</p>
            </div>
            <img src={BackgroundImage}/>
        </>
    )
}

export default Left