"use client";
interface Route { route: string; from: number; to: number; }
export default function PriceTicker({ prices }: { prices: Route[] }) {
  const doubled = [...prices, ...prices];
  return (
    <div className="flex overflow-hidden">
      <div className="flex gap-8 animate-ticker">
        {doubled.map((p, i) => (
          <div key={i} className="flex items-center gap-3 text-sm whitespace-nowrap flex-shrink-0">
            <span className="text-white font-medium">{p.route}</span>
            <span className="text-gray-400">LKR {p.from.toLocaleString()} – {p.to.toLocaleString()}</span>
            <span className="text-gray-400/30 mx-1">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
