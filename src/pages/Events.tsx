import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users, Plus, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  category: string;
  attendees: number;
}

export default function Events() {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "Introduction to React Workshop",
      description: "Learn the fundamentals of React and build your first component-based application.",
      date: "2025-11-15",
      time: "6:00 PM - 8:00 PM",
      venue: "Lab 301",
      category: "Workshop",
      attendees: 45,
    },
    {
      id: 2,
      title: "Hackathon 2025",
      description: "48-hour coding marathon. Build innovative solutions and compete for amazing prizes!",
      date: "2025-12-05",
      time: "All Day (Dec 5-7)",
      venue: "Main Hall",
      category: "Competition",
      attendees: 120,
    },
    {
      id: 3,
      title: "Python for Data Science",
      description: "Explore data analysis and visualization using Python libraries like Pandas and Matplotlib.",
      date: "2025-11-22",
      time: "5:30 PM - 7:30 PM",
      venue: "Room 205",
      category: "Workshop",
      attendees: 38,
    },
    {
      id: 4,
      title: "Web Development Bootcamp",
      description: "Full-stack web development fundamentals covering HTML, CSS, JavaScript, and Node.js.",
      date: "2025-11-29",
      time: "4:00 PM - 7:00 PM",
      venue: "Lab 401",
      category: "Bootcamp",
      attendees: 52,
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAiDialogOpen, setIsAiDialogOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    venue: "",
    category: "",
  });
  const [aiPrompt, setAiPrompt] = useState("");

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.time || !newEvent.venue || !newEvent.category) {
      toast.error("Please fill in all fields");
      return;
    }

    const event: Event = {
      id: events.length + 1,
      ...newEvent,
      attendees: 0,
    };

    setEvents([...events, event]);
    setIsDialogOpen(false);
    setNewEvent({
      title: "",
      description: "",
      date: "",
      time: "",
      venue: "",
      category: "",
    });
    toast.success("Event added successfully!");
  };

  const handleAiAssistant = () => {
    if (!aiPrompt) {
      toast.error("Please enter a prompt");
      return;
    }
    
    // Simulate AI response
    toast.success("AI is processing your request...", {
      description: "This feature will be enhanced with Lovable Cloud AI capabilities"
    });
    setAiPrompt("");
    setIsAiDialogOpen(false);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Workshop":
        return "bg-primary/10 text-primary border-primary/30";
      case "Competition":
        return "bg-destructive/10 text-destructive border-destructive/30";
      case "Bootcamp":
        return "bg-accent/10 text-accent border-accent/30";
      default:
        return "bg-secondary/10 text-secondary border-secondary/30";
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl font-bold mb-4">
            Upcoming <span className="gradient-text">Events</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our workshops, competitions, and bootcamps to enhance your coding skills
          </p>
          
          {/* Action Buttons */}
          <div className="flex gap-4 justify-center mt-8">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  Add New Event
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Add New Event</DialogTitle>
                  <DialogDescription>
                    Create a new event for the GMU Coding Club
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Event Title</Label>
                    <Input
                      id="title"
                      value={newEvent.title}
                      onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                      placeholder="Enter event title"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={newEvent.description}
                      onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                      placeholder="Enter event description"
                      rows={3}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="date">Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={newEvent.date}
                        onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="time">Time</Label>
                      <Input
                        id="time"
                        value={newEvent.time}
                        onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                        placeholder="e.g., 6:00 PM - 8:00 PM"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="venue">Venue</Label>
                      <Input
                        id="venue"
                        value={newEvent.venue}
                        onChange={(e) => setNewEvent({ ...newEvent, venue: e.target.value })}
                        placeholder="e.g., Lab 301"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="category">Category</Label>
                      <Select
                        value={newEvent.category}
                        onValueChange={(value) => setNewEvent({ ...newEvent, category: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Workshop">Workshop</SelectItem>
                          <SelectItem value="Competition">Competition</SelectItem>
                          <SelectItem value="Bootcamp">Bootcamp</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleAddEvent}>Add Event</Button>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={isAiDialogOpen} onOpenChange={setIsAiDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Sparkles className="h-4 w-4" />
                  AI Assistant
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>AI Event Assistant</DialogTitle>
                  <DialogDescription>
                    Ask AI to help you with event planning, suggestions, or improvements
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="ai-prompt">What would you like help with?</Label>
                    <Textarea
                      id="ai-prompt"
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                      placeholder="e.g., Suggest event ideas for beginners, Create a workshop schedule, Generate event descriptions..."
                      rows={4}
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsAiDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleAiAssistant} className="gap-2">
                    <Sparkles className="h-4 w-4" />
                    Ask AI
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event) => (
            <Card
              key={event.id}
              className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(
                      event.category
                    )}`}
                  >
                    {event.category}
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    {event.attendees}
                  </div>
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {event.title}
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  {event.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2 text-primary" />
                  {new Date(event.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2 text-secondary" />
                  {event.time}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2 text-accent" />
                  {event.venue}
                </div>
                <Button className="w-full mt-4" variant="default">
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Card */}
        <div className="mt-12 p-6 glass-card border-border/50 rounded-lg text-center">
          <p className="text-muted-foreground">
            <span className="font-semibold text-premium">✨ Tip:</span> Enable Lovable Cloud to persist events 
            and unlock advanced AI features for event management and recommendations.
          </p>
        </div>
      </div>
    </div>
  );
}
