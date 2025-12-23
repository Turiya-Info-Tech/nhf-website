import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Our Work", href: "#our-work" },
    { label: "Programs", href: "#programs" },
    { label: "Impact", href: "#impact" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-bold text-lg text-primary-foreground">NHF</span>
              </div>
              <span className="font-serif font-bold text-lg">New Horizons Foundation</span>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              Empowering children, advancing systems, and influencing policy through 
              ethical research and evidence-based advocacy.
            </p>
            <p className="text-sm text-primary-foreground/50">
              Research & Advocacy for Child Development
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>Mumbai, Maharashtra, India</li>
              <li>contact@newhorizonsfoundation.org</li>
              <li>+91 (022) XXXX-XXXX</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {currentYear} New Horizons Foundation. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-primary-foreground/50">
            Made with <Heart className="w-4 h-4 text-secondary fill-secondary" /> for children everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
