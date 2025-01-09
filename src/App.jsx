import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden h-screen w-full text-neutral-300 bg-neutral-100 dark:bg-neutral-900 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 bg-[size:20px_20px] opacity-20 blur-[100px] pointer-events-none"></div>
      </div>
      {/* Background Overlay */}

      <div className="container mx-auto px-8">
        {" "}
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Contact />
      </div>
      {/* Navbar */}
    </div>
  );
};

export default App;
