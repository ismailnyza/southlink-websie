export const SITE = {
  name: "Southlink Travels",
  tagline: "Premium travel, handled personally.",
  iata: "42350934",
  phone: "+94912234517",
  whatsapp: "+94776984777",
  email: "info@southlinktravels.com",
  address: "Selaka Complex, 34 Gamini Mawatha, Galle 80000",
  googleRating: 4.9,
  googleReviews: 237,
  ticketsBooked: 5000,
  tripsRescued: 347,
  yearsInBusiness: 15,
};

export const FLIGHT_PRICES = [
  { route: "Colombo → Dubai", from: 45000, to: 85000, airline: "Emirates, SriLankan, FlyDubai" },
  { route: "Colombo → London", from: 120000, to: 200000, airline: "SriLankan, Emirates, Qatar" },
  { route: "Colombo → Singapore", from: 35000, to: 65000, airline: "Singapore Airlines, SriLankan" },
  { route: "Colombo → Chennai", from: 25000, to: 45000, airline: "SriLankan, IndiGo, SpiceJet" },
  { route: "Colombo → Doha", from: 55000, to: 95000, airline: "Qatar Airways, SriLankan" },
  { route: "Colombo → Male", from: 30000, to: 55000, airline: "SriLankan, Emirates, FlyDubai" },
  { route: "Colombo → Bangkok", from: 40000, to: 75000, airline: "Thai Airways, SriLankan" },
  { route: "Colombo → Tokyo", from: 90000, to: 150000, airline: "SriLankan, Singapore Airlines, JAL" },
  { route: "Colombo → Kuala Lumpur", from: 35000, to: 60000, airline: "AirAsia, Malaysia Airlines, SriLankan" },
  { route: "Colombo → Sydney", from: 110000, to: 180000, airline: "SriLankan, Singapore Airlines, Emirates" },
];

export const SERVICES = [
  { title: "Flights", desc: "Smart routing, fair fares, and someone who rebooks you when airlines cancel.", href: "/flights", color: "from-red-600 to-red-700" },
  { title: "Sri Lanka Tours", desc: "Curated experiences by locals who know every corner of this island.", href: "/tours/inbound", color: "from-emerald-600 to-teal-700" },
  { title: "International Tours", desc: "Dubai, Singapore, Thailand, Maldives — full visa & itinerary support.", href: "/tours/outbound", color: "from-blue-600 to-indigo-700" },
  { title: "Corporate Travel", desc: "Credit terms, 24/7 re-routing, dedicated account management.", href: "/corporate", color: "from-gray-700 to-gray-900" },
  { title: "Visa Assistance", desc: "Document checking, application guidance, and processing support.", href: "/visa", color: "from-amber-500 to-orange-600" },
  { title: "Airport Transfers", desc: "Fixed-price pickups and drop-offs across all of Sri Lanka.", href: "/airport-transfer", color: "from-purple-600 to-violet-700" },
];

export const GUARANTEE = [
  "Flight cancelled? We rebook you — even at midnight.",
  "Visa rejected? We handle the re-application.",
  "Stuck in transit? We answer the phone. Always.",
  "Airline lost your baggage? We chase them, not you.",
  "Need to change dates? One message. Done.",
];

export const TESTIMONIALS = [
  { quote: "Southlink saved us when Emirates cancelled our connection at 2am. Rebooked within 30 minutes while other passengers waited hours.", author: "Frequent Flyer, Galle" },
  { quote: "We planned our entire Sri Lanka honeymoon through them — flights, hotels, a driver, everything. Zero stress. They thought of things we never would have.", author: "Honeymoon Couple, United Kingdom" },
  { quote: "I've used OTAs for years. After one experience with Southlink, I'll never go back. Having a real person who answers the phone changes everything.", author: "Business Traveler, Colombo" },
];
