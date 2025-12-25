import { motion } from "framer-motion";
import { Button } from "../components/ui/button";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
             <img 
  src="/assets/shop-img-1.png" 
  alt="Artisan Craftsmanship" 
  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
/>
              <div className="absolute top-0 left-0 w-full h-full border-[1px] border-primary/20 m-4 -z-10" />
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white p-6 shadow-xl hidden md:flex flex-col justify-center items-center text-center border border-border">
              <span className="text-4xl font-serif text-primary font-bold">25+</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider mt-2">Years of Excellence</span>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block">About PK Jewellery</span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6 leading-tight">
              Crafting Memories into <span className="italic text-primary">Masterpieces</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              At PK Jewellery, we believe that every piece of jewelry tells a story. Since our inception, we have been dedicated to creating exquisite designs that blend traditional craftsmanship with modern aesthetics.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our master artisans pour their heart and soul into every creation, ensuring that each gem and every gram of gold meets the highest standards of quality and purity.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-serif text-xl mb-2">Certified Purity</h4>
                <p className="text-sm text-muted-foreground">100% Hallmarked gold and certified diamonds.</p>
              </div>
              <div>
                <h4 className="font-serif text-xl mb-2">Custom Design</h4>
                <p className="text-sm text-muted-foreground">Bespoke jewelry designed just for you.</p>
              </div>
            </div>

            <Button className="bg-foreground text-background hover:bg-primary hover:text-primary-foreground rounded-none px-8 py-6 uppercase tracking-widest">
              Read Our Story
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
