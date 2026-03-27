import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-[100svh] w-full max-w-md bg-zinc-950 border-l border-zinc-800 z-[70] flex flex-col shadow-2xl"
          >
            <div className="p-6 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50">
              <h2 className="text-xl font-heading font-bold flex items-center gap-2 text-white">
                <ShoppingBag className="text-orange-500" /> Your Cart
              </h2>
              <button 
                onClick={() => setIsCartOpen(false)} 
                className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="text-center text-zinc-500 mt-20 flex flex-col items-center gap-4">
                  <ShoppingBag size={64} className="opacity-20" />
                  <p className="text-lg">Your cart is empty</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-orange-500 font-medium hover:underline mt-2"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                items.map(item => (
                  <div key={item.id} className="flex gap-4 bg-zinc-900/50 p-3 rounded-xl border border-zinc-800/50">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-sm text-zinc-100 line-clamp-2">{item.name}</h3>
                        <p className="text-orange-500 font-medium text-sm mt-1">Rs. {item.price}</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-3 bg-zinc-950 rounded-lg border border-zinc-800 px-2 py-1">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-zinc-400 hover:text-white">
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-medium w-4 text-center text-zinc-100">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-zinc-400 hover:text-white">
                            <Plus size={14} />
                          </button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-xs text-red-400 hover:text-red-300 underline">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-zinc-800 bg-zinc-900/50">
                <div className="flex justify-between mb-6 text-lg font-bold text-white">
                  <span>Total</span>
                  <span className="text-orange-500">Rs. {cartTotal}</span>
                </div>
                <a 
                  href={`https://wa.me/923404793062?text=${encodeURIComponent('Hello! I would like to order:\n\n' + items.map(i => `${i.quantity}x ${i.name} (Rs. ${i.price * i.quantity})`).join('\n') + `\n\n*Total: Rs. ${cartTotal}*`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold text-center flex items-center justify-center gap-2 transition-colors shadow-lg shadow-orange-500/20"
                >
                  Checkout via WhatsApp
                </a>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
