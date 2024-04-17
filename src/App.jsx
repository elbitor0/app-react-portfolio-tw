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
    <div className="App" style={{ backgroundImage: "url(/images/bg.jpg)" }}>
      <NavbarApp />
      <Routes>
        {/* Use Home component for the root path */}
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />}>
          {/* Add a nested route for the crypto-wallet */}
          <Route path="crypto-wallet" element={<CryptoWallet />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
      </Routes>
      <FooterApp />
    </div>
  );
}

// Define the CryptoWallet component to handle the specific route
function CryptoWallet() {
  return (
    <div>
      {/* Link to the index.html file */}
      <Link to="/portfolio/crypto-wallet/index.html">Go to Crypto Wallet</Link>
      {/* Add any other content related to the crypto wallet page */}
    </div>
  );
}

export default App;
