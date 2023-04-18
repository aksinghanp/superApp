import Profile from '../../../images/profileBig.png'
import Chips from "./Chip"
import styles from './Info.module.css';

const Info = () => {
  const myinfo = JSON.parse(window.localStorage.getItem('userData'));
  const genre = JSON.parse(window.localStorage.getItem('genres'));

  return (
    <div className={styles.infoContainer}>
      <div className={styles.profileImage}>
        <img src={Profile} alt="profile" />
      </div>
      <div className={styles.infoDetails}>
        <p className={styles.infoName}>{myinfo.name}</p>
        <p className={styles.infoMail}>{myinfo.email}</p>
        <p className={styles.infoUsername}>{myinfo.username}</p>
        <Chips categories={genre} color={'#9F94FF'} />
      </div>
    </div>
  );
};


export default Info