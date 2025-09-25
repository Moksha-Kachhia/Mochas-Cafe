import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Undergraduate Researcher – AI for ASD Diagnosis and Management",
      company: "University of Toronto",
      location: "Toronto, ON",
      period: "Sept 2025 – Present",
      description:
        "Conducting literature mapping on 50–100 AI/ML publications weekly focused on diagnostic and management models for ASD. Evaluating and categorizing methods (deep learning, NLP, and clinical decision support) to identify gaps for applied ML research.",
      skills: ["AI/ML", "Deep Learning", "NLP", "Research"]
    },
    {
      title: "Automation Engineer Co-op",
      company: "RBC Borealis – Tableau / AI & Data",
      location: "Toronto, ON",
      period: "Jan 2025 – Aug 2025",
      description:
        "Optimized Tableau & BI platforms serving 50K+ enterprise users. Developed Python automation workflows cutting pipeline processing time by 30%. Built an NLP chatbot handling 100K+ queries to improve client team efficiency.",
      skills: ["Python", "Automation", "Tableau", "Chatbots", "NLP"]
    },
    {
      title: "ML Software Engineer – Synthetic Data",
      company: "Chromatic Data",
      location: "Remote",
      period: "Jan 2025 – Mar 2025",
      description:
        "Engineered synthetic datasets using GANs and statistical sampling to preserve fidelity while enabling model generalization. Benchmarked ML model accuracy on synthetic vs. real datasets, achieving >90% similarity in predictive performance.",
      skills: ["GANs", "Synthetic Data", "Machine Learning", "Python"]
    },
    {
      title: "Technology Director / Co-President",
      company: "Web3.0 UofT Student Group",
      location: "Toronto, ON",
      period: "May 2024 – Present",
      description:
        "Led a cross-functional team to build a Firebase + React event portal and data dashboards for 200+ active users. Delivered technical workshops on ML, Python, and full-stack development for 50+ students.",
      skills: ["React", "Firebase", "Team Leadership", "Workshops"]
    },
    {
      title: "Technology Associate",
      company: "AMACSS (Association of Mathematical & Computer Science Students)",
      location: "Toronto, ON",
      period: "Sept 2024 – Apr 2025",
      description:
        "Maintained legacy club website while contributing to a new Supabase + React full-stack site. Assisted in technical workshops including a Discord Bot Workshop and LeetCode Workshop.",
      skills: ["React", "Supabase", "Web Development", "Workshops"]
    },
    {
      title: "Machine Learning Engineer Intern",
      company: "Unique Get Together Society",
      location: "Vancouver, BC (Remote)",
      period: "Apr 2024 – Jun 2024",
      description:
        "Developed recommendation algorithms, fraud detection models, and predictive analytics pipelines using TensorFlow and PyTorch. Built time-series forecasting models and delivered insights with Jupyter reports and presentations.",
      skills: ["TensorFlow", "PyTorch", "ML", "Data Analysis", "SQL"]
    },
    {
      title: "Software Programmer",
      company: "DataAnnotation",
      location: "Remote",
      period: "Mar 2024 – Present",
      description:
        "Delivered high-quality Python and JavaScript programs with a focus on troubleshooting, debugging, and ML integration. Earned performance bonuses for efficient delivery.",
      skills: ["Python", "JavaScript", "C++", "ML", "Debugging"]
    },
    {
      title: "Technological Innovation Analyst (AI, Software, DevOps)",
      company: "Quantum International Services Ltd.",
      location: "Calgary, AB (Remote)",
      period: "Mar 2024 – May 2024",
      description:
        "Developed unique AI and algorithm-based solutions for client services. Explored emerging AI-driven technologies through DevOps practices to forecast potential impact.",
      skills: ["AI", "DevOps", "SDLC", "Cloud Infrastructure"]
    },
    {
      title: "CS & Management Research Lead – Undergrad Research Symposium",
      company: "Scarborough Campus Students' Union",
      location: "Toronto, ON",
      period: "Feb 2024 – Apr 2024",
      description:
        "Led innovative computer science and management research methodologies. Organized workshops to refine presentation skills and advised undergraduate researchers for clarity and coherence.",
      skills: ["Research", "Scientific Writing", "Team Management"]
    }
  ];

  const projects = [
    {
      name: "Studylet",
      tech: ["React", "Node.js", "Firebase", "Stripe", "MongoDB"],
      period: "Aug 2025 – Present",
      description:
        "Developing a study platform with modular back-end + cloud-integrated front-end, secure payments, and scalable database design. Implemented ML-driven personalized recommendations."
    },
    {
      name: "PlanetZe App",
      tech: ["Java", "XML", "Firebase", "Android Studio"],
      period: "Oct 2024 – Dec 2024",
      description:
        "Built full-stack Android app as Scrum Master in 6 weeks using Agile methodology. Implemented authentication flows with MVP architecture and modular design."
    }
  ];

  const skills = [
    { category: "Languages", items: ["Python", "Java", "C", "C++", "SQL", "JavaScript", "TypeScript", "HTML/CSS", "Bash"] },
    { category: "Frameworks", items: ["React", "Node.js", "FastAPI", "TensorFlow", "PyTorch", "LangChain", "scikit-learn", "Pandas", "NumPy"] },
    { category: "Cloud & Tools", items: ["Firebase", "Supabase", "Docker", "Kubernetes", "Tableau", "SAS", "Oracle BI", "Git", "Jupyter"] },
    { category: "Concepts", items: ["GenAI/LLMs", "RAG", "Prompt Engineering", "ETL", "CI/CD", "Cloud App Dev", "Statistical Analysis"] }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl font-bold text-mocha mb-6">
            My Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From coffee-fueled coding sessions to crafting professional solutions, here's my path in the world of development.
          </p>
        </div>

        {/* Experience */}
        <section className="mb-20">
          <h2 className="font-serif text-3xl font-bold text-mocha mb-12 text-center">
            Professional Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0">
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-border"></div>
                <div className="absolute left-0 top-6 w-6 h-6 bg-mocha rounded-full border-4 border-background"></div>
                <Card className="bg-gradient-card border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl text-mocha">{exp.title}</CardTitle>
                        <p className="text-lg font-semibold text-matcha">{exp.company}</p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-2">
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-matcha/10 text-matcha hover:bg-matcha/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-20">
          <h2 className="font-serif text-3xl font-bold text-mocha mb-12 text-center">
            Latest Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((proj, index) => (
              <Card key={index} className="bg-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg text-mocha">{proj.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{proj.period}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{proj.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="bg-matcha/10 text-matcha hover:bg-matcha/20">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="font-serif text-3xl font-bold text-mocha mb-12 text-center">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category} className="bg-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg text-mocha">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <div key={skill} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{skill}</span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${i < 4 ? "bg-matcha" : "bg-border"}`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
export default Experience;