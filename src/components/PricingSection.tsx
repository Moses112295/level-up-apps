import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$3,500",
    desc: "Perfect for landing pages and MVPs",
    features: ["Custom website or landing page", "Mobile responsive design", "SEO optimization", "2 rounds of revisions", "2-week delivery"],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$8,000",
    desc: "Full-featured web or mobile apps",
    features: ["Custom web or mobile app", "UI/UX design", "Backend & API integration", "Analytics dashboard", "4-week delivery", "3 months support"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Complex platforms and VR solutions",
    features: ["Multi-platform development", "VR / immersive experiences", "Dedicated project manager", "Priority support", "Custom timeline", "Ongoing maintenance"],
    highlighted: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="section-padding bg-secondary/30">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
          Simple, Transparent <span className="gradient-text">Pricing</span>
        </h2>
        <p className="text-muted-foreground text-lg">Starting from — custom quotes for every project.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`glass-card p-8 flex flex-col ${
              plan.highlighted ? "border-primary/40 glow-border" : ""
            }`}
          >
            {plan.highlighted && (
              <div className="text-xs font-bold text-primary mb-2 tracking-wider">MOST POPULAR</div>
            )}
            <h3 className="text-xl font-bold font-display mb-1">{plan.name}</h3>
            <div className="text-3xl font-bold font-display gradient-text mb-1">{plan.price}</div>
            <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>
            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-secondary-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              variant={plan.highlighted ? "hero" : "heroOutline"}
              size="lg"
              className="w-full"
              asChild
            >
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Get Started <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
