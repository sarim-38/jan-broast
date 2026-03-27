import { motion } from 'motion/react';
import { PhoneCall, ShoppingBag } from 'lucide-react';
import FoodpandaIcon from './FoodpandaIcon';

export default function OrderCTA() {
  return (
    <section id="order" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-orange-600 z-0">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-zinc-950 rounded-3xl p-8 md:p-12 shadow-2xl border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Craving Broast?</h2>
            <p className="text-zinc-400 text-lg max-w-md">
              Get it delivered hot and fresh to your doorstep, or call us ahead for quick pickup.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a 
              href="https://foodpanda.go.link/aYsFe" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D70F64] hover:bg-[#C20D5A] text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-[#D70F64]/20"
            >
              <FoodpandaIcon className="w-6 h-6" />
              <span>Order via Foodpanda</span>
            </a>
            
            <a 
              href="tel:03404793062" 
              className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-colors border border-zinc-700"
            >
              <PhoneCall size={24} className="text-orange-500" />
              <span>0340-4793062</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
