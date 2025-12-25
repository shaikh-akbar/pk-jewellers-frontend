import { motion } from "framer-motion";
import { Gem, Hammer, RefreshCw, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

const services = [
  {
    icon: <Gem size={32} />,
    title: "Custom Design",
    description: "Bring your vision to life with our bespoke jewelry design service. We sketch, model, and craft unique pieces tailored to your style."
  },
  {
    icon: <Hammer size={32} />,
    title: "Jewelry Repair",
    description: "Expert restoration for your cherished pieces. From resizing rings to fixing clasps, we handle your jewelry with care."
  },
  {
    icon: <RefreshCw size={32} />,
    title: "Gold Exchange",
    description: "Upgrade your collection. Exchange your old gold for new, trendy designs at the best market rates with complete transparency."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Cleaning & Polishing",
    description: "Restore the sparkle. Our professional cleaning and polishing services make your jewelry look brand new again."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-foreground mb-4"
          >
            Exclusive Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground"
          >
            Beyond selling jewelry, we provide comprehensive care and customization services to ensure your precious items last a lifetime.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 group bg-background">
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className="mb-6 p-4 bg-primary/10 text-primary rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-serif text-xl mb-4 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <a href="#contact" className="text-xs font-bold uppercase tracking-widest text-primary border-b border-primary/30 pb-1 group-hover:border-primary transition-all">
                    Learn More
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
