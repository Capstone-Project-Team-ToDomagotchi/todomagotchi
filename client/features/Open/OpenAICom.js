import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import styles from "../styles/OpenAICom.module.css"

function OpenAI() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post('/ask', { prompt, timeout:8000 }, );
      setResponse(data.message);
      setPrompt('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className={styles.openAI}>
      <form onSubmit={handleSubmit}>
        <label>
          Talk to me: 
          </label>
          <textarea className='chat'
            type="text"
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
          />
        <button type="submit">Submit</button>
      </form>
      {response && <p>{response}</p>}
    </section>
  );
}

export default OpenAI;
