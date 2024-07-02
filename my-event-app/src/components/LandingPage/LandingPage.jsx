import React from "react";
import HeroSection from "./HeroSection";
import Navigation from "../common/Navigation";
import Footer from "../common/Footer";

function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto p-4">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
