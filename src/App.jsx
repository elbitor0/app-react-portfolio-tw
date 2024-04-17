import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import NavbarApp from "./pages/NavbarApp";
import FooterApp from "./pages/FooterApp";

function App() {
  return (
    <div className="App" style={{ backgroundImage: "url(images/bg.jpg)" }}>
      <NavbarApp />
      <Routes>
        {/* Use Home component for the root path */}
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        {/* Add a nested route for the crypto-wallet */}
        <Route path="portfolio/crypto-wallet" element={<CryptoWallet />} />
        <Route path="portfolio/smoothies" element={<Smoothies />} />
        <Route path="portfolio/fashion" element={<Fashion />} />
        <Route path="portfolio/project-hero" element={<ProjectHero />} />
        <Route
          path="portfolio/project-multi-column"
          element={<ProjectMultiColumn />}
        />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <FooterApp />
    </div>
  );
}

// Define the CryptoWallet component to handle the specific route
function CryptoWallet() {
  return (
    <iframe
      src="/app-react-portfolio-tw/portfolio/crypto-wallet/index.html"
      width={1230}
      height={500}
    />
  );
}

function Smoothies() {
  return (
    <iframe
      src="/app-react-portfolio-tw/portfolio/smoothies/index.html"
      width={1230}
      height={500}
    />
  );
}
function ProjectHero() {
  return (
    <iframe
      src="/app-react-portfolio-tw/portfolio/project-hero/index-1.html"
      width={1230}
      height={500}
    />
  );
}

function Fashion() {
  return (
    <iframe
      src="/app-react-portfolio-tw/portfolio/fashion/index.html"
      width={1230}
      height={500}
    />
  );
}

function ProjectMultiColumn() {
  return (
    <iframe
      src="/app-react-portfolio-tw/portfolio/project-multi-column/index.html"
      width={1230}
      height={500}
    />
  );
}

export default App;
