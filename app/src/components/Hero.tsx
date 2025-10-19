import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Crie Jogos com Go e Ebiten</h2>
        <p className="hero-subtitle">
          Domine desenvolvimento de jogos 2D com Go. Aprenda Ebiten do zero e publique seus jogos.
        </p>
        <div className="hero-features">
          <ul>
            <li>✅ 15 módulos práticos para jogos</li>
            <li>✅ Projetos completos em Go</li>
            <li>✅ Física, áudio e animações</li>
            <li>✅ Certificado de conclusão</li>
          </ul>
        </div>
        <div className="pricing">
          <span className="price">R$ 79,90</span>
          <span className="original-price">R$ 149,90</span>
        </div>
        <button className="cta-button">Inscreva-se Agora</button>
      </div>
      <div className="hero-image">
        <img src={`${process.env.PUBLIC_URL}/images/course.jpg`} alt="Curso de Jogos com Go e Ebiten" />
      </div>
    </section>
  );
}

export default Hero;
