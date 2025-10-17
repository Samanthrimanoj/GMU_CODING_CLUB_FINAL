import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Users, Trophy, Rocket, Calendar, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import codingWorkspace from "@/assets/coding-workspace.jpg";
import FloatingAiAssistant from "@/components/FloatingAiAssistant";

export default function Home() {
  const features = [
    {
      icon: Code2,
      title: "Learn & Code",
      description: "Master programming languages and build real-world projects",
    },
    {
      icon: Users,
      title: "Collaborate",
      description: "Connect with fellow coders and work on exciting team projects",
    },
    {
      icon: Trophy,
      title: "Compete",
      description: "Participate in hackathons and coding competitions",
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Deploy your projects and showcase your skills",
    },
  ];

  const upcomingEvents = [
    {
      title: "Introduction to React Workshop",
      date: "Nov 15, 2025",
      time: "6:00 PM",
      venue: "Lab 301",
    },
    {
      title: "Hackathon 2025",
      date: "Dec 5-7, 2025",
      time: "All Day",
      venue: "Main Hall",
    },
  ];

  return (
    <div className="min-h-screen">
      <FloatingAiAssistant />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-0" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold">
              Welcome to{" "}
              <span className="gradient-text">GMU Coding Club</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Where innovation meets collaboration. Join us to code, learn, and build the future together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/join">
                <Button variant="hero" size="lg">
                  <Rocket className="h-5 w-5 mr-2" />
                  Join Now
                </Button>
              </Link>
              <Link to="/events">
                <Button variant="glass" size="lg">
                  <Calendar className="h-5 w-5 mr-2" />
                  View Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Join Us?</h2>
            <p className="text-xl text-muted-foreground">
              Be part of a thriving community of coders
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                At GMU Coding Club, we believe in empowering students through technology. 
                Our mission is to create an inclusive environment where everyone, from beginners 
                to advanced programmers, can grow their skills and build amazing projects.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-1 bg-accent/20 rounded-full mt-1">
                    <BookOpen className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Learn Together</h3>
                    <p className="text-sm text-muted-foreground">
                      Weekly workshops and hands-on coding sessions
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-1 bg-secondary/20 rounded-full mt-1">
                    <Trophy className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Compete & Excel</h3>
                    <p className="text-sm text-muted-foreground">
                      Regular competitions and hackathons with prizes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-float">
              <img
                src={codingWorkspace}
                alt="Coding workspace"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground">
              Don't miss out on our exciting activities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    📅 {event.date} at {event.time}
                  </p>
                  <p className="text-sm text-muted-foreground">📍 {event.venue}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/events">
              <Button variant="outline" size="lg">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of students already coding with us
            </p>
            <Link to="/join">
              <Button variant="hero" size="lg">
                <Users className="h-5 w-5 mr-2" />
                Become a Member
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
