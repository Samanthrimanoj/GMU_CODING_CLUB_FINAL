import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { UserPlus, Sparkles } from "lucide-react";
import { toast } from "sonner";

export default function Join() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    studentId: "",
    major: "",
    year: "",
    experience: "",
    interests: "",
    newsletter: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.studentId) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success("Welcome to GMU Coding Club! Check your email for next steps.");
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      studentId: "",
      major: "",
      year: "",
      experience: "",
      interests: "",
      newsletter: false,
    });
  };

  const benefits = [
    "Access to exclusive workshops and bootcamps",
    "Networking opportunities with industry professionals",
    "Participation in hackathons and coding competitions",
    "Resume-building project experience",
    "Mentorship from senior members",
    "Career guidance and interview preparation",
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="flex justify-center mb-6">
            <div className="p-6 bg-primary/10 rounded-full">
              <UserPlus className="h-16 w-16 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Join <span className="gradient-text">GMU Coding Club</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Become part of our vibrant coding community
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Benefits */}
          <div className="space-y-6">
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Member Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <span className="text-primary text-xs font-bold">✓</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle>No Experience Required!</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  Whether you're a complete beginner or an experienced developer, 
                  there's a place for you in our community.
                </p>
                <p>
                  We offer beginner-friendly workshops and pair you with mentors 
                  who can guide you on your coding journey.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Registration Form */}
          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle>Registration Form</CardTitle>
              <CardDescription>Fill out the form below to get started</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="bg-muted border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@gmu.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-muted border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="studentId">Student ID *</Label>
                  <Input
                    id="studentId"
                    placeholder="GMU123456"
                    value={formData.studentId}
                    onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                    required
                    className="bg-muted border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="major">Major</Label>
                  <Input
                    id="major"
                    placeholder="Computer Science"
                    value={formData.major}
                    onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                    className="bg-muted border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="year">Academic Year</Label>
                  <Select
                    value={formData.year}
                    onValueChange={(value) => setFormData({ ...formData, year: value })}
                  >
                    <SelectTrigger className="bg-muted border-border">
                      <SelectValue placeholder="Select your year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="freshman">Freshman</SelectItem>
                      <SelectItem value="sophomore">Sophomore</SelectItem>
                      <SelectItem value="junior">Junior</SelectItem>
                      <SelectItem value="senior">Senior</SelectItem>
                      <SelectItem value="graduate">Graduate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Coding Experience Level</Label>
                  <Select
                    value={formData.experience}
                    onValueChange={(value) => setFormData({ ...formData, experience: value })}
                  >
                    <SelectTrigger className="bg-muted border-border">
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interests">Areas of Interest</Label>
                  <Textarea
                    id="interests"
                    placeholder="e.g., Web Development, AI/ML, Mobile Apps..."
                    value={formData.interests}
                    onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                    className="bg-muted border-border min-h-[80px]"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, newsletter: checked as boolean })
                    }
                  />
                  <Label
                    htmlFor="newsletter"
                    className="text-sm font-normal cursor-pointer"
                  >
                    Subscribe to our newsletter for updates and events
                  </Label>
                </div>

                <Button type="submit" className="w-full" variant="hero" size="lg">
                  <UserPlus className="h-5 w-5 mr-2" />
                  Join the Club
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By joining, you agree to our terms and conditions
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Note */}
        <div className="mt-12 p-6 glass-card border-border/50 rounded-lg text-center">
          <p className="text-muted-foreground">
            <span className="font-semibold text-primary">Note:</span> Member registration and 
            management will be fully integrated with the database once Lovable Cloud is connected.
          </p>
        </div>
      </div>
    </div>
  );
}
