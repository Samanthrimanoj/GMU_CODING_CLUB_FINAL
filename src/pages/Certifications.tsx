import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Award, Download, Shield } from "lucide-react";
import { toast } from "sonner";

export default function Certifications() {
  const [studentId, setStudentId] = useState("");
  const [eventCode, setEventCode] = useState("");

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentId && eventCode) {
      toast.success("Certificate verified! Check your email for download link.");
      setStudentId("");
      setEventCode("");
    }
  };

  const certifications = [
    {
      id: 1,
      title: "React Workshop Completion",
      date: "October 2025",
      event: "Introduction to React",
      issued: "150 certificates",
    },
    {
      id: 2,
      title: "Hackathon 2024 Participant",
      date: "December 2024",
      event: "Annual Hackathon",
      issued: "120 certificates",
    },
    {
      id: 3,
      title: "Python Bootcamp Graduate",
      date: "September 2025",
      event: "Python for Beginners",
      issued: "85 certificates",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="flex justify-center mb-6">
            <div className="p-6 bg-primary/10 rounded-full">
              <Award className="h-16 w-16 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Verify and download your event participation certificates
          </p>
        </div>

        {/* Verification Form */}
        <Card className="glass-card border-border/50 mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Verify Your Certificate
            </CardTitle>
            <CardDescription>
              Enter your student ID and event code to retrieve your certificate
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleVerify} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="studentId">Student ID</Label>
                <Input
                  id="studentId"
                  placeholder="e.g., GMU123456"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  required
                  className="bg-muted border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="eventCode">Event Code</Label>
                <Input
                  id="eventCode"
                  placeholder="e.g., REACT2025"
                  value={eventCode}
                  onChange={(e) => setEventCode(e.target.value)}
                  required
                  className="bg-muted border-border"
                />
              </div>
              <Button type="submit" className="w-full" variant="hero">
                <Download className="h-4 w-4 mr-2" />
                Retrieve Certificate
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Available Certifications */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Available Certifications</h2>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <Card
                key={cert.id}
                className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{cert.title}</CardTitle>
                      <CardDescription>
                        Event: {cert.event}
                      </CardDescription>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div>
                      <span className="font-semibold">Date:</span> {cert.date}
                    </div>
                    <div>
                      <span className="font-semibold">Issued:</span> {cert.issued}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certificate Info */}
        <Card className="glass-card border-border/50 mt-12">
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                1
              </div>
              <p>
                <strong className="text-foreground">Participate in Events:</strong> Attend our workshops, 
                hackathons, and bootcamps to earn certificates.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                2
              </div>
              <p>
                <strong className="text-foreground">Receive Event Code:</strong> After the event, 
                you'll receive a unique event code via email.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                3
              </div>
              <p>
                <strong className="text-foreground">Verify & Download:</strong> Use your Student ID 
                and event code to verify and download your certificate.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                4
              </div>
              <p>
                <strong className="text-foreground">Unique Proof:</strong> Each certificate contains 
                a unique verification code to prevent fraud.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Note */}
        <div className="mt-8 p-6 glass-card border-border/50 rounded-lg text-center">
          <p className="text-muted-foreground">
            <span className="font-semibold text-primary">Note:</span> Certificate verification and 
            download functionality will be fully operational once Lovable Cloud is connected.
          </p>
        </div>
      </div>
    </div>
  );
}
