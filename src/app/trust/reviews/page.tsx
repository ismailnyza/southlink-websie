import { Metadata } from "next";
import { Star } from "lucide-react";
import { TRUST_STATS } from "@/lib/constants";

export const metadata: Metadata = { title: "Reviews — What Travellers Say", description: "Real reviews from real travellers. 4.9 stars on Google. Read what our clients say about Southlink Travels." };

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-gray-900 text-white pt-24 pb-20">
        <div className="section-container max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif">What travellers say</h1>
          <div className="flex items-center justify-center gap-2 mt-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />)}
            <span className="text-white font-bold text-lg ml-2">{TRUST_STATS.googleRating}</span>
            <span className="text-gray-400">({TRUST_STATS.googleReviews} reviews)</span>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-24 bg-white">
        <div className="section-container max-w-2xl mx-auto text-center">
          <p className="text-gray-500 text-lg leading-relaxed">
            Our reviews are on Google. Search &quot;Southlink Travels Galle&quot; to read all {TRUST_STATS.googleReviews} of them — unfiltered, from real travellers.
          </p>
          <a href="https://www.google.com/search?q=Southlink+Travels+Galle" target="_blank" rel="noopener noreferrer"
            className="btn-primary mt-8 inline-flex">
            Read on Google <Star className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
