import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import classicChocolateChip from "@/assets/classic-chocolate-chip.jpg";
import doubleChocolate from "@/assets/double-chocolate.jpg";
import matchaDelight from "@/assets/matcha-delight.jpg";
import saltedCaramel from "@/assets/salted-caramel.jpg";

const products = [
  {
    id: 1,
    name: "Classic Chocolate Chip",
    description: "Our signature cookie with premium Belgian chocolate chunks and a hint of sea salt",
    price: "$24",
    image: classicChocolateChip,
  },
  {
    id: 2,
    name: "Double Chocolate Decadence",
    description: "Rich dark chocolate cookie loaded with white and milk chocolate pieces",
    price: "$26",
    image: doubleChocolate,
  },
  {
    id: 3,
    name: "Matcha Green Tea",
    description: "Delicate Japanese matcha combined with white chocolate for a refined taste",
    price: "$28",
    image: matchaDelight,
  },
  {
    id: 4,
    name: "Salted Caramel Bliss",
    description: "Buttery caramel swirled with French sea salt for the perfect sweet-savory balance",
    price: "$27",
    image: saltedCaramel,
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Our Collection
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Explore our carefully curated selection of artisanal cookies, each one a masterpiece
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-foreground/70 mb-4">
                  {product.description}
                </p>
                <p className="text-3xl font-bold text-accent">
                  {product.price}
                </p>
                <p className="text-sm text-foreground/60 mt-1">per dozen</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Order Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
