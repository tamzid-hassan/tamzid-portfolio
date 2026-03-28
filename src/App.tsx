import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { NotFound } from './components/NotFound';

export default function App() {
  // Check if the user is on the main page or a broken link
  const isHomePage = window.location.pathname === '/';

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/30 selection:text-white">
      <CustomCursor />

      {/* Global Background UI Materials */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Subtle Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px][mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Glowing Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Render the 404 page if wrong URL, otherwise render the portfolio */}
        {!isHomePage ? (
          <NotFound />
        ) : (
          <>
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}