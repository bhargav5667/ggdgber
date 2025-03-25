import React, { useState } from "react";
import { generateResponse } from "./geminiService";

const GeminiChat = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const aiResponse = await generateResponse(input);
    setResponse(aiResponse);
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">Gemini AI Chat</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          className="border p-2 w-full rounded"
        />
        <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          Send
        </button>
      </form>
      {response && (
        <div className="border p-4 rounded bg-gray-100">
          <strong>AI Response:</strong> {response}
        </div>
      )}
    </div>
  );
};

export default GeminiChat;
