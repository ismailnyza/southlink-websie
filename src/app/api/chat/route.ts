import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    if (!messages?.length) return NextResponse.json({ reply: "I didn't catch that — try again?" }, { status: 400 });
    const last = (messages[messages.length-1]?.content||"").toLowerCase();
    let r = "";
    if (last.includes("team")||last.includes("human")||last.includes("person")||last.includes("talk")||last.includes("agent")) r = "Absolutely! Message us on WhatsApp at +94 77 698 4777 — a real team member responds within minutes.";
    else if (last.includes("concert")||last.includes("f1")||last.includes("formula")||last.includes("ticket")||last.includes("cricket")||last.includes("festival")||last.includes("sport")) r = "Yes! We source tickets for concerts, F1, cricket, football, tennis, and festivals worldwide. Check our Events page or tell us which event you're interested in!";
    else if (last.includes("package")||last.includes("tour")||last.includes("holiday")) r = "We have pre-built packages (Romantic Escape, Family Adventure, Luxury Circuit, and more) plus fully customizable tours. Check our Tours and Packages pages!";
    else if (last.includes("dubai")) r = "Dubai flights from Colombo: LKR 45,000–85,000. Emirates, SriLankan, FlyDubai. Message us for exact pricing on your dates!";
    else if (last.includes("london")||last.includes("uk")) r = "Colombo to London: LKR 120,000–200,000. SriLankan, Emirates, Qatar Airways. Message us for exact fares!";
    else if (last.includes("visa")) r = "We help with UAE, Schengen, UK, India, Thailand, China visas. Document checking and application guidance. Which country?";
    else if (last.includes("sri lanka")||last.includes("visit")) r = "Sri Lanka is incredible — beaches, tea country, ancient cities, wildlife. Check our Tours page or message us for a custom itinerary!";
    else if (last.includes("price")||last.includes("cost")||last.includes("fare")||last.includes("much")) r = "Our flights page has cached fare ranges. For exact pricing on your dates, message us on WhatsApp — we respond within minutes.";
    else if (last.includes("emergency")||last.includes("stranded")||last.includes("cancelled")||last.includes("stuck")) r = "If this is an emergency, call us NOW at +94 91 223 4517. We handle emergencies 24/7 — even if you didn't book with us.";
    else if (last.includes("corporate")||last.includes("business")||last.includes("company")) r = "Corporate travel: credit terms, 24/7 re-routing, dedicated support. Three tiers — Essential, Business, Enterprise. Want to discuss?";
    else r = "I can help with flights, tours, concert tickets, F1 packages, visas, and more! Try asking about a destination, event, or type 'team' for a real person.";
    return NextResponse.json({ reply: r });
  } catch {
    return NextResponse.json({ reply: "Connection issue — reach us on WhatsApp, we respond quickly!" }, { status: 500 });
  }
}
