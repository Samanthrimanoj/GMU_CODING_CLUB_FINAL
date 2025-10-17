import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Lightbulb, Heart } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "We believe in creating an inclusive environment where everyone can thrive and learn together.",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Setting clear objectives and working systematically to achieve excellence in coding.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Encouraging creative thinking and embracing new technologies to solve real-world problems.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Fostering a genuine love for programming and technology that drives continuous learning.",
    },
  ];

  const team = [
    {
      name: "Alex Rodriguez",
      role: "President",
      bio: "Computer Science senior passionate about web development and open source.",
    },
    {
      name: "Sarah Johnson",
      role: "Vice President",
      bio: "Software Engineering student specializing in mobile app development.",
    },
    {
      name: "Michael Chen",
      role: "Technical Lead",
      bio: "Full-stack developer with expertise in React, Node.js, and cloud computing.",
    },
    {
      name: "Emily Martinez",
      role: "Events Coordinator",
      bio: "Organizing amazing workshops and hackathons to bring the community together.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-5xl font-bold mb-4">
            About <span className="gradient-text">GMU Coding Club</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded in 2020, GMU Coding Club has grown into one of the most active 
            tech communities on campus, bringing together students passionate about programming, 
            innovation, and collaboration.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-16">
          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                To empower students with the skills, knowledge, and opportunities needed to excel 
                in the ever-evolving world of technology. We strive to create a supportive environment 
                where members can learn, build, compete, and grow together as developers and innovators.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group text-center"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card
                key={index}
                className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 text-center"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl font-bold">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-sm text-primary font-semibold">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="glass-card border-border/50 text-center">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold gradient-text mb-2">500+</div>
              <p className="text-muted-foreground">Active Members</p>
            </CardContent>
          </Card>
          <Card className="glass-card border-border/50 text-center">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <p className="text-muted-foreground">Projects Built</p>
            </CardContent>
          </Card>
          <Card className="glass-card border-border/50 text-center">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold gradient-text mb-2">30+</div>
              <p className="text-muted-foreground">Workshops</p>
            </CardContent>
          </Card>
          <Card className="glass-card border-border/50 text-center">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold gradient-text mb-2">10+</div>
              <p className="text-muted-foreground">Hackathons</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
