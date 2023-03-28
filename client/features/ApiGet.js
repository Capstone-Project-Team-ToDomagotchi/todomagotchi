import React, { useEffect, useState } from "react";

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
    <div>
      <h2>Quote of the Day</h2>
      <p>{data.text}</p>
      <small>{data.author}</small>
      <hr />
    </div>
  );
};
export default ApiGet;
