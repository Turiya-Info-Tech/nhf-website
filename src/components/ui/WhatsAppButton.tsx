import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/language";

const WhatsAppButton = () => {
  const { language } = useLanguage();
  // Replace with actual NHF WhatsApp number
  const whatsappNumber = "919876543210"; // Format: country code + number without +
  const message = encodeURIComponent(
    language === "hi"
      ? "नमस्ते! मैं न्यू होराइजन्स हेल्थ एंड रिसर्च फाउंडेशन के बारे में अधिक जानना चाहता/चाहती हूँ।"
      : "Hello! I would like to learn more about New Horizons Health and Research Foundation."
  );
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label={language === "hi" ? "व्हाट्सऐप पर बात करें" : "Chat on WhatsApp"}
    >
      <MessageCircle className="w-7 h-7 fill-current" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {language === "hi" ? "व्हाट्सऐप पर हमसे बात करें" : "Chat with us on WhatsApp"}
      </span>
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-25"></span>
    </a>
  );
};

export default WhatsAppButton;
