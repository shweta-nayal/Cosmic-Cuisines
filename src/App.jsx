import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MenuSection from "./components/MenuSection";
import BookingSection from "./components/BookingSection";
import AboutSection from "./components/AboutSection";

function App() {
  const [showHome, setShowHome] = useState(false);

  return (
    <div>
      {!showHome ? (
        <HeroSection onDiveIn={() => setShowHome(true)} />
      ) : (
        <>
          <Navbar />
          <main>
            <AboutSection />
            <MenuSection />
            <BookingSection />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
