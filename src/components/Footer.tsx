import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact Us", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-primary border-t border-border/50 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary-foreground mb-2">
              Nalava Cookies
            </h3>
            <p className="text-primary-foreground/70">
              Handcrafted luxury, one cookie at a time
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Media Links */}
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-primary-foreground/60 text-sm border-t border-border/30 pt-8 w-full">
            <p>© {currentYear} Nalava Cookies. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
