import { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = { title: "斯里兰卡机票 — 个性化服务", description: "斯里兰卡机票、旅行团、商务出行 — 由加勒本地旅行顾问全程一对一服务。" };

export default function ZhPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gray-900 text-white pt-24 pb-20">
        <div className="section-container max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif">斯里兰卡旅行 —<br /><span className="text-red-400">专属个性化服务</span></h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">机票、旅行团、签证 — 您在加勒的专属旅行顾问为您全程打理。</p>
        </div>
      </section>
      <section className="py-16 sm:py-24">
        <div className="section-container max-w-xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 mb-4">在 WhatsApp 上联系 Ismail</h2>
          <p className="text-gray-500 text-lg mb-8">他说英语。复杂问题我们使用 AI 翻译，确保沟通无障碍。</p>
          <WhatsAppButton context="general" prefill="你好 Ismail! 我有兴趣去斯里兰卡旅行。你能帮我吗？" variant="large" className="mx-auto shadow-lg shadow-green-500/20" />
          <p className="text-xs text-gray-400 mt-4">工作时间内通常几分钟内回复 (SLST)</p>
        </div>
      </section>
    </div>
  );
}
