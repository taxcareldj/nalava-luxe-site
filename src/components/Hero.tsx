import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cookies.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury handcrafted cookies"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight tracking-tight">
          Handcrafted Luxury Cookies
          <br />
          <span className="text-accent">for Discerning Palates</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto">
          Experience the art of fine baking with our premium, artisanal cookies crafted from the finest ingredients
        </p>
        <Button
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Contact Us
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
