import { motion } from 'motion/react';
import { Star, StarHalf, Quote } from 'lucide-react';

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-orange-500 font-semibold tracking-wider uppercase text-sm mb-2">Real Feedback</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold mb-4">What Karachi Says</h3>
            <p className="text-zinc-400 text-lg">
              We believe in transparency. We might not be perfect, but we're always striving to serve you the best broast in town.
            </p>
          </div>
          
          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 flex items-center gap-6 shrink-0">
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-white mb-1">4.9</div>
              <div className="text-sm text-zinc-400">Out of 5</div>
            </div>
            <div className="w-px h-12 bg-zinc-700"></div>
            <div>
              <div className="flex text-orange-500 mb-2">
                <Star className="fill-current w-5 h-5" />
                <Star className="fill-current w-5 h-5" />
                <Star className="fill-current w-5 h-5" />
                <Star className="fill-current w-5 h-5" />
                <StarHalf className="fill-current w-5 h-5" />
              </div>
              <div className="text-sm text-zinc-400">Based on Google Reviews</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Positive Review */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 relative"
          >
            <Quote className="absolute top-6 right-6 w-8 h-8 text-zinc-800" />
            <div className="flex text-orange-500 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="fill-current w-4 h-4" />)}
            </div>
            <p className="text-zinc-300 mb-6 italic">
              "Honestly the best value for money in Bahadurabad. The chicken is always crispy on the outside and juicy inside. Their raita is the real MVP though!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center font-bold text-orange-500">
                S
              </div>
              <div>
                <div className="font-bold text-white">Salman K.</div>
                <div className="text-xs text-zinc-500">Local Guide</div>
              </div>
            </div>
          </motion.div>

          {/* Realistic/Neutral Review */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 relative"
          >
            <Quote className="absolute top-6 right-6 w-8 h-8 text-zinc-800" />
            <div className="flex text-orange-500 mb-4">
              {[...Array(4)].map((_, i) => <Star key={i} className="fill-current w-4 h-4" />)}
              <StarHalf className="fill-current w-4 h-4" />
            </div>
            <p className="text-zinc-300 mb-6 italic">
              "The food is great and very affordable, but the seating area can get really crowded on weekends. I prefer taking it away or ordering via Foodpanda."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center font-bold text-orange-500">
                A
              </div>
              <div>
                <div className="font-bold text-white">Ayesha M.</div>
                <div className="text-xs text-zinc-500">Regular Customer</div>
              </div>
            </div>
          </motion.div>

          {/* Positive Review */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 relative"
          >
            <Quote className="absolute top-6 right-6 w-8 h-8 text-zinc-800" />
            <div className="flex text-orange-500 mb-4">
              {[...Array(4)].map((_, i) => <Star key={i} className="fill-current w-4 h-4" />)}
              <StarHalf className="fill-current w-4 h-4" />
            </div>
            <p className="text-zinc-300 mb-6 italic">
              "Been eating here since college days. The taste hasn't changed a bit. It's my go-to spot for late-night cravings. Fast service and hot food."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center font-bold text-orange-500">
                F
              </div>
              <div>
                <div className="font-bold text-white">Fahad R.</div>
                <div className="text-xs text-zinc-500">Food Enthusiast</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://maps.app.goo.gl/rzi7gTfUkphc8gXP6" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium transition-colors"
          >
            Leave a Review on Google <Star className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
