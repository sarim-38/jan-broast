import { Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 pt-16 pb-8 border-t border-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="inline-block mb-6 transition-transform hover:scale-105">
              <Logo className="h-16 md:h-20 w-auto" />
            </a>
            <p className="text-zinc-400 max-w-sm mb-6">
              Serving Karachi's favorite crispy, juicy, and affordable broasted chicken since 2014. Come for the crunch, stay for the taste.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-orange-500 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-orange-500 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-orange-500 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#menu" className="text-zinc-400 hover:text-orange-500 transition-colors">Our Menu</a></li>
              <li><a href="#features" className="text-zinc-400 hover:text-orange-500 transition-colors">Why Choose Us</a></li>
              <li><a href="#reviews" className="text-zinc-400 hover:text-orange-500 transition-colors">Customer Reviews</a></li>
              <li><a href="https://maps.app.goo.gl/rzi7gTfUkphc8gXP6" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-orange-500 transition-colors">Google Reviews</a></li>
              <li><a href="#location" className="text-zinc-400 hover:text-orange-500 transition-colors">Location & Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Order Now</h4>
            <ul className="space-y-3">
              <li><a href="https://foodpanda.go.link/aYsFe" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-orange-500 transition-colors">Foodpanda</a></li>
              <li><a href="tel:03404793062" className="text-zinc-400 hover:text-orange-500 transition-colors">Call: 0340-4793062</a></li>
              <li><a href="https://wa.me/923404793062" className="text-zinc-400 hover:text-orange-500 transition-colors">WhatsApp Order</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Jan's Broasted Chicken. All rights reserved.
          </p>
          <p className="text-zinc-600 text-sm">
            Powered by Jan's Broasted Chicken
          </p>
        </div>
      </div>
    </footer>
  );
}
