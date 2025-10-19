import React from 'react';
import './Carousel.css';

function Carousel({ currentSlide, setCurrentSlide, nextSlide, prevSlide }) {

  return (
    <section className="carousel">
      <h3>Jogos Criados por Alunos</h3>
      <div className="carousel-container">
        <div className="carousel-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          <div className="carousel-slide">
            <img src={`${process.env.PUBLIC_URL}/images/game1.jpg`} alt="Jogo 1" />
            <p>Plataforma 2D criada em Go</p>
          </div>
          <div className="carousel-slide">
            <img src={`${process.env.PUBLIC_URL}/images/game2.jpg`} alt="Jogo 2" />
            <p>Puzzle game interativo</p>
          </div>
          <div className="carousel-slide">
            <img src={`${process.env.PUBLIC_URL}/images/game3.jpg`} alt="Jogo 3" />
            <p>Ação com física avançada</p>
          </div>
          <div className="carousel-slide">
            <img src={`${process.env.PUBLIC_URL}/images/game4.jpg`} alt="Jogo 4" />
            <p>Jogo multiplayer básico</p>
          </div>
        </div>
      </div>
      <button className="carousel-btn prev" onClick={prevSlide}>‹</button>
      <button className="carousel-btn next" onClick={nextSlide}>›</button>
    </section>
  );
}

export default Carousel;
