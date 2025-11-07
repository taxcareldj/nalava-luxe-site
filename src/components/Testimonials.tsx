import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "These are hands down the best cookies I've ever tasted. The quality and attention to detail is unmatched.",
    author: "Sarah Mitchell",
    role: "Food Critic",
  },
  {
    id: 2,
    quote: "Nalava Cookies has elevated the humble cookie to an art form. Each bite is pure luxury.",
    author: "James Chen",
    role: "Pastry Chef",
  },
  {
    id: 3,
    quote: "I order these for all my special events. My guests always ask where they're from!",
    author: "Emily Rodriguez",
    role: "Event Planner",
  },
  {
    id: 4,
    quote: "The perfect gift for clients who appreciate quality. These cookies never fail to impress.",
    author: "Michael Thompson",
    role: "Business Owner",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Don't just take our word for it—hear from those who've experienced the Nalava difference
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-4">
                    <Card className="border-none shadow-lg h-full">
                      <CardContent className="p-8">
                        <Quote className="text-accent w-12 h-12 mb-6" />
                        <blockquote className="text-lg text-foreground/80 mb-6 italic">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="border-t border-border pt-4">
                          <p className="font-bold text-foreground text-lg">
                            {testimonial.author}
                          </p>
                          <p className="text-foreground/60">
                            {testimonial.role}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
