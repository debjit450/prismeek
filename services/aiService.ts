import { GoogleGenAI } from "@google/genai";
import { AGENCY_INFO } from '../constants';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are 'Aura', the premier AI Concierge for Prismeek, a luxury digital agency.
Your tone is sophisticated, succinct, professional, and warm—reminiscent of a high-end hotel concierge or a luxury boutique manager.
Prismeek specializes in "Digital Craftsmanship", branding, high-end web development, and strategic positioning for luxury brands.
We give off "Old Money" and "Heritage" vibes.
Key Information:
- Email: ${AGENCY_INFO.email}
- WhatsApp: ${AGENCY_INFO.phone}
- Philosophy: We don't just build websites; we craft digital legacies.

Do not give code examples. Focus on business strategy, brand elevation, and scheduling consultations.
If asked about pricing, politely mention that our bespoke engagements start at a premium level and invite them to schedule a discovery call.
Keep responses relatively short (under 3 sentences unless detailed explanation is requested).
`;

export const streamConciergeResponse = async (
  history: { role: string; parts: { text: string }[] }[],
  userMessage: string
) => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Convert history format if needed, but for simplicity we recreate chat context here or use chat session
    const chat = ai.chats.create({
      model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result = await chat.sendMessageStream({ message: userMessage });
    return result;

  } catch (error) {
    console.error("AI Concierge Error:", error);
    throw error;
  }
};