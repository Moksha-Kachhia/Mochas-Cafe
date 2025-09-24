import { Button } from "@/components/ui/button";
import { PlatformerGame } from "@/components/PlatformerGame";
import { ArrowDown, Brain, Code, Coffee } from "lucide-react";
import cafeHero from "@/assets/cafe-hero.jpg";

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${cafeHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero/80"></div>
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
          <div className="inline-block w-full md:w-auto rounded-xl shadow-lg px-8 py-10"
            style={{
              background: "rgba(255, 255, 255, 0.7)", // translucent white
              border: "2px solid rgba(139, 69, 19, 0.15)", // subtle mocha border
              backdropFilter: "blur(2px)",
            }}
          >
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span className="text-mocha-dark">Welcome to Moksha's</span>
              <span className="block text-matcha-dark">Cafe Corner</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-mocha-dark leading-relaxed">
              Where code meets creativity, brewing innovative solutions one line at a time
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              {/* See Testimonials Button */}
              <Button
                size="lg"
                className="text-lg px-8 bg-mocha-dark text-cream hover:bg-mocha hover:text-cream transition-colors"
                onClick={() => {
                  window.location.href = "/Testimonials";
                }}
              >
                See Testimonials
              </Button>
              {/* Contact Me Button */}
              <Button
                size="lg"
                className="text-lg px-8 bg-mocha-dark text-cream hover:bg-mocha hover:text-cream transition-colors"
                onClick={() => {
                  const footer = document.querySelector("footer");
                  if (footer) {
                    footer.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Contact Me
              </Button>
            </div>

            <div className="flex justify-center items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Code className="h-5 w-5 text-mocha-dark" />
                <span className="text-mocha-dark font-semibold">Full Stack</span>
              </div>
              <div className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-mocha-dark" />
                <span className="text-mocha-dark font-semibold">ML/AI</span>
              </div>
              <div className="flex items-center space-x-2">
                <Coffee className="h-5 w-5 text-mocha-dark" />
                <span className="text-mocha-dark font-semibold">Coffee Lover</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/60 animate-bounce">
          <ArrowDown className="h-6 w-6" />
        </div>
      </section>

      {/* Game Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold text-mocha mb-8">
            Take a Break & Play
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Enjoy a simple platformer game inspired by the classic Chrome Dino. 
            Help our cup of matcha jump over the coffee beans!
          </p>
          
          <div className="max-w-2xl mx-auto">
            <PlatformerGame />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-mocha mb-6">
                Crafting Digital Experiences
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Hi, I’m Moksha, a CS student at UofT who loves crafting digital experiences! 
                Like a perfect cup of coffee, I blend technical skill with creativity to build 
                software that’s both functional and delightful. 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                From chatbots to study platforms, I enjoy working across the stack and exploring 
                how ML and design can come together to make an impact. When I’m not coding, you’ll 
                probably find me painting, cooking, or lifting. 🌸
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <Code className="h-12 w-12 text-mocha mb-4" />
                <h3 className="font-semibold text-lg mb-2">Clean Code</h3>
                <p className="text-muted-foreground text-sm">
                  Writing maintainable, scalable solutions
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <Brain className="h-12 w-12 text-matcha mb-4" />
                <h3 className="font-semibold text-lg mb-2">Design Focus</h3>
                <p className="text-muted-foreground text-sm">
                  User experience at the heart of everything
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <Coffee className="h-12 w-12 text-mocha-light mb-4" />
                <h3 className="font-semibold text-lg mb-2">Collaboration</h3>
                <p className="text-muted-foreground text-sm">
                  Working together over great coffee
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <ArrowDown className="h-12 w-12 text-matcha-light mb-4 rotate-45" />
                <h3 className="font-semibold text-lg mb-2">Innovation</h3>
                <p className="text-muted-foreground text-sm">
                  Always exploring new possibilities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};