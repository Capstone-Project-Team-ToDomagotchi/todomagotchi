import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/OpenAICom.module.css";
import { selectSingleUser, fetchSingleUser } from "../user/singleUserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function OpenAI() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [history, setHistory] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();

  const singleUser = useSelector(selectSingleUser);

  const { selectPets } = singleUser;

  useEffect(() => {
    if (id){
    dispatch(fetchSingleUser(id));
  }}, [dispatch, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post("/ask", { prompt, timeout: 8000 });
      setResponse(data.message);
      setHistory([...history, { prompt, response: data.message }]);
      setPrompt("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className={styles.openAI}>
      <form onSubmit={handleSubmit}>
        <label>Talk to me:</label>
        <textarea
          className="chat"
          type="text"
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {/* {response && <p>AI: {response}</p>} */}
      <div className={styles.chatHistory}>
        {history.map((chat, index) => (
          <div key={index}>
            <p>{selectPets && selectPets.length && selectPets.map((pet) => {
              return `${pet.name}`;
            })}: {chat.response}</p>
            <p>You: {chat.prompt}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OpenAI;
