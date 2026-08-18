import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Main Content */}
      <main className="pt-5">
        {/* Hero Section */}
        <section id="hero">
          <Hero />
        </section>

        {/* Features Section */}
        <section id="features">
          <Features />
        </section>

        {/* Pricing Section */}
        <section id="pricing">
          <Pricing />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;