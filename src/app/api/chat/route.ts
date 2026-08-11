import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    if (!messages || !Array.isArray(messages)) return NextResponse.json({ reply: "I didn't catch that — could you try again?" }, { status: 400 });
    const last = (messages[messages.length - 1]?.content || "").toLowerCase();
    let reply = "";

    if (last.includes("team") || last.includes("human") || last.includes("person") || last.includes("talk") || last.includes("agent")) {
      reply = "Absolutely! Message us on WhatsApp at +94 77 698 4777 — a real team member will respond within minutes. Or click the WhatsApp link below this chat.";
    } else if (last.includes("concert") || last.includes("f1") || last.includes("formula") || last.includes("ticket") || last.includes("cricket") || last.includes("festival")) {
      reply = "Yes, we source tickets for concerts, Formula 1 races, cricket matches, and festivals worldwide! Tell us which event you're interested in and we'll find your tickets. Message us on WhatsApp for the quickest response.";
    } else if (last.includes("dubai")) {
      reply = "Dubai flights from Colombo typically range from LKR 45,000 – 85,000 depending on the season. Emirates, SriLankan, and FlyDubai all operate this route. For exact pricing on your dates, message us on WhatsApp!";
    } else if (last.includes("london") || last.includes("uk")) {
      reply = "Flights to London from Colombo typically range LKR 120,000 – 200,000. SriLankan, Emirates, and Qatar Airways offer great connections. Message us for exact pricing!";
    } else if (last.includes("visa")) {
      reply = "We help with visa applications for UAE, Schengen, UK, India, Thailand and more. We check your documents and guide you through the process. Which country's visa are you looking for?";
    } else if (last.includes("sri lanka") || last.includes("tour") || last.includes("visit")) {
      reply = "Sri Lanka is incredible — beaches in Mirissa, tea country in Ella, ancient cities, wildlife in Yala. Check our Sri Lanka Tours page or message us for a custom itinerary!";
    } else if (last.includes("price") || last.includes("cost") || last.includes("fare") || last.includes("much")) {
      reply = "Our flights page shows cached fare ranges for popular routes. For exact pricing on your specific dates, message us on WhatsApp — we respond within minutes with live availability.";
    } else if (last.includes("emergency") || last.includes("stranded") || last.includes("cancelled") || last.includes("stuck")) {
      reply = "If this is an emergency, call us immediately at +94 91 223 4517. We handle emergencies 24/7 — even if you didn't book with us.";
    } else if (last.includes("corporate") || last.includes("business") || last.includes("company")) {
      reply = "We offer corporate travel management with credit terms, 24/7 re-routing, and dedicated support. Three tiers: Essential, Business, and Enterprise. Want to discuss your company's needs?";
    } else {
      reply = "Great question! I can help with flights, tours, concert tickets, visas, and anything travel-related. Try asking about a destination, an event, or type 'team' to connect with a real person on WhatsApp.";
    }
    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ reply: "Sorry, I had trouble processing that. You can always reach us on WhatsApp — we respond quickly!" }, { status: 500 });
  }
}
