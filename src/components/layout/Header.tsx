import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sparkles } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Our Work", href: "#focus-areas" },
    { label: "Impact", href: "#impact" },
    { label: "Get Involved", href: "#get-involved" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-gray-200/50" 
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo with hover effect */}
          <Link 
            to="/"
            className="flex items-center gap-3 group"
          >
            <div className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/25`}>
              <span className="font-bold text-lg text-white">
                NHF
              </span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg" />
            </div>
            <span className={`font-serif font-bold text-lg hidden sm:block transition-all duration-300 text-slate-800`}>
              New Horizons Health & Research Foundation
            </span>
          </Link>

          {/* Desktop Navigation with animated underline */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${isActive ? 'text-orange-600' : 'text-slate-700'} hover:text-orange-600 hover:bg-orange-50`}
                >
                  {item.label}
                  {/* Active indicator */}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full transition-all duration-300 ${
                    isActive ? 'w-6' : 'w-0'
                  }`} />
                </button>
              );
            })}
          </nav>

          {/* CTA Button with glow effect */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => handleNavClick({ href: "#get-involved" })}
              className="relative overflow-hidden transition-all duration-300 group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
            >
              <Sparkles className="w-4 h-4 mr-2 group-hover:animate-wiggle" />
              Get Involved
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                className={`transition-all duration-300 ${
                  isScrolled 
                    ? "text-gray-700 hover:bg-gray-100" 
                    : "text-white hover:bg-white/10"
                }`}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white/95 backdrop-blur-xl">
              <nav className="flex flex-col gap-2 mt-8">
                {navItems.map((item, index) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item)}
                    className="px-4 py-3 text-left font-medium rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 transition-all duration-300 opacity-0 animate-fade-in-left"
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                  >
                    {item.label}
                  </button>
                ))}
                <Button 
                  onClick={() => handleNavClick({ href: "#get-involved" })}
                  className="mt-4 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Get Involved
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
