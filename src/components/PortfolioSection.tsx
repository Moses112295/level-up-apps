import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "FinTrack Dashboard", category: "Web App", description: "Real-time financial analytics platform for hedge funds." },
  { title: "FitPulse", category: "Mobile App", description: "AI-powered fitness app with 50K+ downloads in month one." },
  { title: "VRLearn Academy", category: "VR App", description: "Immersive corporate training reducing onboarding time by 60%." },
  { title: "NovaBrand", category: "Website", description: "Award-winning e-commerce site generating $2M+ in annual revenue." },
];

const PortfolioSection = () => (
  <section id="portfolio" className="section-padding bg-secondary/30">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
          Featured <span className="gradient-text">Work</span>
        </h2>
        <p className="text-muted-foreground text-lg">Real results for real businesses.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 group hover:border-primary/30 transition-all duration-300 cursor-pointer"
          >
            <div className="text-xs font-bold text-primary tracking-wider mb-3">{p.category.toUpperCase()}</div>
            <h3 className="text-xl font-bold font-display mb-2 flex items-center gap-2">
              {p.title}
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
            <p className="text-muted-foreground text-sm">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
