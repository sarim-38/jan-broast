import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const menuCategories = [
  {
    id: 'broast',
    name: 'Broasted Chicken',
    items: [
      {
        id: 'quarter-broast',
        name: 'Quarter Broast (Leg/Breast)',
        description: 'Crispy quarter chicken served with fries, bun, and signature raita.',
        price: 650,
        image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=800&auto=format&fit=crop',
      },
      {
        id: 'half-broast',
        name: 'Half Broast',
        description: 'Two pieces of crispy chicken, large fries, 2 buns, and raita.',
        price: 1200,
        image: 'https://images.unsplash.com/photo-1569691899455-88464f6d3ab1?q=80&w=800&auto=format&fit=crop',
      },
      {
        id: 'full-broast',
        name: 'Full Broast (Family Pack)',
        description: 'Four pieces of chicken, family fries, 4 buns, and large raita.',
        price: 2200,
        image: 'https://images.unsplash.com/photo-1606683024867-0740941910e5?q=80&w=800&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'wings',
    name: 'Crispy Wings',
    items: [
      {
        id: '6-wings',
        name: '6 Pcs Hot Wings',
        description: 'Spicy, crispy coated chicken wings.',
        price: 500,
        image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?q=80&w=800&auto=format&fit=crop',
      },
      {
        id: '12-wings',
        name: '12 Pcs Party Wings',
        description: 'Perfect for sharing. Served with garlic mayo.',
        price: 950,
        image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=800&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'sides',
    name: 'Fries & Sides',
    items: [
      {
        id: 'masala-fries',
        name: 'Masala Fries',
        description: 'Crispy fries tossed in our special spicy masala.',
        price: 250,
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop',
      },
      {
        id: 'mayo-fries',
        name: 'Mayo Garlic Fries',
        description: 'Loaded fries topped with creamy garlic mayo.',
        price: 350,
        image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=800&auto=format&fit=crop',
      },
      {
        id: 'raita',
        name: 'Extra Signature Raita',
        description: 'Our famous dahi raita.',
        price: 80,
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop',
      },
    ],
  },
];

export default function Menu() {
  const { addToCart } = useCart();

  return (
    <section id="menu" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-orange-500 font-semibold tracking-wider uppercase text-sm mb-2">Our Menu</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold mb-4">Taste the Crunch</h3>
          <p className="text-zinc-400 text-lg">
            Prepared fresh daily with our secret blend of spices. Quality food that doesn't break the bank.
          </p>
        </div>

        <div className="space-y-20">
          {menuCategories.map((category, catIndex) => (
            <div key={category.id}>
              <h4 className="text-2xl font-heading font-bold mb-8 border-b border-zinc-800 pb-4 inline-block">
                {category.name}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-orange-500/50 transition-colors group flex flex-col"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-80"></div>
                      <div className="absolute bottom-4 right-4 bg-orange-500 text-white font-bold px-3 py-1 rounded-full text-sm">
                        Rs. {item.price}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h5 className="text-xl font-bold mb-2 text-zinc-100">{item.name}</h5>
                      <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">{item.description}</p>
                      
                      <button
                        onClick={() => addToCart(item)}
                        className="w-full bg-zinc-800 hover:bg-orange-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors group/btn"
                      >
                        <Plus size={18} className="text-orange-500 group-hover/btn:text-white transition-colors" />
                        Add to Cart
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
