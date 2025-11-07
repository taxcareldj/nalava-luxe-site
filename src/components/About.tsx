import { Card, CardContent } from "@/components/ui/card";
import aboutImage from "@/assets/about-bakery.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <Card className="border-none shadow-xl overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 md:h-auto min-h-[400px]">
                <img
                  src={aboutImage}
                  alt="Nalava Cookies bakery kitchen"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-foreground/80 text-lg">
                  <p>
                    At Nalava Cookies, we believe that every bite should be an experience. 
                    Founded with a passion for perfection, we handcraft each cookie using only 
                    the finest ingredients sourced from around the world.
                  </p>
                  <p>
                    Our commitment to quality, craftsmanship, and innovation has made us a 
                    favorite among those who appreciate the finer things in life. Each recipe 
                    is carefully developed to deliver the perfect balance of flavor, texture, 
                    and indulgence.
                  </p>
                  <div className="pt-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <p className="text-foreground font-medium">Premium, ethically-sourced ingredients</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <p className="text-foreground font-medium">Handcrafted in small batches for freshness</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <p className="text-foreground font-medium">Uncompromising quality in every cookie</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
