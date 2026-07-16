import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Highlights from "./components/Highlights";
import FeaturedExhibition from "./components/FeaturedExhibition";
import Gallery from "./components/Gallery";
import Certificate from "./components/Certificate";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Highlights />
      <FeaturedExhibition />
      <Gallery />
      <Certificate />
      <Experience />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;