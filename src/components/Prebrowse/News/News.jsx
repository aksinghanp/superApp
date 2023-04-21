import { useEffect, useState } from "react"
import styles from "./News.module.css"
const apiKey = process.env.apiKEY

const News = ()=>{
    const [news, setNews] = useState('')
     const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    console.log(news)
    useEffect(()=>{
      const fetchNews = async()=>{
          await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`)  //data extract
               .then(async(data)=>await data.json())   //data json format
               .then((result)=>setNews(result.articles[0]))   //utilization
       }
       fetchNews();
   },[])


useEffect(() => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  const twelveHourFormat = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const strTime = `${twelveHourFormat}:${formattedMinutes} ${ampm}`;
  setTime(strTime);
}, [setTime]);

    useEffect(()=>{
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        const month=(mm<10)?`0${mm}`:mm;
        const date=(dd<10)? `0${dd}`:dd;

        const Curr = date + '-' + month + '-' + yyyy;
        setDate(Curr)
    },[setDate]);
    return (
    <div className={styles.card}>
      <img alt=""src={news.urlToImage} className={styles.image} />
      <div className={styles.description}>
        {news.description}
      </div>
      <div className={styles.overlay}>
        <p className={styles.title}>{news.title}</p>
        <span className={styles.date}>{date}</span>
        <span className={styles.time}>| {time}</span>
      </div>
    </div>
    )
}

export default News