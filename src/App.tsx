import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Features from './components/Features';
import Reviews from './components/Reviews';
import OrderCTA from './components/OrderCTA';
import Location from './components/Location';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-zinc-950 font-sans text-zinc-50">
        <Navbar />
        <CartDrawer />
        <main>
        <Hero />
        <Menu />
        <Features />
        <Reviews />
        <OrderCTA />
        <Location />
        <Gallery />
      </main>
      <Footer />
      <FloatingWhatsApp />
      </div>
    </CartProvider>
  );
}
