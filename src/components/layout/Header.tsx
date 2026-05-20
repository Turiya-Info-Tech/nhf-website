import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sparkles } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/lib/language";

const Header = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = useMemo(() => [
    { label: t('header.home'), href: "#home" },
    { label: t('header.about'), href: "#about" },
    { label: t('header.work'), href: "#focus-areas" },
    { label: t('header.impact'), href: "#impact" },
    { label: t('header.getInvolved'), href: "#get-involved" },
    { label: t('header.contact'), href: "#contact" },
  ], [t]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => item.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item: { href: string; isPage?: boolean }) => {
    if (item.isPage) {
      navigate(item.href);
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(item.href);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const element = document.querySelector(item.href);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-200" 
          : "bg-transparent"
      }`}
      style={{ width: '100%' }}
    >
      {/* Mobile Header (< lg) */}
      <div className="block lg:hidden" style={{ width: '100%', overflow: 'hidden' }}>
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            height: '56px',
            paddingLeft: '16px',
            paddingRight: '16px',
            width: '100%',
            boxSizing: 'border-box'
          }}
        >
          <Link to="/" style={{ flexShrink: 0 }}>
            <img
              src="/NHF-LOGO.png"
              alt="NHF Logo"
              style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
            />
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button 
                style={{
                  padding: '8px',
                  borderRadius: '8px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                className={isScrolled ? "text-gray-700" : "text-slate-800"}
                aria-label="Open menu"
              >
                <Menu style={{ width: '24px', height: '24px' }} />
              </button>
            </SheetTrigger>
            
            <SheetContent 
              side="right" 
              className="w-[280px] bg-white p-0"
            >
              <div className="flex items-center p-4 border-b border-gray-100">
                <img
                  src="/NHF-LOGO.png"
                  alt="NHF Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
              
              <nav className="flex flex-col p-4">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.replace('#', '');
                  return (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item)}
                      className={`px-4 py-3 text-left font-medium rounded-lg transition-all duration-200 ${
                        isActive 
                          ? 'bg-[#4BC0DB]/10 text-[#4BC0DB]' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
                
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="mb-4 px-4">
                    <LanguageToggle />
                  </div>
                  <Button 
                    onClick={() => handleNavClick({ href: "#get-involved" })}
                    className="w-full bg-gradient-to-r from-[#4BC0DB] via-[#EC6F7B] to-[#F4C94A] hover:from-[#4BC0DB] hover:via-[#EC6F7B] hover:to-[#A9C63B] text-white"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    {t('header.getInvolved')}
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop Header (>= lg) */}
      <div className="hidden lg:block">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex-shrink-0 group">
              <img
                src="/NHF-LOGO.png"
                alt="NHF Logo"
                className="h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            <nav className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      isActive ? 'text-[#4BC0DB]' : 'text-slate-700'
                    } hover:text-[#4BC0DB] hover:bg-[#4BC0DB]/10`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#4BC0DB] via-[#EC6F7B] to-[#F4C94A] rounded-full transition-all duration-300 ${
                      isActive ? 'w-6' : 'w-0'
                    }`} />
                  </button>
                );
              })}
            </nav>

            <div className="flex items-center gap-4">
              <LanguageToggle />
              <Button 
                onClick={() => handleNavClick({ href: "#get-involved" })}
                className="bg-gradient-to-r from-[#4BC0DB] to-[#A9C63B] hover:from-[#4BC0DB] hover:to-[#A9C63B] text-white shadow-lg shadow-[#4BC0DB]/25"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                {t('header.getInvolved')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
