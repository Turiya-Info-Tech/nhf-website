import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Mail, Sparkles, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal, getStaggerDelay } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/lib/language";

const ContactSection = () => {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enquiryType: "",
    message: ""
  });
  const emailAddress = "research@enablemychild.org";

  const buildMailtoLink = () => {
    const subject = encodeURIComponent(`NHF Website Enquiry: ${formData.enquiryType || "General"}`);
    const body = encodeURIComponent(
      `${language === "hi" ? "नाम" : "Name"}: ${formData.name || "-"}\n` +
      `${language === "hi" ? "ईमेल" : "Email"}: ${formData.email || "-"}\n` +
      `${language === "hi" ? "पूछताछ" : "Enquiry"}: ${formData.enquiryType || "General"}\n\n` +
      `${formData.message || ""}`
    );

    return `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    window.location.href = buildMailtoLink();
    toast({
      title: language === "hi" ? "ईमेल ड्राफ्ट खोला गया" : "Email Draft Opened",
      description: language === "hi" ? "आपका ईमेल एप्लिकेशन खोल दिया गया है। कृपया संदेश की समीक्षा करके भेजें।" : "Your email app has been opened. Review the draft and send it from there.",
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: language === "hi" ? "जीजीएनई पता" : "GGNE Address",
      content: language === "hi" ? "जीजीएनई पता" : "GGNE Address",
      gradient: "from-blue-500 to-pink-500"
    },
    {
      icon: Mail,
      title: language === "hi" ? "ईमेल" : "Email",
      content: "research@enablemychild.org",
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-96 h-96 bg-gradient-to-b from-blue-50/50 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-50/40 to-transparent rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Contact Info */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <span className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
                <Sparkles className="w-4 h-4" />
                {t('contact.badge')}
              </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6 leading-tight text-slate-900">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              {t('contact.description')}
            </p>
              <p className="mb-8 text-sm font-medium text-slate-500">
                {language === "hi" ? "अभी के लिए वेबसाइट संपर्क ईमेल ड्राफ्ट के माध्यम से खुलता है।" : "For now, website enquiries open as an email draft instead of using a placeholder third-party form."}
              </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-4 p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={getStaggerDelay(index, 150)}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center shrink-0 shadow-lg`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-slate-900 text-base">{info.title}</h3>
                    <p className="text-gray-600 text-sm whitespace-pre-line leading-relaxed">
                      {info.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className={`bg-white rounded-xl p-10 border border-gray-100 shadow-md transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-sm font-semibold mb-2 text-slate-900">{t('contact.name')}</label>
                  <Input 
                    placeholder={language === "hi" ? "आपका नाम" : "Your name"} 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">{t('contact.email')}</label>
                  <Input 
                    type="email" 
                    placeholder={language === "hi" ? "your@email.com" : "your@email.com"} 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">{language === "hi" ? "पूछताछ का प्रकार" : "Enquiry Type"}</label>
                <Select value={formData.enquiryType} onValueChange={(value) => setFormData({ ...formData, enquiryType: value })}>
                  <SelectTrigger className="border-gray-200 focus:border-blue-500 focus:ring-blue-500/20">
                    <SelectValue placeholder={language === "hi" ? "एक विकल्प चुनें" : "Select an option"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="partnership">{language === "hi" ? "साझेदारी" : "Partnership"}</SelectItem>
                    <SelectItem value="donation">{language === "hi" ? "दान / CSR" : "Donation / CSR"}</SelectItem>
                    <SelectItem value="research">{language === "hi" ? "अनुसंधान सहयोग" : "Research Collaboration"}</SelectItem>
                    <SelectItem value="media">{language === "hi" ? "मीडिया पूछताछ" : "Media Inquiry"}</SelectItem>
                    <SelectItem value="general">{language === "hi" ? "सामान्य प्रश्न" : "General Question"}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">{t('contact.message')}</label>
                <Textarea 
                  placeholder={language === "hi" ? "अपनी रुचि या प्रश्न के बारे में बताइए..." : "Tell us about your interest or inquiry..."}
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  type="submit" 
                  className="flex-1 bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 group"
                >
                  <>
                    {language === "hi" ? "ईमेल ड्राफ्ट खोलें" : "Open Email Draft"}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
