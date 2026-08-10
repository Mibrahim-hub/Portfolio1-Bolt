import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-20">
        <div className="absolute left-1/4 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-primary-500/5 blur-[140px]" />
        <div className="absolute right-0 top-1/2 h-[35rem] w-[35rem] rounded-full bg-accent-500/5 blur-[140px]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
