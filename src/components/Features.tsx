import { motion } from 'motion/react';
import { Wallet, Droplet, Clock, Car } from 'lucide-react';

const features = [
  {
    icon: <Wallet className="w-8 h-8 text-orange-500" />,
    title: 'Affordable Pricing',
    description: 'Premium taste without the premium price tag. Best value in Bahadurabad.',
  },
  {
    icon: <Droplet className="w-8 h-8 text-orange-500" />,
    title: 'Signature Dahi Raita',
    description: 'Our secret recipe raita perfectly complements the crispy, spicy chicken.',
  },
  {
    icon: <Clock className="w-8 h-8 text-orange-500" />,
    title: 'Fast Service',
    description: 'Hot and fresh, served quickly so you never have to wait long for your cravings.',
  },
  {
    icon: <Car className="w-8 h-8 text-orange-500" />,
    title: 'Dine-in & Drive-through',
    description: 'Enjoy in our cozy seating area or grab it on the go from your car.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-zinc-900 border-y border-zinc-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-orange-500 font-semibold tracking-wider uppercase text-sm mb-2">Why Choose Us</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6">More Than Just Fried Chicken</h3>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              At Jan's Broasted Chicken, we believe in delivering an experience. From our carefully marinated chicken to our famous raita, every bite is crafted for perfection. We've built our reputation on consistency, affordability, and a taste that keeps Karachi coming back.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col gap-3"
                >
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-zinc-100">{feature.title}</h4>
                  <p className="text-zinc-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden border border-zinc-800 aspect-[4/5]"
            >
              <img 
                src="https://images.unsplash.com/photo-1625938146369-adc83368bda7?q=80&w=1000&auto=format&fit=crop" 
                alt="Fresh Broast Preparation" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 bg-zinc-900/90 backdrop-blur-md p-6 rounded-2xl border border-zinc-700">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    10+
                  </div>
                  <div>
                    <h5 className="font-bold text-white">Years of Excellence</h5>
                    <p className="text-sm text-zinc-400">Serving Bahadurabad since 2014</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl z-[-1]"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-orange-600/20 rounded-full blur-3xl z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
