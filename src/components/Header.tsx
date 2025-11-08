import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Profile", href: "#profile" },
    { label: "Media Sosial", href: "#media-sosial" },
    { label: "More", href: "#more" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-border backdrop-blur-sm">
      <nav className="container mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
        {/* ===== Logo Area ===== */}
        <a href="#" className="flex items-center gap-2">
          <img
            src="/KilauJaktimwhite.png" // pastikan file ini ada di folder public/
            alt="Kilau Jaktim Logo"
            className="h-16 w-auto"
          />
          <span className="text-xl font-bold text-primary-foreground tracking-tight">
            KilauJaktim
          </span>
        </a>

        {/* ===== Desktop Navigation ===== */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-primary-foreground hover:text-accent transition-colors duration-300 font-medium text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* ===== Mobile Menu Button ===== */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-primary-foreground hover:text-accent hover:bg-transparent"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </nav>

      {/* ===== Mobile Menu ===== */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-primary-foreground hover:text-accent transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
