import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for 'Apex Structures', a premier civil engineering and construction firm. 
You are professional, knowledgeable, and helpful. 
The company specializes in:
1. Residential: Homes, luxury villas, apartment complexes.
2. Commercial: Office buildings, retail spaces, malls.
3. Civil: Bridges, roads, public infrastructure.

Your goal is to:
- Help potential clients with construction-related queries.
- Provide very rough cost estimates (always emphasize these are estimates).
- Explain technical terms (like 'foundation types', 'MEP services', 'structural integrity').
- Encourage users to book a consultation via the contact form.

Keep responses concise, professional, and well-structured using markdown.
`;

export const getGeminiResponse = async (userMessage: string, history: { role: string; content: string }[]) => {
  try {
    // Initializing Gemini client with named parameter and direct environment variable access as per guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // We use gemini-3-flash-preview for fast, smart conversational responses
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        // Mapping history to compatible roles (Gemini expects 'model' instead of 'assistant')
        ...history.map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }]
        })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.9,
      }
    });

    // Accessing .text property directly (not a method call) as per latest SDK guidelines
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my central server. Please contact us directly using the form below.";
  }
};