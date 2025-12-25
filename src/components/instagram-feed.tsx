import { motion } from "framer-motion";
import { Instagram, Play } from "lucide-react";

// Placeholder data for reels
const reels = [
  { id: 1, color: "bg-red-100" },
  { id: 2, color: "bg-blue-100" },
  { id: 3, color: "bg-green-100" },
  { id: 4, color: "bg-purple-100" }
];

export default function InstagramFeed() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2 block">Follow Us</span>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">@pkjewellery</h2>
          </div>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors mt-4 md:mt-0"
          >
            <Instagram size={18} />
            View Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {reels.map((reel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[9/16] overflow-hidden rounded-sm cursor-pointer"
            >
              {/* Using the interior image as a placeholder for all reels to look cohesive for now */}
              <img 
                 src="/assets/shop.png" 
                alt="Instagram Reel" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <Play size={24} fill="white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-xs font-medium truncate">Latest collection showcase ✨ #pkjewellery</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
