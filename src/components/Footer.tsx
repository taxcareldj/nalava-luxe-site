import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { label: "Kilau Jaktim", href: "#home" },
    { label: "Profile", href: "#profile" },
    { label: "Media Sosial", href: "#media-sosial" },
    { label: "More", href: "#more" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/pajakjaktim", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/pajakjaktim", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/pajakjaktim", label: "Twitter" },
    { icon: Mail, href: "mailto:kanwil.110@pajak.go.id", label: "Email" },
  ];

  return (
    <footer id="more" className="bg-primary text-primary-foreground py-12 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-2">KilauJaktim</h3>
            <p className="text-primary-foreground/80 text-sm">
              Kanwil Direktorat Jenderal Pajak Jakarta Timur
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigasi</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/70">
          <p>&copy; 2025 KilauJaktim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
