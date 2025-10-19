import React, { useState } from 'react';
import './App.css';

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
      <header className="App-header">
        <h1>Curso Go e Ebiten</h1>
        <p>Aprenda a criar jogos com Go</p>
      </header>
      <main className="main-content">
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
        <section className="promo-video">
          <video controls width="100%" height="400">
            <source src={`${process.env.PUBLIC_URL}/videos/course.mp4`} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </section>
        <section className="modules">
          <h3>Conteúdo do Curso</h3>
          <div className="modules-grid">
            <div className="module">
              <h4>Introdução ao Go e Ebiten</h4>
              <p>Instalação e primeiros passos com Go para jogos.</p>
            </div>
            <div className="module">
              <h4>Sintaxe Básica em Go</h4>
              <p>Fundamentos da linguagem Go aplicada a jogos.</p>
            </div>
            <div className="module">
              <h4>Criando Janelas e Gráficos</h4>
              <p>Renderização básica com Ebiten.</p>
            </div>
            <div className="module">
              <h4>Animações e Sprites</h4>
              <p>Adicione movimento aos seus jogos.</p>
            </div>
            <div className="module">
              <h4>Física e Colisões</h4>
              <p>Implemente interações realistas.</p>
            </div>
            <div className="module">
              <h4>Áudio e Efeitos Sonoros</h4>
              <p>Integre sons para melhor experiência.</p>
            </div>
          </div>
        </section>
        <section className="benefits">
          <h3>Por Que Escolher Este Curso?</h3>
          <div className="benefits-grid">
            <div className="benefit">
              <h4>Go para Jogos</h4>
              <p>Aprenda uma linguagem eficiente e moderna para desenvolvimento de jogos.</p>
            </div>
            <div className="benefit">
              <h4>Projetos Práticos</h4>
              <p>15 aulas com exercícios reais para criar jogos do zero.</p>
            </div>
            <div className="benefit">
              <h4>Suporte Direto</h4>
              <p>Contato com instrutor para tirar dúvidas.</p>
            </div>
            <div className="benefit">
              <h4>Acesso Vitalício</h4>
              <p>Conteúdo sempre disponível, com atualizações.</p>
            </div>
          </div>
        </section>
        <section className="instructor">
          <h3>Sobre o Instrutor</h3>
          <div className="instructor-card">
            <img src={`${process.env.PUBLIC_URL}/images/instructor.jpg`} alt="Instrutor Alex Silva" />
            <div className="instructor-info">
              <h4>Alex Silva</h4>
              <p className="instructor-title">Desenvolvedor de Jogos & Especialista em Go</p>
              <p>Com 5 anos de experiência, já criei jogos publicados na itch.io e Steam. Apaixonado por ensinar Go e Ebiten de forma prática.</p>
              <div className="instructor-stats">
                <span>🎮 10+ Jogos Criados</span>
                <span>👥 500+ Alunos</span>
                <span>⭐ 4.9/5 Avaliação</span>
              </div>
            </div>
          </div>
        </section>
        <section className="bonuses">
          <h3>Bônus Exclusivos</h3>
          <div className="bonuses-grid">
            <div className="bonus">
              <h4>Publicação de Jogos</h4>
              <p>Guia para publicar na itch.io e Steam.</p>
            </div>
            <div className="bonus">
              <h4>Multiplayer Básico</h4>
              <p>Adicione conectividade online.</p>
            </div>
            <div className="bonus">
              <h4>Comunidade Exclusiva</h4>
              <p>Acesso ao Discord para suporte.</p>
            </div>
          </div>
        </section>
        <section className="testimonials">
          <h3>Depoimentos de Alunos</h3>
          <div className="testimonial">
            <p>"Criei meu primeiro jogo em Go rapidamente. Recomendo!"</p>
            <cite>- Maria Santos, Desenvolvedora</cite>
          </div>
        </section>
        <section className="faq">
          <h3>Perguntas Frequentes</h3>
          <details>
            <summary>Sou iniciante, consigo acompanhar?</summary>
            <p>Sim! O curso é feito para quem nunca programou.</p>
          </details>
          <details>
            <summary>Preciso de computador potente?</summary>
            <p>Não, um PC com 4GB RAM é suficiente.</p>
          </details>
          <details>
            <summary>Há garantia?</summary>
            <p>Sim, 7 dias de garantia total.</p>
          </details>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2025 PathShards. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
