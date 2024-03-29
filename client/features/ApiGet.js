import React, { useEffect, useState } from "react";
import styles from "../features/styles/ApiGet.module.css";

const ApiGet = () => {
  const [data, setData] = useState({ text: "", author: "" });

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const randomQuote = data[Math.floor(Math.random() * data.length)];
        setData(randomQuote);
      });
  }, []);

  return (
    <section className={styles.quotes}>
      <h2 className={styles.homeHeader}>Quote of the Day</h2><br/>
      <p>{data.text}</p>
      <br/>
      <small>- {data.author}</small>
      <br/>
      <br/>
    </section>
  );
};
export default ApiGet;
