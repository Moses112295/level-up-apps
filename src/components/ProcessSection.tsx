import { motion } from "framer-motion";
import { MessageSquare, Pencil, Code2, Rocket } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Discovery", description: "We dive deep into your goals, users, and market to craft the perfect strategy." },
  { icon: Pencil, title: "Design", description: "Beautiful, conversion-focused UI/UX designed to delight your users." },
  { icon: Code2, title: "Develop", description: "Clean, scalable code built with modern tech that performs flawlessly." },
  { icon: Rocket, title: "Launch & Scale", description: "Deploy with confidence, then optimize and grow based on real data." },
];

const ProcessSection = () => (
  <section className="section-padding bg-secondary/30">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
          Our <span className="gradient-text">Process</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          From idea to launch in weeks, not months.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center relative"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5">
              <step.icon className="w-7 h-7 text-primary" />
            </div>
            <div className="text-xs font-bold text-primary mb-2">STEP {i + 1}</div>
            <h3 className="text-lg font-bold font-display mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
