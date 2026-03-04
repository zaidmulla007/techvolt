import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Sectors from '@/components/Sectors';
import Clients from '@/components/Clients';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Sectors />
      <Clients />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
