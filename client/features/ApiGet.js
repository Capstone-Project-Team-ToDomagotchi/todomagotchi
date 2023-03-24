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
      <p>{data.text}</p>
      <p>{data.author}</p>
    </div>
  );
};
export default ApiGet;
