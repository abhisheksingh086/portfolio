import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Technologies } from '@/components/Technologies';
import { Portfolio } from '@/components/Portfolio';
import { Team } from '@/components/Team';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Technologies />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
