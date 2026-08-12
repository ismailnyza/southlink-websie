export default function ReviewsPage() {
  const reviews = [
    {
      quote: "I live in Dubai and needed to fly home to Colombo for a family emergency. Southlink found me a flight within an hour and called me back when the price dropped. They handled everything while I packed. My family has used them ever since.",
      name: "Fazal R., Dubai",
      initials: "FR",
    },
    {
      quote: "Booked our honeymoon package — Galle Fort, tea country, and a beach villa in Mirissa. Every hotel was exactly as described, every driver was on time, and our agent checked in on WhatsApp each day to make sure things were smooth. Felt like traveling with a friend who knew everyone.",
      name: "Sarah & Ahamed, Colombo",
      initials: "SA",
    },
    {
      quote: "Our company switched to Southlink for corporate travel two years ago. One dedicated agent who knows our team's preferences — window seats, specific airlines, quick connections. Monthly billing saves our accounts team hours. Can't imagine going back to booking ourselves.",
      name: "Operations Director, Export Company, Galle",
      initials: "OD",
    },
    {
      quote: "Had tickets to the Singapore Grand Prix through Southlink. The package included flights, hotel, and grandstand seats. Everything worked perfectly — they even suggested a better hotel than the one I initially wanted, and they were right.",
      name: "Dinesh W., Kandy",
      initials: "DW",
    },
    {
      quote: "Called at 2 AM from Dubai airport — my connecting flight was cancelled and the airline desk had a three-hour queue. Southlink answered on the second ring, found me a seat on another carrier, and I was on my way within 40 minutes. I hadn't even booked the original ticket through them.",
      name: "Roshani M., Dubai",
      initials: "RM",
    },
    {
      quote: "We're a family of five flying to London. Southlink found us a route with a short layover, seats together, and a fare that was LKR 85,000 less than what I was seeing online. The kids were so well looked after. This is why you use a real agent.",
      name: "The Perera Family, Colombo",
      initials: "TP",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gray-900 text-white py-20 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-red-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Reviews</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold">
            What travellers say.
          </h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-xl mx-auto">
            Real reviews from real people. These are from our Google Business profile — unfiltered, unedited.
          </p>
        </div>
      </section>

      <section className="py-16 px-5 sm:px-8 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-7"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed italic mb-4">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">
                    {r.initials}
                  </div>
                  <span className="text-sm text-gray-500">{r.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.google.com/search?q=Southlink+Travels+Galle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all shadow-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Read all reviews on Google
            </a>
            <p className="text-xs text-gray-400 mt-3">
              These testimonials reflect real experiences shared by our clients on Google.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
