
import { GoogleGenAI } from "@google/genai";
import { Vehicle } from "../types";

// Always use the API key directly from the environment variable as per SDK requirements.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askAutomotiveExpert = async (
  vehicle: Vehicle,
  question: string,
  history: { role: 'user' | 'assistant', content: string }[]
) => {
  const model = 'gemini-3-flash-preview';
  
  const systemInstruction = `
    Tu es un expert automobile senior de NADO, une plateforme premium au Maroc.
    Ton ton est professionnel, calme, rassurant et expert.
    
    Voici les détails du véhicule dont tu parles :
    - Modèle: ${vehicle.brand} ${vehicle.model}
    - Année: ${vehicle.year}
    - Prix: ${vehicle.price.toLocaleString()} MAD
    - Kilométrage: ${vehicle.specs['Kilométrage']}
    - Moteur: ${vehicle.specs['Moteur']}
    - Description: ${vehicle.description}
    
    Réponds de manière concise aux questions des clients sur :
    1. Les détails techniques du véhicule.
    2. Les options de financement (mensualités, apport).
    3. Pourquoi choisir NADO (confiance, expertise 20 ans, certification).
    4. Propose de contacter via WhatsApp si la question devient trop spécifique ou pour un rendez-vous.
    
    Si l'utilisateur demande quelque chose hors sujet, redirige-le poliment vers l'achat du véhicule.
  `;

  try {
    const chat = ai.chats.create({
      model,
      config: {
        systemInstruction,
      },
    });

    const response = await chat.sendMessage({ message: question });
    return response.text || "Désolé, je ne parviens pas à traiter votre demande pour le moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Une erreur est survenue lors de la communication avec l'assistant NADO.";
  }
};
