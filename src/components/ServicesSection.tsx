import { motion } from "framer-motion";
import { Globe, Smartphone, Monitor, Glasses, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Monitor,
    title: "Web App Development",
    description: "Custom web applications that automate your business, boost productivity, and scale with your growth.",
    benefits: ["Real-time dashboards", "Workflow automation", "Cloud-native architecture"],
    color: "from-primary to-primary/60",
  },
  {
    icon: Globe,
    title: "Website Design",
    description: "High-converting websites that turn visitors into customers with stunning design and blazing-fast performance.",
    benefits: ["SEO optimized", "Conversion focused", "Mobile-first design"],
    color: "from-accent to-accent/60",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps that your users will love — from concept to App Store launch.",
    benefits: ["iOS & Android", "Push notifications", "Offline-ready"],
    color: "from-primary to-accent",
  },
  {
    icon: Glasses,
    title: "VR / Immersive Apps",
    description: "Cutting-edge virtual reality experiences for training, marketing, and entertainment that set you apart.",
    benefits: ["3D environments", "Interactive experiences", "Multi-platform VR"],
    color: "from-accent to-primary",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
            What We <span className="gradient-text">Build</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            End-to-end digital solutions designed to get you more users, automate your business, and launch faster.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 group hover:border-primary/30 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-5">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-secondary-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
              <Button variant="ghost" className="text-primary group-hover:translate-x-1 transition-transform p-0">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
