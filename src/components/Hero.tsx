import { motion } from 'motion/react';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import FoodpandaIcon from './FoodpandaIcon';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop"
          alt="Crispy Broasted Chicken"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium mb-6 border border-orange-500/30"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Hot & Fresh – Order Now
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6"
          >
            Crispy. Juicy. <br />
            <span className="text-orange-500">Affordable.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-300 mb-8 max-w-lg"
          >
            Karachi’s Favorite Broast in Bahadurabad. Experience the perfect crunch with our signature dahi raita.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://foodpanda.go.link/aYsFe"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D70F64] hover:bg-[#C20D5A] text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-[#D70F64]/20"
            >
              <FoodpandaIcon className="w-5 h-5" />
              Order via Foodpanda
            </a>
            <a
              href="#menu"
              className="bg-zinc-800/80 hover:bg-zinc-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 backdrop-blur-sm transition-colors"
            >
              View Menu
              <ArrowRight size={20} />
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 flex items-center gap-4 text-sm text-zinc-400"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                  alt="Customer" 
                  className="w-8 h-8 rounded-full border-2 border-zinc-950"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p>Loved by 10,000+ foodies in Karachi</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
