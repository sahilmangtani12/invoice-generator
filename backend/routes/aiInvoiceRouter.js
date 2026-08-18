import express from "express";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const aiInvoiceRouter = express.Router();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

function buildInvoicePrompt(promptText) {
  return `
Return ONLY valid JSON.

{
  "invoiceNumber":"",
  "issueDate":"",
  "dueDate":"",
  "fromBusinessName":"",
  "fromEmail":"",
  "fromAddress":"",
  "fromPhone":"",
  "client":{
    "name":"",
    "email":"",
    "address":"",
    "phone":""
  },
  "items":[
    {
      "id":"1",
      "description":"",
      "qty":1,
      "unitPrice":0
    }
  ],
  "taxPercent":18,
  "notes":""
}

User Input:
${promptText}
`;
}

aiInvoiceRouter.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt required",
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: buildInvoicePrompt(prompt),
    });

    const text = response.text;

    const firstBrace = text.indexOf("{");
    const lastBrace = text.lastIndexOf("}");

    const jsonText = text.slice(firstBrace, lastBrace + 1);

    const data = JSON.parse(jsonText);

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

export default aiInvoiceRouter;