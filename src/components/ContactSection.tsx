import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", projectType: "", budget: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", projectType: "", budget: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
              Let's Build <span className="gradient-text">Together</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Ready to turn your idea into a high-performing digital product? Fill out the form
              or book a call — we respond within 24 hours.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-secondary-foreground">
                <Mail className="w-5 h-5 text-primary" />
                abdurrehman@levelmeup.app
              </div>
              <div className="flex items-center gap-3 text-secondary-foreground">
                <Phone className="w-5 h-5 text-primary" />
                +44 7500 557059
              </div>
            </div>
            <Button variant="hero" size="lg" asChild>
              <a href="https://calendly.com/abdurrehman-4/levelmeup" target="_blank" rel="noopener noreferrer">
                Book a Free Strategy Call <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="bg-background/50 border-border/50"
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="bg-background/50 border-border/50"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <select
                value={form.projectType}
                onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                required
                className="flex h-10 w-full rounded-md border border-border/50 bg-background/50 px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="" disabled>Project Type</option>
                <option value="webapp">Web App</option>
                <option value="website">Website</option>
                <option value="mobile">Mobile App</option>
                <option value="vr">VR / Immersive</option>
                <option value="other">Other</option>
              </select>
              <select
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                required
                className="flex h-10 w-full rounded-md border border-border/50 bg-background/50 px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="" disabled>Budget Range</option>
                <option value="3k-5k">$3,000 – $5,000</option>
                <option value="5k-10k">$5,000 – $10,000</option>
                <option value="10k-25k">$10,000 – $25,000</option>
                <option value="25k+">$25,000+</option>
              </select>
            </div>
            <Textarea
              placeholder="Tell us about your project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="bg-background/50 border-border/50"
            />
            <Button variant="hero" size="lg" type="submit" className="w-full">
              Send Message <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
