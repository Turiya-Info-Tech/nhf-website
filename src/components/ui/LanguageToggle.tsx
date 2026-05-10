import { useLanguage, type Language } from '@/lib/language';
import { Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-100/80 border-gray-200 hover:bg-gray-100' 
        : 'bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20'
    }`}>
      <Globe className={`w-4 h-4 ${isScrolled ? 'text-orange-600' : 'text-orange-500'}`} />
      <div className="flex items-center gap-1">
        <button
          onClick={() => setLanguage('en')}
          className={`px-2 py-1 text-xs font-semibold rounded transition-all duration-200 ${
            language === 'en'
              ? isScrolled 
                ? 'bg-orange-600 text-white'
                : 'bg-orange-500 text-white'
              : isScrolled
              ? 'text-gray-700 hover:text-gray-900'
              : 'text-gray-200 hover:text-white'
          }`}
        >
          EN
        </button>
        <span className={`${isScrolled ? 'text-gray-300' : 'text-gray-400'}`}>|</span>
        <button
          onClick={() => setLanguage('hi')}
          className={`px-2 py-1 text-xs font-semibold rounded transition-all duration-200 ${
            language === 'hi'
              ? isScrolled 
                ? 'bg-orange-600 text-white'
                : 'bg-orange-500 text-white'
              : isScrolled
              ? 'text-gray-700 hover:text-gray-900'
              : 'text-gray-200 hover:text-white'
          }`}
        >
          हिन्दी
        </button>
      </div>
    </div>
  );
};

export default LanguageToggle;
