export const SITE = {
  name: "Southlink Travels",
  tagline: "Travel, handled personally.",
  description:
    "Flights, Sri Lanka experiences, and corporate travel — handled personally by a dedicated agent based in Galle. Not a booking system.",
  url: "https://southlinktravels.com",
  locale: "en_LK",
};

export const CONTACT = {
  whatsapp: "+94776984777",
  phone: "+94912234517",
  email: "info@southlinktravels.com",
  address: "26M8+C37, Gamini Mawatha, Galle 80000, Sri Lanka",
};

export const IATA = {
  number: "42350934",
  certified: true,
};

export const TRUST_STATS = {
  ticketsBooked: 5000,
  yearsInBusiness: 15,
  tripsRescued: 347,
  googleRating: 4.9,
  googleReviews: 237,
};

export const LANGUAGES = [
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
];

export const SERVICES = [
  {
    title: "Flights",
    description: "Smart routing, fair fares, changes handled by your agent",
    href: "/flights",
    icon: "plane",
  },
  {
    title: "Sri Lanka Tours",
    description: "Curated experiences designed by locals who know every corner",
    href: "/tours/inbound",
    icon: "map",
  },
  {
    title: "Outbound Tours",
    description: "International destinations with full visa & itinerary support",
    href: "/tours/outbound",
    icon: "globe",
  },
  {
    title: "Corporate Travel",
    description: "Credit terms, 24/7 re-routing, dedicated agent for your team",
    href: "/corporate",
    icon: "briefcase",
  },
  {
    title: "Events & Groups",
    description: "Weddings, conferences, school trips — we move groups",
    href: "/events",
    icon: "users",
  },
  {
    title: "Airport Transfers",
    description: "Fixed-price pickups and drop-offs across Sri Lanka",
    href: "/airport-transfer",
    icon: "car",
  },
];

export const GUARANTEE_POINTS = [
  "Flight cancelled? We rebook you — even at midnight.",
  "Visa rejected? We handle the re-application.",
  "Stuck in transit? Call us. We answer.",
  "Airline lost your baggage? We chase them, not you.",
  "Need to change dates? One WhatsApp message. Done.",
];

export const POPULAR_ROUTES = [
  { route: "Colombo → Dubai", price: "LKR 45,000 – 85,000", airlines: "Emirates, SriLankan, FlyDubai" },
  { route: "Colombo → London", price: "LKR 120,000 – 200,000", airlines: "SriLankan, Emirates, Qatar" },
  { route: "Colombo → Singapore", price: "LKR 35,000 – 65,000", airlines: "Singapore Airlines, SriLankan" },
  { route: "Colombo → Chennai", price: "LKR 25,000 – 45,000", airlines: "SriLankan, IndiGo, SpiceJet" },
  { route: "Colombo → Doha", price: "LKR 55,000 – 95,000", airlines: "Qatar Airways, SriLankan" },
  { route: "Colombo → Male", price: "LKR 30,000 – 55,000", airlines: "SriLankan, Emirates, FlyDubai" },
  { route: "Colombo → Bangkok", price: "LKR 40,000 – 75,000", airlines: "Thai Airways, SriLankan" },
  { route: "Colombo → Tokyo", price: "LKR 90,000 – 150,000", airlines: "SriLankan, Singapore Airlines, JAL" },
];

export const CORPORATE_TIERS = [
  {
    title: "Essential",
    desc: "Pay per trip, business-hours support, standard fare optimization",
    highlight: false,
  },
  {
    title: "Business",
    desc: "Credit terms, priority handling, 24/7 re-routing, detailed reporting",
    highlight: true,
  },
  {
    title: "Enterprise",
    desc: "SLA-backed support, named account manager, custom billing",
    highlight: false,
  },
];
