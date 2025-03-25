import { GoogleGenerativeAI } from "@google/generative-ai";

// Replace with your actual API key
const API_KEY = "AIzaSyD16pyGls425Mdqc_5XKxnahzrBqI2A7YE";

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function generateResponse(prompt) {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error generating content:", error);
    return "Failed to get a response.";
  }
}
