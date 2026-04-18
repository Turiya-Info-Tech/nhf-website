import { Heart, ArrowUp, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
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
    { label: "About Us", href: "#about" },
    { label: "Our Work", href: "#focus-areas" },
    { label: "Impact", href: "#impact" },
    { label: "Team", href: "#team" },
    { label: "Get Involved", href: "#get-involved" },
    { label: "Contact", href: "#contact" },
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
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-teal-500/10 to-transparent rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="container relative py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
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
            <p className="text-white/60 mb-6 max-w-md leading-relaxed">
              Empowering children, advancing systems, and influencing policy through 
              ethical research and evidence-based advocacy.
            </p>
            <p className="inline-flex items-center gap-2 text-sm text-white/40 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <Sparkles className="w-3 h-3" />
              Research & Advocacy arm of <a href="https://www.newhorizonscdc.in/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline ml-1 whitespace-nowrap">NHCDC</a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/60 hover:text-orange-400 transition-all duration-300 text-sm underline-animation"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">Contact</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="hover:text-white/80 transition-colors">
                Goregaon (East), Mumbai – 400063
              </li>
              <li>
                <a href="mailto:research@enablemychild.org" className="hover:text-orange-400 transition-colors">
                  research@enablemychild.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-sm text-white/40">
            © {currentYear} New Horizons Health and Research Foundation. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-sm text-white/40">
            Made with <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" /> for children everywhere
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-4 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg shadow-orange-500/25 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-orange-500/40 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
