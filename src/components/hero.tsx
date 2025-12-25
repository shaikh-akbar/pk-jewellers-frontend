import { motion } from "framer-motion";
import { Button } from "../components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img
          src="/assets/shop-img-2.png" 
          alt="Luxury Jewellery"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs font-medium tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
            Timeless Elegance
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium mb-6 leading-tight"
        >
          Redefining <br />
          <span className="italic text-primary-foreground/90">Luxury</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-xl mx-auto text-lg md:text-xl text-white/90 mb-10 font-light"
        >
          Discover our exclusive collection of handcrafted gold and diamond jewellery, designed for moments that last forever.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 text-base tracking-widest uppercase font-medium"
          >
            Shop Collection
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-transparent text-white border-white hover:bg-white hover:text-black rounded-none px-8 py-6 text-base tracking-widest uppercase font-medium"
          >
            Explore Services
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
