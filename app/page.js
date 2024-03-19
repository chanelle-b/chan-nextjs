// Import your components
import Image from "next/image";
import HeaderSection from './components/HeaderSection';
import Navbar from './components/Navbar';
import About from './components/About';
import Socials from './components/Socials';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';


export default function Home() {
  return (
    <div className="relative min-h-screen">
      <video
        src={require("../public/bgUpscaled.mp4")}
        autoPlay
        poster="../public/bgposter.png"
        muted
        loop
        style={{
          position: 'fixed',
          height: '100%',
          opacity: 0.5,
          top: '50%',
          left: '50%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: '-1',
        }}
      />



      <main className="relative z-10 ">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4 ">
          <Socials />
          <HeaderSection />
          <About />
          <ProjectSection />
          <ContactSection />
        </div>
      </main>
    </div>
  );
}
