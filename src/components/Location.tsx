import { MapPin, Clock, Phone } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-orange-500 font-semibold tracking-wider uppercase text-sm mb-2">Visit Us</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold mb-8">Find Your Flavor</h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center shrink-0 border border-zinc-800">
                  <MapPin className="text-orange-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Address</h4>
                  <p className="text-zinc-400 leading-relaxed mb-3">
                    Shop no. 5, Ayesha Residency,<br />
                    Alamgir Rd, BMCHS Sharafabad,<br />
                    Bahadurabad, Karachi, Pakistan
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/rzi7gTfUkphc8gXP6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-orange-500 hover:text-orange-400 font-medium transition-colors"
                  >
                    Get Directions <MapPin className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center shrink-0 border border-zinc-800">
                  <Clock className="text-orange-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Opening Hours</h4>
                  <p className="text-zinc-400">
                    Monday - Sunday<br />
                    <span className="text-white font-medium">12:00 PM – 12:00 AM</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center shrink-0 border border-zinc-800">
                  <Phone className="text-orange-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Contact</h4>
                  <p className="text-zinc-400">
                    <a href="tel:03404793062" className="hover:text-orange-500 transition-colors">0340-4793062</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px] lg:h-auto rounded-3xl overflow-hidden border border-zinc-800 relative">
            {/* Embed Google Map - Using a generic Karachi map embed for demo, ideally replace with exact place ID */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.313992521699!2d67.06271931500676!3d24.88726598404135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eebb56c5025%3A0x608f1e5e03223004!2sBahadurabad%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1650000000000!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(100%)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
            {/* Note: The filter above creates a pseudo-dark mode for the map */}
          </div>
        </div>
      </div>
    </section>
  );
}
