import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ reply: "I didn't catch that — could you try again?" }, { status: 400 });
    }

    const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || "";

    // Simple keyword-based responses (replace with DeepSeek/OpenAI API later)
    let reply = "";
    let handoff = false;
    let handoffContext = "";

    if (lastMessage.includes("dubai") || lastMessage.includes("dxb")) {
      reply = "Dubai flights from Colombo typically range from LKR 45,000 to 85,000 depending on the season and airline. Emirates, SriLankan, and FlyDubai all operate this route. Want me to connect you with Ismail for exact pricing on your dates?";
      handoff = true;
      handoffContext = "Hi Ismail! I'm looking for flights to Dubai.";
    } else if (lastMessage.includes("visa")) {
      reply = "I can help with visa information! Which country are you traveling to? UAE, Schengen, UK, India, and Thailand are the most common. Or would you like me to connect you with Ismail for detailed guidance?";
    } else if (lastMessage.includes("price") || lastMessage.includes("cost") || lastMessage.includes("how much")) {
      reply = "Prices vary based on route, dates, and availability. Ismail can give you exact pricing for your specific trip — he typically responds within minutes during business hours. Want me to connect you?";
      handoff = true;
      handoffContext = "Hi Ismail! I'd like to know pricing for my trip.";
    } else if (lastMessage.includes("sri lanka") || lastMessage.includes("tour") || lastMessage.includes("visit")) {
      reply = "Sri Lanka has incredible experiences — from the beaches of Mirissa to the tea country of Ella, the ancient cities of Anuradhapura, and the wildlife of Yala. What kind of experience are you looking for? Or I can connect you with Ismail who knows every corner!";
    } else if (lastMessage.includes("emergency") || lastMessage.includes("stranded") || lastMessage.includes("cancelled")) {
      reply = "If this is an emergency, call or WhatsApp Ismail immediately at +94 77 698 4777. He handles emergencies 24/7 — even if you didn't book with us.";
      handoff = true;
      handoffContext = "URGENT: I need travel assistance immediately.";
    } else if (lastMessage.includes("book") || lastMessage.includes("ticket") || lastMessage.includes("flight")) {
      reply = "I'd love to help you book! Ismail handles all bookings personally — he'll find the best routes and fares for your trip. Want me to connect you?";
      handoff = true;
      handoffContext = "Hi Ismail! I'd like to book a flight.";
    } else if (lastMessage.includes("corporate") || lastMessage.includes("business")) {
      reply = "We offer corporate travel management with credit terms, 24/7 re-routing, and a dedicated agent. Ismail can set up a quick call to discuss your company's needs. Connect you?";
      handoff = true;
      handoffContext = "Hi Ismail! I'd like to discuss corporate travel for my company.";
    } else {
      reply = "Great question! I'm here to help with flights, tours, visas, and anything travel-related. Where are you thinking of going? Or tell me what you need and I'll connect you with Ismail, your personal travel agent in Galle.";
    }

    return NextResponse.json({ reply, handoff, handoffContext });
  } catch {
    return NextResponse.json(
      { reply: "Sorry, I had trouble processing that. You can always message Ismail directly on WhatsApp — he's available and responds quickly!" },
      { status: 500 }
    );
  }
}
