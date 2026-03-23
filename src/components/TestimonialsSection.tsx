import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, FinTrack",
    quote: "Levelmeup delivered our fintech platform in 8 weeks. Revenue increased 3x within the first quarter after launch.",
  },
  {
    name: "Marcus Rivera",
    role: "Founder, FitPulse",
    quote: "The mobile app they built for us hit 50K downloads in the first month. Their process is incredibly smooth.",
  },
  {
    name: "Aisha Patel",
    role: "CTO, VRLearn",
    quote: "Our VR training platform reduced onboarding time by 60%. The team's expertise in immersive tech is unmatched.",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
          What Clients <span className="gradient-text">Say</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-secondary-foreground mb-6 leading-relaxed">"{t.quote}"</p>
            <div>
              <div className="font-semibold font-display">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
