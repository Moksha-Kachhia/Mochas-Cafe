import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { link } from "fs";
import { useState } from "react";


export const Projects = () => {
  const projects = [
    {
      name: "PocketEquity",
      tech: ["React", "ReactNative", "AI", "Node.js"],
      period: "May 2025 – Present",
      description:
        "Founding Engineer. Designing and shipping MVPs for investor dashboards and mobile apps using React/React Native. Integrating an AI recommendation pipeline to personalize suggestions and enable rapid feedback.",
      features: [
        "Investor analytics dashboard",
        "AI-powered recommendation pipeline",
        "Cross-platform mobile app (React Native)"
      ],
      category: ["Fintech", "Web App", "AI"]
    },
    {
      name: "FocusFlow",
      tech: ["React", "Tailwind", "CSS", "Flask", "Vercel", "Render", "GitHub Actions"],
      period: "Oct 2025",
      description:
        "Built a full-stack web app to support neurodiverse learners through AI-powered study tools. Set up CI/CD pipeline with GitHub Actions and pre-commit hooks to automate testing and deployment.",
      features: [
        "AI-based task prioritization",
        "Firebase authentication and sync",
        "CI/CD automation with GitHub Actions"
      ],
      devpost: "https://devpost.com/software/focus-flow-nr80uo",
      code: "https://github.com/Moksha-Kachhia/FocusFlow",
      category: ["Productivity", "Web App", "AI"],
    },
    {
      name: "Studylet",
      tech: ["React", "Node.js", "Firebase", "Stripe", "MongoDB"],
      period: "Aug 2025 – Present",
      description:
        "Developing a study platform with modular back-end + cloud-integrated front-end, secure payments, and scalable database design. Implemented ML-driven personalized recommendations.",
      features: [
        "Cloud-based learning modules",
        "Automated deployment pipelines",
        "Machine learning personalization"
      ],
      code: "https://github.com/Moksha-Kachhia/Studylet",
      category: ["Productivity", "Web App", "AI"]
    },
    {
      name: "PlanetZe App",
      tech: ["Java", "XML", "Firebase", "Android Studio"],
      period: "Oct 2024 – Dec 2024",
      description:
        "Built a full-stack Android app as Scrum Master in 6 weeks using Agile methodology. Implemented authentication flows with MVP architecture and modular design.",
      features: [
        "Firebase login system",
        "Agile 6-week development sprint",
        "Modular MVP architecture"
      ],
      code: "https://github.com/Planetze-Group21/Android-App",
      category: ["Mobile App", "Sustainability"]
    }
  ];

  const categories = ["All", "Web App", "Fintech", "Mobile App", "Productivity", "Sustainability", "AI"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category.includes(selectedCategory));

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
              variant={category === selectedCategory ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="transition-all hover:scale-105"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
           {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="group bg-gradient-card border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Optional Project Image */}
              {/* {project.image && (
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-hero/20 group-hover:bg-gradient-hero/10 transition-colors"></div>
                  {project.category && (
                    <Badge className="absolute top-4 right-4 bg-matcha text-primary-foreground">
                      {project.category}
                    </Badge>
                  )}
                </div>
              )} */}

              <CardHeader>
                <CardTitle className="text-2xl text-mocha group-hover:text-mocha-light transition-colors">
                  {project.name}
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
                {project.features && (
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
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  {/* {project.link && (
                    <Button
                      variant="default"
                      size="sm"
                      asChild
                      className="flex-1 group/btn"
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Live Demo
                      </a>
                    </Button>
                  )} */}
                  {project.devpost && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 group/btn"
                    >
                      <a
                        href={project.devpost}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Devpost
                      </a>
                    </Button>
                  )}
                  {project.code && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 group/btn"
                    >
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-mocha text-primary-foreground p-12 rounded-2xl max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-4">
              Want to See All of My Public Projects?
            </h2>
             <a
                href="https://github.com/Moksha-Kachhia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  size="lg"
                  className="text-lg px-8 hover:scale-105 transition-transform"
                >
                  Checkout My GitHub!
                </Button>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};
