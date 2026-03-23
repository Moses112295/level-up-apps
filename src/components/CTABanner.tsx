import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTABanner = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-card glow-border p-12 lg:p-16 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-48 h-48 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4 text-balance">
            Ready to <span className="gradient-text">Level Up</span> Your Business?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Join 50+ companies that transformed their digital presence. Your free strategy session is one click away.
          </p>
          <Button variant="hero" size="lg" className="text-base px-6 sm:px-10 py-6 w-full sm:w-auto" asChild>
            <a href="https://calendly.com/abdurrehman-4/levelmeup" target="_blank" rel="noopener noreferrer">
              Book Your Free Call Now <ArrowRight className="w-5 h-5 ml-1" />
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTABanner;
