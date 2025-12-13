/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import { GoogleGenAI } from "@google/genai";
import { PAPERS } from '../constants';

const getSystemInstruction = () => {
  const paperContext = PAPERS.map(p => 
    `- "${p.title}" (${p.publicationDate}). Section: ${p.category}. Lead: ${p.abstractPreview}`
  ).join('\n');

  return `You are the Executive Editor for "The Auto Times", a prestigious automotive newspaper. 
  Your tone is expert, passionate, and precise (like a mix of Top Gear and Car & Driver).
  
  Here is our current news wire:
  ${paperContext}
  
  Answer user questions about these stories, car specs, or industry trends.
  If asked about cars not in the wire, provide general automotive knowledge but mention you are checking the archives.
  Keep answers brief (under 3-4 sentences) and professional.`;
};

// Use export to expose functionality
export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    // API key check. Direct access of process.env.API_KEY is preferred.
    if (!process.env.API_KEY) {
      return "I cannot access the news archives at this moment. (Missing API Key)";
    }

    // Always use initialization as requested.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Call generateContent via ai.models
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        ...history.map(h => ({
          role: h.role === 'model' ? 'model' : 'user',
          parts: [{ text: h.text }]
        })),
        { role: 'user', parts: [{ text: newMessage }] }
      ],
      config: {
        systemInstruction: getSystemInstruction(),
      }
    });

    // Directly access text property from response.
    return response.text || "The editorial board is unable to comment at this time.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our archives are currently undergoing maintenance. Please check back later.";
  }
};