import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Have questions or ready to place an order? We'd love to hear from you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="md:col-span-2 border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your order or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="mt-2 min-h-[150px]"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-accent w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <a
                      href="mailto:hello@nalavacookies.com"
                      className="text-foreground/70 hover:text-accent transition-colors"
                    >
                      hello@nalavacookies.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="text-accent w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-foreground/70 hover:text-accent transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-accent w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Location</h3>
                    <p className="text-foreground/70">
                      123 Baker Street<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
