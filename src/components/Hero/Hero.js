import styles from "./Hero.module.css";
import {useState,useEffect} from "react";
function Hero() {
  const [movie,SetMovie] = useState("");


 async function fetchMovie(){
    const response =  await fetch("https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590");
    
    console.log(response);
    const data = await response.json();
    console.log(data);

    SetMovie(data);

  }

  useEffect(async()=>{
    
  },[fetchMovie]);
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Spiderman</h2>
          <h3 className={styles.hero__genre}>
            Genre: {movie.Genre}
          </h3>
          <p className={styles.hero__description}>
           {movie.plot}
          </p>
          <button className={styles.hero__button}>Watch</button>
        </div>
        <div className="hero__right">
          <img
            className={styles.hero__image}
            src={movie.poster}
            alt={movie.title}
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
