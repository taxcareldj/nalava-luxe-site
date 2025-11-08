import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Instagram, Twitter, Facebook } from "lucide-react";

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:kanwil.110@pajak.go.id",
    description: "kanwil.110@pajak.go.id",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/pajakjaktim",
    description: "@pajakjaktim",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/pajakjaktim",
    description: "@pajakjaktim",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/kanwildjpjaktim",
    description: "Kanwil DJP Jakarta Timur",
  },
];

const MediaSosial = () => {
  return (
    <section id="media-sosial" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-foreground mb-4">
            Media Sosial
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
            Ikuti dan hubungi kami melalui berbagai platform media sosial
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Card
                key={link.name}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none"
              >
                <CardContent className="p-6">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4"
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-full flex items-center justify-center group-hover:bg-accent transition-colors">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {link.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {link.description}
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <a href="#home">Kembali ke Beranda</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MediaSosial;
