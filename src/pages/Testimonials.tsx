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
      role: "Manager at RBC Borealis",
      image: "data:image/jpeg;base64,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",
      rating: 5,
      text: "Moksha significantly elevated our team’s support capabilities with her technical expertise, collaboration, and problem-solving skills. She is innovative, eager to learn, and has the potential to excel in any role. I would highly recommend hiring her to see what she can do for you.",
      hasRecommendation: true,
      recommendationImage: recSteven
    },
    {
      name: "Sky Morgan",
      role: "Founder & CEO of Chromatic Data",
      image: "data:image/jpeg;base64,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",
      rating: 5,
      text: "Moksha is a diligent and wonderful team member, demonstrating resilience, creativity, and persistence while engaging exceptionally well with stakeholders and meeting all project deadlines.",
      hasRecommendation: true,
      recommendationImage: recChromtic
    },
    {
      name: "Ali Akbarian",
      role: "Founder & CEO of InovativAI",
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
                        {testimonial.role}
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