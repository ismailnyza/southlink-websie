export default function EmergencyPage() {
  return (
    <div className="min-h-screen bg-red-600 text-white flex items-center pt-16">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-20 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">Stranded? Flight cancelled?<br/><span className="text-red-200">Call us now.</span></h1>
        <p className="text-red-100 text-lg mb-4">Even if you didn&apos;t book with us. We help anyone who needs it.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <a href="tel:+94912234517" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 rounded-full font-bold text-lg hover:bg-red-50 transition-all shadow-xl">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            +94 91 223 4517
          </a>
          <a href="https://wa.me/+94776984777" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold text-lg transition-all shadow-xl">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
            WhatsApp
          </a>
        </div>
        <p className="text-red-200 text-sm mt-5">24 hours. 7 days. We answer.</p>
      </div>
    </div>
  );
}
