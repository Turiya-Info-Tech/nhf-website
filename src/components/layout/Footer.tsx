import { Heart, ArrowUp, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/language";

const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const quickLinks = [
    { label: language === "hi" ? "हमारे बारे में" : "About Us", href: "#about" },
    { label: language === "hi" ? "हमारा काम" : "Our Work", href: "#focus-areas" },
    { label: language === "hi" ? "प्रभाव" : "Impact", href: "#impact" },
    { label: language === "hi" ? "टीम" : "Team", href: "#team" },
    { label: language === "hi" ? "शामिल हों" : "Get Involved", href: "#get-involved" },
    { label: language === "hi" ? "संपर्क" : "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background decorations - subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-500/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-teal-500/8 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container relative py-20 lg:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6 group">
              <div className="relative h-14 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/NHF-LOGO.png"
                  alt="NHF Logo"
                  className="h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="text-white/70 mb-6 max-w-md leading-relaxed text-base">
              {language === "hi" ? "अनुसंधान और साक्ष्य-आधारित वकालत के माध्यम से बच्चों को सशक्त बनाना, प्रणालियों को आगे बढ़ाना और विकासात्मक स्वास्थ्य हेतु नीतियों को प्रभावित करना।" : "Empowering children, advancing systems, and influencing policy through research and evidence-based advocacy for developmental health."}
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-white/50 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
              <Sparkles className="w-4 h-4" />
              {language === "hi" ? "के अनुसंधान और वकालत प्रभाग" : "Research & Advocacy arm of"}{" "}
              <a 
                href="https://www.newhorizonscdc.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-orange-400 hover:text-orange-300 transition-colors ml-1 font-medium"
              >
                NHCDC
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold mb-8 text-lg text-white">{language === "hi" ? "त्वरित लिंक" : "Quick Links"}</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-orange-400 transition-colors duration-300 text-base"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-semibold mb-8 text-lg text-white">{language === "hi" ? "संपर्क करें" : "Contact Us"}</h3>
            <ul className="space-y-4 text-base text-white/70">
              <li className="leading-relaxed">
                {language === "hi" ? "गोरेगांव (पूर्व), मुंबई – 400063, भारत" : "Goregaon (East), Mumbai – 400063, India"}
              </li>
              <li>
                <a 
                  href="mailto:research@enablemychild.org" 
                  className="hover:text-orange-400 transition-colors duration-300 break-all"
                >
                  research@enablemychild.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-white/50">
            {language === "hi" ? `© ${currentYear} न्यू होराइजन्स हेल्थ एंड रिसर्च फाउंडेशन। सर्वाधिकार सुरक्षित।` : `© ${currentYear} New Horizons Health and Research Foundation. All rights reserved.`}
          </p>
          <p className="flex items-center gap-2 text-sm text-white/50">
            {language === "hi" ? "दुनिया भर के बच्चों के लिए" : "Made with"} <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" /> {language === "hi" ? "समर्पण के साथ" : "for children everywhere"}
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-36 right-4 sm:bottom-24 sm:right-6 w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-teal-500 text-white shadow-lg shadow-orange-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-orange-500/50 z-50 group ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        title={language === "hi" ? "ऊपर जाएँ" : "Back to top"}
      >
        <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
      </button>
    </footer>
  );
};

export default Footer;
