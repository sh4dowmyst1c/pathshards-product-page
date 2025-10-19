import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Hero from './components/Hero';
import Modules from './components/Modules';
import Benefits from './components/Benefits';
import Instructor from './components/Instructor';
import Bonuses from './components/Bonuses';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 4);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 4) % 4);
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Carousel currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} nextSlide={nextSlide} prevSlide={prevSlide} />
        <Hero />
        <section className="promo-video">
          <video controls width="100%" height="400">
            <source src={`${process.env.PUBLIC_URL}/videos/course.mp4`} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </section>
        <Modules />
        <Benefits />
        <Instructor />
        <Bonuses />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;
