import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How long does a typical project take?", a: "Most projects are delivered within 2–6 weeks depending on complexity. We'll provide a detailed timeline during our strategy call." },
  { q: "What technologies do you use?", a: "We use modern, battle-tested tech: React, React Native, Node.js, TypeScript, and WebXR for VR. We pick the best tools for each project." },
  { q: "Do you offer ongoing support?", a: "Yes! All plans include post-launch support. We also offer monthly retainer packages for continuous development and maintenance." },
  { q: "Can you work with our existing team?", a: "Absolutely. We seamlessly integrate with your existing developers, designers, and product managers." },
  { q: "What's your refund policy?", a: "We offer a satisfaction guarantee. If we don't deliver on agreed milestones, you get a full refund for that phase." },
  { q: "How do we get started?", a: "Book a free strategy call. We'll discuss your project, provide a proposal, and kick off within days of approval." },
];

const FAQSection = () => (
  <section id="faq" className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="glass-card px-6 border-none">
              <AccordionTrigger className="text-left font-display font-semibold hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
