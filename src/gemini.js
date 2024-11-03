  // const {
  //     GoogleGenerativeAI,
  //     HarmCategory,
  //     HarmBlockThreshold,
  //   } = require("@google/generative-ai");
    
  //   const apiKey = AIzaSyBTh4wgfwy2fiaQSF7n_QsQpZ3VhdJVV5I ;
  //   const genAI = new GoogleGenerativeAI(apiKey);
    
  //   const model = genAI.getGenerativeModel({
  //     model: "gemini-1.5-flash",
  //   });
    
  //   const generationConfig = {
  //     temperature: 1,
  //     topP: 0.95,
  //     topK: 40,
  //     maxOutputTokens: 8192,
  //     responseMimeType: "text/plain",
  //   };
    
  //   async function run() {
  //     const chatSession = model.startChat({
  //       generationConfig,
  //       history: [
  //       ],
  //     });
    
  //     const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  //     console.log(result.response.text());
  //   }
    
  //   run();

  // src/FinanceChat.js
import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = 'AIzaSyBTh4wgfwy2fiaQSF7n_QsQpZ3VhdJVV5I';
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
};

const FinanceChat = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse('');

    try {
      const chatSession = model.startChat({ generationConfig, history: [] });
      const result = await chatSession.sendMessage(input);
      setResponse(result.response.text());
    } catch (error) {
      console.error('Error:', error);
      setResponse('An error occurred while fetching the response.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Finance Chat</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a finance-related question"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Ask'}
        </button>
      </form>
      {response && (
        <div>
          <h3>Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default FinanceChat;