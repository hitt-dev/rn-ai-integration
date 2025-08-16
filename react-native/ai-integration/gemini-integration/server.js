require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { GoogleGenAI } = require("@google/genai");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

app.post("/api/gemini", async (req, res) => {
  const start = Date.now();
  try {
    const prompt = req.body.prompt || "Explain how AI works in a few words";
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    // @ts-ignore
    const text = response.text || "No response";
    console.log("Gemini API latency:", Date.now() - start, "ms");
    res.json({ text });
  } catch (error) {
    res.status(500).json({ error: error.message || "Unknown error" });
  }
});

app.listen(port, () => {
  console.log(`Gemini backend listening at http://localhost:${port}`);
});