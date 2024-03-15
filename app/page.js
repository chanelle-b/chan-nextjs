// Import your components
import Image from "next/image";
import HeaderSection from './components/HeaderSection';
import Navbar from './components/Navbar';
import About from './components/About';


export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* MainBg acts as the background */}
      <video
        src={require("../public/bgUpscaled.mp4")}
        autoPlay
        poster="../public/bgposter.png"
        muted
        loop
        style={{
          position: 'fixed', // or 'absolute' if 'fixed' doesn't fit your needs
          height: '100%',
          opacity: 0.5,
          top: '50%',
          left: '50%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: '-1', // Ensure video is in the background
        }}
      />


      {/* Content container must be positioned relative or higher z-index to ensure it's on top of MainBg */}
      <main className="relative z-10 ">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4 ">
          <HeaderSection />
          <About />

          {/* Your main content goes here */}
        </div>
      </main>
    </div>
  );
}
