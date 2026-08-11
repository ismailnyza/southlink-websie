import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ reply: "I didn't catch that — could you try again?" }, { status: 400 });
    }

    const last = (messages[messages.length - 1]?.content || "").toLowerCase();
    let reply = "";

    if (last.includes("agent") || last.includes("human") || last.includes("person") || last.includes("talk")) {
      reply = "Absolutely! Message us on WhatsApp at +94 77 698 4777 — a real agent will respond within minutes. Or click the WhatsApp button at the bottom of this chat.";
    } else if (last.includes("dubai") || last.includes("dxb")) {
      reply = "Dubai flights from Colombo typically range from LKR 45,000 – 85,000 depending on season and airline. Emirates, SriLankan, and FlyDubai all operate this route. For exact pricing on your dates, message us on WhatsApp!";
    } else if (last.includes("london") || last.includes("uk") || last.includes("lhr")) {
      reply = "Flights to London from Colombo typically range LKR 120,000 – 200,000. SriLankan, Emirates, and Qatar Airways offer the best connections. Message us for exact pricing!";
    } else if (last.includes("visa")) {
      reply = "We help with visa applications for UAE, Schengen, UK, India, Thailand and more. We check your documents, guide you through the process, and handle the paperwork. Want specific visa information?";
    } else if (last.includes("sri lanka") || last.includes("tour") || last.includes("visit")) {
      reply = "Sri Lanka has incredible experiences — beaches of Mirissa, tea country in Ella, ancient cities like Anuradhapura, and wildlife in Yala. Check our Tours page or message us for a custom itinerary!";
    } else if (last.includes("price") || last.includes("cost") || last.includes("fare")) {
      reply = "Our flights page shows cached fare ranges for popular routes. For exact pricing on your specific dates, message us on WhatsApp — we respond within minutes with live availability.";
    } else if (last.includes("emergency") || last.includes("stranded") || last.includes("cancelled")) {
      reply = "If this is an emergency, call us immediately at +94 91 223 4517. We handle emergencies 24/7 — even if you didn't book with us. We've rescued 347+ travellers.";
    } else if (last.includes("corporate") || last.includes("business")) {
      reply = "We offer corporate travel management with credit terms, 24/7 re-routing, and dedicated account management. Three tiers: Essential, Business, and Enterprise. Want to discuss your company's needs?";
    } else {
      reply = "Great question! I can help with flights, tours, visas, and anything travel-related. Try asking about a specific destination, or type 'agent' to connect with a real person on WhatsApp.";
    }

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ reply: "Sorry, I had trouble processing that. You can always reach us on WhatsApp — we respond quickly!" }, { status: 500 });
  }
}
