import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";
import { HOTEL_MENU } from "@/lib/menuData";

// Initialize the GoogleGenAI client with server secret and required headers for telemetry
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// Define our concierge's system instructions
const CONCIERGE_SYSTEM_INSTRUCTION = `
You are the elite AI Butler of "Vardhan Hotel & Bistro", a 5-star boutique hotel in Hubballi, Karnataka, India. 
Your goal is to assist guests in planning their meal, suggesting perfect drink pairings, and answering basic inquiries with exquisite hospitality, warmth, and vegetarian culinary expertise.
Vardhan Hotel is strictly vegetarian, providing exclusively 100% vegetarian culinary creations.

You MUST only recommend items that are ACTUALLY ON THE MENU. Here is Vardhan Hotel's complete current menu:
${JSON.stringify(HOTEL_MENU, null, 2)}

Instructions:
1. Address the guest with utmost courtesy and hospitality. Keep your tone refined, warm, professional, and sophisticated.
2. If the user asks for a recommendation (e.g. food, drinks, vegan options, or combinations), look through the provided Menu items and suggest appropriate matches. Mention exact prices and tags (like Gluten-Free or Signature) to make it real and alluring. Highlight that our menu is entirely 100% vegetarian.
3. Offer luxurious drink pairing advice based on the guest's selection. For example, pair Pinot Noir or Cabernet with our Balsamic Glazed Paneer Steak, and White Chardonnay or Rosé with Saffron Infused Risotto Medallions or vegetarian dishes.
4. If they ask about rooms, checkups, check-in, or general hotel policies, provide beautiful, helpful standard 5-star advice:
   - Check-in: 12:00 PM. Check-out: 11:00 AM.
   - Rooms feature premium soft pillows, scenic garden and city views, and luxurious amenities.
   - Amenities include Le Spa (massage suites), manicured garden lawns, high-speed Wi-Fi, and personalized room services.
5. Format your response cleanly and gracefully in Markdown, using bullet points or beautiful italicized accentuations so it is a pleasure to read in our elegant guest portal.
`;

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json({ error: "Please enter a valid guest inquiry." }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ 
        text: "My apologies, esteemed guest, but our AI Concierge system is currently offline (API key missing). Rest assured, our front desk team is ready to serve you! Please consult our physical dining menu in the tabs above." 
      });
    }

    // Call the Gemini model as per the developer instructions (gemini-3.5-flash for text task)
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: CONCIERGE_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    const text = response.text || "I apologize, but I was unable to compile a recommendation at this moment. Let me know if there is anything else I can coordinate for your arrival.";

    return NextResponse.json({ text });
  } catch (error: any) {
    console.error("Concierge API error:", error);
    return NextResponse.json({ 
      error: "Our systems encountered a brief delay. Please try again or reach out to our concierge desk directly.",
      details: error.message 
    }, { status: 500 });
  }
}
