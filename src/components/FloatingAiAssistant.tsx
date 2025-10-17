import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Send, X } from "lucide-react";
import { toast } from "sonner";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function FloatingAiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your GMU Coding Club AI Assistant. How can I help you today? You can ask me about events, workshops, projects, or anything related to the coding club!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) {
      toast.error("Please enter a message");
      return;
    }

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response (this would be enhanced with Lovable Cloud AI)
    setTimeout(() => {
      const aiResponse: Message = {
        role: "assistant",
        content: getAIResponse(input),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const getAIResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();

    if (lowerQuery.includes("event") || lowerQuery.includes("workshop")) {
      return "We have exciting events coming up! Check out our Introduction to React Workshop on Nov 15 and our Hackathon 2025 from Dec 5-7. You can view all events in the Events tab.";
    } else if (lowerQuery.includes("join") || lowerQuery.includes("member")) {
      return "We'd love to have you join! Head over to the Join page to fill out the membership form. Membership is free and gives you access to all our events, workshops, and projects!";
    } else if (lowerQuery.includes("project")) {
      return "Our members work on various exciting projects! From web development to AI/ML, we've got it all. Check out the Projects page to see what we're building and how you can contribute!";
    } else if (lowerQuery.includes("certification") || lowerQuery.includes("quiz")) {
      return "We offer certifications through our quiz platform! Complete quizzes on various programming topics to earn certificates and showcase your skills. Visit the Certifications page to get started!";
    } else if (lowerQuery.includes("hello") || lowerQuery.includes("hi")) {
      return "Hello! Welcome to GMU Coding Club! What would you like to know about our community?";
    } else {
      return "That's a great question! For more specific information, I recommend exploring our website or reaching out to our club leaders. You can also check out our Events, Projects, and Certifications pages for more details!";
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform z-50 bg-gradient-to-r from-primary to-secondary"
        size="icon"
      >
        <Sparkles className="h-6 w-6" />
      </Button>

      {/* Chat Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl h-[600px] flex flex-col p-0">
          <DialogHeader className="p-6 pb-4 border-b">
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  AI Assistant
                </DialogTitle>
                <DialogDescription className="mt-1">
                  Ask me anything about GMU Coding Club!
                </DialogDescription>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>

          {/* Messages Area */}
          <ScrollArea className="flex-1 p-6">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-4 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg p-4 bg-muted">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="p-6 pt-4 border-t">
            <div className="flex gap-2">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question here..."
                className="min-h-[60px] resize-none"
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                disabled={isLoading || !input.trim()}
                size="icon"
                className="h-[60px] w-[60px] shrink-0"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Press Enter to send, Shift+Enter for new line
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
