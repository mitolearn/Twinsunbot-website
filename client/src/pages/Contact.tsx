import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SiDiscord, SiX } from "react-icons/si";
import { Mail } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="How can we help?"
                    required
                    data-testid="input-subject"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    required
                    data-testid="input-message"
                  />
                </div>

                <Button type="submit" className="w-full" data-testid="button-submit">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Connect With Us</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-stellar-blue/10 flex items-center justify-center shrink-0">
                    <SiDiscord className="w-6 h-6 text-stellar-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Discord Server</h4>
                    <p className="text-sm text-muted-foreground">Join our community server</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-stellar-blue/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-stellar-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-sm text-muted-foreground">support@twinsunbot.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-stellar-blue/10 flex items-center justify-center shrink-0">
                    <SiX className="w-6 h-6 text-stellar-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">X (Twitter)</h4>
                    <p className="text-sm text-muted-foreground">@TwinSunBot</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-stellar-blue/5">
              <h3 className="text-xl font-bold text-foreground mb-4">Support Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 6:00 PM (GMT+8)</p>
                <p>Saturday: 10:00 AM - 4:00 PM (GMT+8)</p>
                <p>Sunday: Closed</p>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Premium users receive 24/7 priority support
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
