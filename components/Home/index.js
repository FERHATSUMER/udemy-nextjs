import React, { useState } from "react";
import Data from "../assets/data.json";
import styles from "./styles.module.css";
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className={styles.container}>
      <h1>Kurtlar Vadisi Konseyi Üyeleri</h1>
      <div className={styles.inputContainer}>
        <input
          className={styles.search}
          type="text"
          placeholder="Konsey Üyesi Giriş..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className={styles.dataContainer}>
        {
            Data
            .filter((val)=>{
            if(searchTerm==""){
                return val;
            }else if (val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                return val;
            }   
            }).map((val)=>{
                return ( 
            <div className={styles.data} key={val.id}>
                <img className={styles.img} src={val.image} />
                <h3 className={styles.title}>{val.title}</h3>
                <p className={styles.parg}>{val.Description}</p>
            </div>)
            })
        }
      </div>
    </div>
  );
};

export default Home;
