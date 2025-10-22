import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { RecommendationModal } from "@/components/RecommendationModal";
import { Star, Quote, FileText } from "lucide-react";
import { useState } from "react";
import recQis from "@/assets/qis_endoresment.png";
import recChromtic from "@/assets/chromatic_data_endoresment.png";
import recJeff from "@/assets/jeff.png";
import recSteven from "@/assets/Steven.png";

export const Testimonials = () => {
  const [selectedRecommendation, setSelectedRecommendation] = useState<{
    clientName: string;
    imageSrc: string;
  } | null>(null);

  const testimonials = [
    {
      name: "Jeffrey Tahmazian",
      role: "Team Lead",
      company: "Rbc Borealis",
      image: "data:image/jpeg;base64,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",
      rating: 5,
      text: "Moksha quickly mastered new technologies, delivered high-quality solutions, and brought strong problem-solving and communication skills to every task. She’s a pleasure to work with and a valuable asset to any team.",
      hasRecommendation: true,
      recommendationImage: recJeff
    },
    {
      name: "Steven Ganeshram",
      role: "Manager",
      company: "RBC Borealis",
      image: "data:image/jpeg;base64,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",
      rating: 5,
      text: "Moksha significantly elevated our team’s support capabilities with her technical expertise, collaboration, and problem-solving skills. She is innovative, eager to learn, and has the potential to excel in any role. I would highly recommend hiring her to see what she can do for you.",
      hasRecommendation: true,
      recommendationImage: recSteven
    },
    {
      name: "Sky Morgan",
      role: "Founder & CEO",
      company: "Chromatic Data",
      image: "data:image/jpeg;base64,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",
      rating: 5,
      text: "Moksha is a diligent and wonderful team member, demonstrating resilience, creativity, and persistence while engaging exceptionally well with stakeholders and meeting all project deadlines.",
      hasRecommendation: true,
      recommendationImage: recChromtic
    },
    {
      name: "Ali Akbarian",
      role: "Founder & CTO",
      company: "InovativAI (Formerly Quantum International Services)",
      image: "data:image/jpeg;base64,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",
      rating: 5,
      text : "Moksha consistently delivered impressive, timely reports and was a dedicated, valuable member of our market research team. Her contributions and professionalism make me confident in her continued success.",
      hasRecommendation: true,
      recommendationImage: recQis
    }
  ];

  const stats = [
    { number: "12+", label: "Months of Professional Dev. Experience" },
    { number: "2-3", label: "Years of CS Courses Completed" },
    { number: "5★", label: "Average Employer Rating" },
    { number: "2027", label: "Expected Graduation" }
  ];

  const awards = [
    {
      title: "RBC Innovation Case Competition",
      subtitle: "1st Place",
      date: "Jul. 2025",
      icon: <Star className="w-5 h-5 text-yellow-500" />,
    },
    {
      title: "DaVinci Hackathon",
      subtitle: "Best Sustainability Project",
      date: "Oct. 2023",
      icon: <Star className="w-5 h-5 text-green-500" />,
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl font-bold text-mocha mb-6">
            Employer Testimonials & Awards
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my previous employers have to say about 
            working together and the results we've achieved!
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-matcha text-primary-foreground p-8 rounded-2xl mb-4 shadow-lg">
                <div className="font-serif text-4xl font-bold mb-2">{stat.number}</div>
              </div>
              <p className="font-medium text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          {testimonials.slice(0, 4).map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-matcha/20 group-hover:text-matcha/30 transition-colors">
                <Quote className="h-8 w-8" />
              </div>

              <CardContent className="p-8">
                {/* Rating Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-matcha text-matcha" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12 border-2 border-matcha/20">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-matcha/10 text-matcha font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-mocha">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                  
                  {testimonial.hasRecommendation && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedRecommendation({
                        clientName: testimonial.name,
                        imageSrc: testimonial.recommendationImage
                      })}
                      className="text-matcha hover:text-matcha-light hover:bg-matcha/10 flex items-center space-x-1"
                    >
                      <FileText className="h-4 w-4" />
                      <span className="text-xs">View Letter</span>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Awards Section */}
        <div className="my-20">
          <h2 className="text-3xl font-serif font-bold text-center text-mocha mb-8">
            Awards & Hackathons
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, idx) => (
              <Card
                key={idx}
                className="bg-gradient-card border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                <CardContent className="flex items-center space-x-4 p-6">
                  {award.icon}
                  <div>
                    <p className="font-semibold text-mocha">{award.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {award.subtitle} — {award.date}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>



        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-hero text-primary-foreground p-12 rounded-2xl max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4">
                <Quote className="h-16 w-16" />
              </div>
              <div className="absolute bottom-4 right-4 rotate-180">
                <Quote className="h-16 w-16" />
              </div>
            </div>
            
            <div className="relative z-10">
              <h2 className="font-serif text-4xl font-bold mb-6">
                Want me on your team?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Join my list of satisfied employers and let's build something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors"
                onClick={() => {
                  const footer = document.querySelector("footer");
                  if (footer) {
                    footer.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Let's Get in Touch
              </button>
            </div>
            </div>
          </div>
        </div>

        {/* Recommendation Modal */}
        {selectedRecommendation && (
          <RecommendationModal
            isOpen={!!selectedRecommendation}
            onClose={() => setSelectedRecommendation(null)}
            clientName={selectedRecommendation.clientName}
            imageSrc={selectedRecommendation.imageSrc}
          />
        )}
      </div>
    </div>
  );
};