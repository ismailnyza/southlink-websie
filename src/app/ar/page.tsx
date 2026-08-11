import { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = { title: "تذاكر طيران سريلانكا — خدمة شخصية", description: "تذاكر طيران، جولات في سريلانكا، سفر الشركات — يديرها مستشارك الشخصي في جالي." };

export default function ArPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <section className="bg-gray-900 text-white pt-24 pb-20">
        <div className="section-container max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif">سافر إلى سريلانكا —<br /><span className="text-red-400">بخدمة شخصية</span></h1>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">تذاكر طيران، جولات، تأشيرات — مستشارك الشخصي في جالي يتولى كل شيء.</p>
        </div>
      </section>
      <section className="py-16 sm:py-24">
        <div className="section-container max-w-xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 mb-4">راسل إسماعيل على واتساب</h2>
          <p className="text-gray-500 text-lg mb-8">يتحدث الإنجليزية. للطلبات المعقدة، نستخدم الترجمة بالذكاء الاصطناعي.</p>
          <WhatsAppButton context="general" prefill="مرحباً إسماعيل! أنا مهتم بالسفر إلى سريلانكا. هل يمكنك مساعدتي؟" variant="large" className="mx-auto shadow-lg shadow-green-500/20" />
          <p className="text-xs text-gray-400 mt-4">الرد عادة خلال دقائق خلال ساعات العمل</p>
        </div>
      </section>
    </div>
  );
}
