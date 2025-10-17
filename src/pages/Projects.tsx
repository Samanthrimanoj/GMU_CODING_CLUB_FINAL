import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Filter } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  contributors: string[];
  demoUrl?: string;
  githubUrl: string;
  category: string;
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const projects: Project[] = [
    {
      id: 1,
      title: "Campus Event Finder",
      description: "A web app to discover and manage campus events, with real-time notifications and calendar integration.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      contributors: ["Alex Johnson", "Sarah Chen"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/gmucodingclub/campus-events",
      category: "Web",
    },
    {
      id: 2,
      title: "Study Buddy AI",
      description: "An AI-powered study assistant that helps students with homework, provides explanations, and creates practice quizzes.",
      technologies: ["Python", "TensorFlow", "Flask", "React"],
      contributors: ["Michael Brown", "Emily Davis"],
      githubUrl: "https://github.com/gmucodingclub/study-buddy",
      category: "AI/ML",
    },
    {
      id: 3,
      title: "Code Collaboration Platform",
      description: "Real-time collaborative coding environment with video chat, syntax highlighting, and version control.",
      technologies: ["TypeScript", "WebRTC", "Express", "PostgreSQL"],
      contributors: ["David Wilson", "Lisa Anderson"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/gmucodingclub/code-collab",
      category: "Web",
    },
    {
      id: 4,
      title: "Mobile Fitness Tracker",
      description: "Cross-platform mobile app for tracking workouts, nutrition, and setting fitness goals with social features.",
      technologies: ["React Native", "Firebase", "Redux"],
      contributors: ["James Taylor", "Maria Garcia"],
      githubUrl: "https://github.com/gmucodingclub/fitness-tracker",
      category: "Mobile",
    },
    {
      id: 5,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing and analyzing campus data including enrollment, courses, and facilities.",
      technologies: ["D3.js", "React", "Python", "Pandas"],
      contributors: ["Robert Martinez", "Jennifer Lee"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/gmucodingclub/data-viz",
      category: "Data Science",
    },
    {
      id: 6,
      title: "Blockchain Voting System",
      description: "Secure and transparent voting system using blockchain technology for club elections and polls.",
      technologies: ["Solidity", "Ethereum", "Web3.js", "React"],
      contributors: ["Christopher White", "Amanda Clark"],
      githubUrl: "https://github.com/gmucodingclub/blockchain-voting",
      category: "Blockchain",
    },
  ];

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Web": "bg-primary/10 text-primary border-primary/30",
      "AI/ML": "bg-secondary/10 text-secondary border-secondary/30",
      "Mobile": "bg-accent/10 text-accent border-accent/30",
      "Data Science": "bg-purple-500/10 text-purple-400 border-purple-500/30",
      "Blockchain": "bg-amber-500/10 text-amber-400 border-amber-500/30",
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl font-bold mb-4">
            Our <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore innovative projects built by our talented members
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2 mb-8 flex-wrap justify-center">
          <Filter className="h-5 w-5 text-muted-foreground" />
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group flex flex-col"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge
                    variant="outline"
                    className={`${getCategoryColor(project.category)} border`}
                  >
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-1">Contributors:</p>
                    <p className="text-xs text-muted-foreground">
                      {project.contributors.join(", ")}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  {project.demoUrl && (
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                  <Button variant="default" size="sm" className="flex-1" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No projects found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
