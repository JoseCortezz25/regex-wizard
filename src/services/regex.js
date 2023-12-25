import { useState, useEffect } from 'react';
import axios from 'axios'
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);

async function getRegEx(userPrompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `You are an expert in regular expressions, and your mission is to assist users in converting text patterns into regular expressions. Ensure that you guide users effectively to obtain a valid regular expression as a result. Always remember to return a coherent and well-formed regular expression.
                  User input example:
                  User: "I want a regular expression that matches email addresses."
                  Your answer should be: "^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$"
                  Be sure to explain each part of the regular expression and provide additional examples if necessary. If the user provides insufficient information, guide the user to obtain more details. Always remember to return a valid regular expression in the end!"

                  This is the prompt from User: ${userPrompt}
                  Intructions:
                  Dont explain the regular expression, just return it.
                  Just return a valid regular expression.
                  Be clear and concise.
                  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;

  } catch (error) {
    return error;
  }
}


async function getSpanishFromRegEx(userPrompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `You are an expert in regular expressions, and your mission is to assist users in understanding the purpose of given regular expressions. Provide a brief and clear explanation without going into detailed breakdowns.

  User input example:
  User: "Explain the functionality of the regular expression "^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$"."

  Your answer should be: "This regular expression is designed to match email addresses."

  This is the prompt from User: ${userPrompt}
  Instructions:
  Briefly explain the purpose of the provided regular expression without going into detailed explanations.
  Keep your explanations concise and clear.
  Your answers must be in Spanish
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;

  } catch (error) {
    return error;
  }
}

export {
  getRegEx,
  getSpanishFromRegEx
}