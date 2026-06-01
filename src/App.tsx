import  { useState } from "react";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import AboutPage from "./pages/AboutPage";
import Carousel from "./pages/Carousel";
import SelectedWorks from "./pages/SelectedWorks";
import FAQPage from "./pages/Faq";
import Footer from "./pages/Footer";

const App = () => {
  const [activeSection, setActiveSection] = useState<
    "home" | "about" | "works" | "faq"
  >("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return (
          <>
            <Hero />
            <Carousel />
            <AboutPage />;
            <SelectedWorks />;
            <FAQPage />;
          </>
        );
      case "about":
        return (
          <>
            <div style={{ paddingTop: 120 }}>
              <AboutPage />; <FAQPage />;
            </div>
          </>
        );
      case "works":
        return <SelectedWorks />;
      case "faq":
        return <FAQPage />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {renderSection()}

      {/* Always show Footer at the bottom */}
      <Footer setActiveSection={setActiveSection} />
    </div>
  );
};

export default App;
