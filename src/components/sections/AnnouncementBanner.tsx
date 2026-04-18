import { useContent } from "@/lib/content";
import { Bell, X, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const AnnouncementBanner = () => {
  const { announcements } = useContent();
  const [dismissedIds, setDismissedIds] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  
  const activeAnnouncements = announcements.filter(
    a => a.is_active && !dismissedIds.includes(a.id)
  );

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = (id: string) => {
    setDismissedIds(prev => [...prev, id]);
  };

  if (activeAnnouncements.length === 0) return null;

  // Show the first active announcement
  const announcement = activeAnnouncements[0];

  return (
    <div className={`relative bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white py-3 px-4 overflow-hidden transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
      {/* Animated shimmer effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-1/2 left-1/4 -translate-y-1/2 w-3 h-3 text-white/30 animate-pulse" />
        <Sparkles className="absolute top-1/2 right-1/3 -translate-y-1/2 w-2 h-2 text-white/20 animate-pulse delay-300" />
      </div>
      
      <div className="container mx-auto flex items-center justify-center gap-2 sm:gap-3 relative px-10 sm:px-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center animate-bounce-subtle flex-shrink-0">
            <Bell className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0 text-white" />
          </div>
          <p className="text-xs sm:text-sm font-medium text-center drop-shadow-sm line-clamp-2">
            {announcement.content}
          </p>
        </div>
        <button
          onClick={() => handleDismiss(announcement.id)}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/10 hover:bg-white/30 flex items-center justify-center transition-all duration-300 hover:rotate-90 hover:scale-110 flex-shrink-0"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
