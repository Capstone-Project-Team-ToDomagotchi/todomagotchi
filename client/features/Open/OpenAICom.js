import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function OpenAI() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post('/ask', { prompt }, );
      setResponse(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Ask me anything: 
          <input
            type="text"
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
}

export default OpenAI;
