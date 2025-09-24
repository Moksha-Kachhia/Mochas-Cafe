import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Coffee, Mail, Phone, MapPin } from "lucide-react";

export const ContactFooter = () => {
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Replace with your Formspree endpoint or API URL
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjkakbwe";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer className="bg-gradient-mocha text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Coffee className="h-6 w-6" />
              <span className="font-serif text-xl font-bold">Moksha Kachhia</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Brewing innovative solutions with the perfect blend of creativity and technical expertise. 
              Let's create something amazing together.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span className="text-sm">moksha dot kachhia at mail dot utoronto dot ca</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Toronto, ON Canada</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-xl mb-6">Let's Connect</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <Input 
                  placeholder="Your Name" 
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                  required
                />
                <Input 
                  placeholder="Your Email" 
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                  required
                />
              </div>
              <Textarea 
                placeholder="Your Message" 
                rows={4}
                value={message}
                onChange={e => setMessage(e.target.value)}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                required
              />
              <Button variant="secondary" className="w-full" type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Sending..." : "Send Message"}
              </Button>
              {status === "success" && (
                <p className="text-green-600 text-sm mt-2">Message sent! Thank you.</p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-sm mt-2">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Moksha Kachhia. Crafted with ☕ and 💚
          </p>
        </div>
      </div>
    </footer>
  );
};