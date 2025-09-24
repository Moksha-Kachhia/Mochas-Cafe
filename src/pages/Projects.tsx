import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Coffee, ShoppingCart, MessageSquare, Briefcase } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "CoffeeTracker Pro",
      description: "A comprehensive coffee tracking app that helps users log their daily coffee consumption, discover new brewing methods, and connect with fellow coffee enthusiasts.",
      icon: <Coffee className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=250&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      features: ["Coffee logging", "Brewing timer", "Social features", "Analytics dashboard"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Web App"
    },
    {
      title: "EcoMarket",
      description: "Sustainable e-commerce platform connecting local farmers with conscious consumers. Features real-time inventory, carbon footprint tracking, and local delivery scheduling.",
      icon: <ShoppingCart className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=250&fit=crop",
      tech: ["Next.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      features: ["Local marketplace", "Carbon tracking", "Scheduled delivery", "Farmer profiles"],
      liveUrl: "#",
      githubUrl: "#",
      category: "E-commerce"
    },
    {
      title: "DevChat",
      description: "Real-time communication platform designed specifically for development teams. Includes code sharing, project channels, and integrated documentation.",
      icon: <MessageSquare className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      tech: ["Vue.js", "Socket.io", "Firebase", "TypeScript"],
      features: ["Real-time chat", "Code syntax highlighting", "File sharing", "Team management"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Communication"
    },
    {
      title: "TaskFlow",
      description: "Modern project management tool with intuitive Kanban boards, time tracking, and team collaboration features. Built for remote teams.",
      icon: <Briefcase className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      tech: ["React", "Python", "Django", "PostgreSQL"],
      features: ["Kanban boards", "Time tracking", "Team analytics", "Mobile responsive"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Productivity"
    }
  ];

  const categories = ["All", "Web App", "E-commerce", "Communication", "Productivity"];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl font-bold text-mocha mb-6">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my passion for creating meaningful digital experiences.
            Each one brewed with care and attention to detail.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="transition-all hover:scale-105"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group bg-gradient-card border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-hero/20 group-hover:bg-gradient-hero/10 transition-colors"></div>
                <div className="absolute top-4 left-4 p-2 bg-background/90 rounded-lg text-mocha">
                  {project.icon}
                </div>
                <Badge className="absolute top-4 right-4 bg-matcha text-primary-foreground">
                  {project.category}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl text-mocha group-hover:text-mocha-light transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold text-sm text-mocha mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="bg-matcha/10 text-matcha hover:bg-matcha/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-sm text-mocha mb-2">Key Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-matcha rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex-1 group/btn"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group/btn"
                  >
                    <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-mocha text-primary-foreground p-12 rounded-2xl max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let's grab a coffee and discuss how we can bring your ideas to life!
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 hover:scale-105 transition-transform"
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};